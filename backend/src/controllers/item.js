'use strict';

const ItemModel = require('../models/item');
const UserModel = require('../models/user');
const OrderModel = require('../models/order');

const getItem = async (req, res) => {
    const {
        id,
    } = req.params;

    const item = await ItemModel.findById(id);

    res.status(200).json(item);
};

const addItem = async (req, res) => {
    const {
        userId,
        itemInfo,
        stock,
    } = req.body;

    const user = await UserModel.findById(userId);
    const item = await ItemModel.create(itemInfo);

    user.store.items.push({
        itemId: item._id,
        stock,
    });
    user.save();

    res.status(200).json(user.store);
};

const removeItem = async (req, res) => {
    const {
        userId,
        itemId,
    } = req.body;

    const item = await ItemModel.findByIdAndRemove(itemId);

    if (!!item) {
        const user = await UserModel.findById(userId);

        user.store.items = user.store.items.filter((item) => {
            item.itemId !== itemId;
        });
        user.save();
        res.status(200).json(user.store);
    } else {
        res.status(404).json({
            message: 'item not found',
        });
    }
};

const updateItem = async (req, res) => {
    const {
        userId,
        itemId,
        itemInfo,
        stock,
    } = req.body;

    const user = await UserModel.findById(userId);
    const targetItems = user.store.items.filter((item) => item.itemId == itemId);

    if (targetItems.length === 0) {
        res.status(404).json({
            message: 'Item not found',
        });
    } else {
        targetItems[0].stock = stock;
        user.save();

        const item = await ItemModel.findByIdAndUpdate(itemId, itemInfo);
        res.status(200).json(item);
    }
};

const promoteItem = async (req, res) => {
    const {promotionEndDate, itemId} = req.body;

    const item = await ItemModel.findByIdAndUpdate(itemId, {
        isPromoted: true,
        promotionEndDate: promotionEndDate,
    }, {
            new: true,
        });

    res.status(200).json(item);
};

const findItems = async (req, res) => {
    const {names, categories} = req.params;
    const promises = names.map((name) => findItemsByName(name));
    let items = await Promise.all(promises);
    items = items.concat(await findItemsByCategories(categories));
    res.status(200).json(items);
};

const findItemsByName = async (name) => {
    const nameRegex = new RegExp(name, 'g');
    const items = await ItemModel.find({name: nameRegex});
    return items;
};

const findItemsByCategories = async (categories) => {
    const items = await ItemModel.find({
        'categories.type': {
            $in: categories,
        },
    });
    return items;
};

const getPromotedItems = async (req, res) => {
    const items = await ItemModel.find({
        isPromoted: true,
        promotionEndDate: {
            $gte: new Date(),
        },
    });

    res.status(200).json(items);
};

const getBestSeller = async (req, res) => {
    const {quantity} = req.query;
    const orders = await OrderModel.find({});
    const rankObj = {};
    for (const order of orders) {
        const itemId = order.itemId.toString();
        if (rankObj.hasOwnProperty(itemId)) {
            rankObj[itemId] = order.quantity;
        } else {
            rankObj[itemId] += order.quantity;
        }
    }

    const sortableRank = [];
    for (const itemId of Object.keys(rankObj)) {
        sortableRank.push([itemId, rankObj[itemId]]);
    }
    sortableRank.sort((x, y) => x[1] - y[1]);
    const bestSellerIds = sortableRank.slice(0, quantity).map((item) => item[0]);
    const bestSellers = await ItemModel.find({
        _id: {
            $in: bestSellerIds,
        },
    });

    res.status(200).json(bestSellers);
};

const getArtist = async (req, res) => {
    const {itemId} = req.query;

    const user = await UserModel.find({
        'store.items.itemId': itemId,
    }, {
            store: 1,
            profilePicUrl: 1,
            title: 1,
        });

    res.status(200).json(user[0] || {});
};

module.exports = {
    getItem,
    removeItem,
    updateItem,
    addItem,
    findItems,
    promoteItem,
    getPromotedItems,
    getBestSeller,
    getArtist,
};
