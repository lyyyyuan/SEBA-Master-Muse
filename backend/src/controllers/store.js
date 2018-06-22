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
        rating,
    } = req.body;

    const user = await UserModel.findByIdAndUpdate(userId, {
        $inc: {
            'store.totalRating': rating,
            'store.ratingCount': 1,
        },
    });

    res.status(200).json({
        totalRating: user.store.totalRating + rating,
        ratingCount: user.store.ratingCount + 1,
    });
};

const listItems = async (req, res) => {
    const {userId} = req.params;

    const user = await UserModel.findById(userId);
    const itemIds = user.store.items.map((item) => item.itemId);
    const items = await Promise.all(
        itemIds.map((id) => ItemModel.findById(id))
    );

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

    res.status(200).json({
        itemSold,
        revenue: user.store.revenue,
        visits: user.store.visits,
        rating: user.store.totalRating / (user.store.ratingCount || 1),
    });
};

const getStock = async (req, res) => {
    const {userId, itemId} = req.query;
    const user = await UserModel.findById(userId);
    const items = user.store.items;
    const {stock} = items.filter((item) => item.itemId.toString() === itemId.toString())[0];
    res.status(200).json({stock});
};


module.exports = {
    changeName,
    visit,
    addRevenue,
    rate,
    listItems,
    storeStats,
    getStock,
};
