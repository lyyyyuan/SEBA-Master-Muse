'use strict';

const ItemModel = require('../models/item');
const UserModel = require('../models/user');

const getItems = async (req, res) => {
    const {
        itemIds,
    } = req.query;

    if (!!itemIds) {
        const items = await ItemModel.find({
            _id: {
                $in: itemIds,
            },
        });

        res.status(200).json(items);
    } else {
        res.status(404).json({
            message: 'item id required',
        });
    }
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

module.exports = {
    getItems,
    removeItem,
    updateItem,
    addItem,
};
