"use strict";

const StoreModel = require('../models/store');
const UserModel = require('../models/user');
const ItemModel = require('../models/item');

const changeName = async (req, res) => {
    const {
        userId,
        storeName
    } = req.body;
    const user = await UserModel.findByIdAndUpdate(userId, {
        $set: {
            'store.name': storeName
        }
    });
    res.status(200).json(user);
}

const visit = async (req, res) => {
    const {
        userId
    } = req.body;
    const user = await UserModel.findByIdAndUpdate(userId, {
        $inc: {
            'store.visits': 1
        }
    });
    res.status(200).json({
        visits: user.store.visits + 1
    });
}

const addRevenue = async (req, res) => {
    const {
        userId,
        revenue
    } = req.body;
    const user = await UserModel.findByIdAndUpdate(userId, {
        $inc: {
            'store.revenue': revenue
        }
    });

    res.status(200).json({
        revenue: user.store.revenue + revenue,
    });
}

const rate = async (req, res) => {
    const {
        userId,
        rating
    } = req.body;

    const user = await UserModel.findByIdAndUpdate(userId, {
        $inc: {
            'store.totalRating': rating,
            'store.ratingCount': 1
        }
    });

    res.status(200).json({
        totalRating: user.store.totalRating + rating,
        ratingCount: user.store.ratingCount + 1,
    })
}

const listItems = async (req, res) => {
    const {userId} = req.params;

    const user = await UserModel.findById(userId);
    res.status(200).json(user.store.items);
}

const addItem = async (req, res) => {
    const {
        userId,
        itemInfo,
        stock
    } = req.body;

    const user = await UserModel.findById(userId);
    const item = new ItemModel(itemInfo);

    user.store.items.push({
        item,
        stock
    });
    user.save();

    res.status(200).json(user.store);
}

const removeItem = async (req, res) => {
    const {
        userId,
        itemId
    } = req.body;

    const user = await UserModel.findById(userId);
    user.store.items.id(itemId).remove();
    user.save();

    res.status(200).json(user.store);
}

const updateItem = async (req, res) => {
    const {
        userId,
        itemId,
        itemInfo,
        stock
    } = req.body;

    const user = await UserModel.findById(userId);
    Object.assign(user.store.items.id(itemId).item, itemInfo);
    Object.assign(user.store.items.id(itemId), {stock});
    user.save();

    res.status(200).json(user.store);
}

module.exports = {
    changeName,
    visit,
    addRevenue,
    rate,
    addItem,
    removeItem,
    updateItem,
    listItems,
};