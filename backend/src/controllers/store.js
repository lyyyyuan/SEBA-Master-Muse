'use strict';

const UserModel = require('../models/user');
const OrderModel = require('../models/order');
const ItemModel = require('../models/item');

const changeName = async (req, res) => {
    const {
        userId,
        storeName,
    } = req.body;
    const user = await UserModel.findByIdAndUpdate(userId, {
        $set: {
            'store.name': storeName,
        },
    });
    res.status(200).json(user);
};

const visit = async (req, res) => {
    const {
        userId,
    } = req.body;
    const user = await UserModel.findByIdAndUpdate(userId, {
        $inc: {
            'store.visits': 1,
        },
    });
    res.status(200).json({
        visits: user.store.visits + 1,
    });
};

const addRevenue = async (req, res) => {
    const {
        userId,
        revenue,
    } = req.body;
    const user = await UserModel.findByIdAndUpdate(userId, {
        $inc: {
            'store.revenue': revenue,
        },
    });

    res.status(200).json({
        revenue: user.store.revenue + revenue,
    });
};

const rate = async (req, res) => {
    const {
        userId,
        itemId,
        rating,
    } = req.body;
    //I am not sure if it's right, because it indicates rating is an unused constant. It might work, I referred to the link
    //https://stackoverflow.com/questions/42223352/mongodb-update-array-element-of-a-document-by-index-in-nodejs
    const item=await ItemModel.findByIdAndUpdate(itemId,{
        $inc: {
            ['ratingDistribution.${rating}']: 1
         },

    });
    //I am not sure whether the userId means the store owner's Id or buyer's Id
    const user = await UserModel.findByIdAndUpdate(userId, {
        $inc: {
            'store.ratingCount': 1,
        },
    });

    res.status(200).json({
        ratingDistribution: item.ratingDistribution,
        ratingCount: user.store.ratingCount + 1,
    });
};

const listItems = async (req, res) => {
    const {userId} = req.params;

    const user = await UserModel.findById(userId);
    const itemIds = user.store.items.map((item) => item.itemId);
    let items = await Promise.all(
        itemIds.map((id) => ItemModel.findById(id))
    );
    items = items.map((item) => {
        if (item.promotionEndDate < Date.now()) {
            item.isPromoted = false;
        }
        return item;
    });

    const result = user.store.items.map((item, i) => Object.assign(item.toObject(), items[i].toObject()));
    res.status(200).json(result);
};

const storeStats = async (req, res) => {
    const {userId} = req.params;
    const user = await UserModel.findById(userId);
    const itemIds = user.store.items.map((item) => item.itemId);
    let orders = await Promise.all(
        itemIds.map((id) => OrderModel.find({itemId: id}))
    );
    orders = orders.reduce((prev, next) => [...prev, ...next], []);
    const itemSold = orders.reduce((prev, next) => prev + next.quantity, 0);
    let totalRating=0;
    let i=1;
    itemIds.forEach(function(elem) {
        user.store.items.findById(elem,function (item) {
            item.ratingDistribution.forEach(function (elem) {
                totalRating += elem * i;
                i++;
            });
        });
    });
    res.status(200).json({
        itemSold,
        revenue: user.store.revenue,
        visits: user.store.visits,
        //rating: user.store.totalRating / (user.store.ratingCount || 1),
        rating:totalRating/(user.store.ratingCount || 1)

    });
};

const getStock = async (req, res) => {
    const {userId, itemId} = req.query;
    const user = await UserModel.findById(userId);
    const items = user.store.items;
    // I add .stock, as the 0 index can only get the first object right?
    const {stock} = items.filter((item) => item.itemId.toString() === itemId.toString())[0].stock;
    res.status(200).json({stock});
};

//add this new function
const getRatingDistribution = async (req, res) => {
    const {userId, itemId} = req.query;
    const user = await UserModel.findById(userId);
    const items = user.store.items;
    const {ratingDistribution} = items.filter((item) => item.itemId.toString() === itemId.toString())[0].ratingDistribution;
    res.status(200).json({ratingDistribution});
};

module.exports = {
    changeName,
    visit,
    addRevenue,
    rate,
    listItems,
    storeStats,
    getStock,
    getRatingDistribution
};
