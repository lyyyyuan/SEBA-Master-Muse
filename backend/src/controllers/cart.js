"use strict";

const UserModel = require('../models/user');


const addItemToCart = async (req, res) => {
    const {
        userId,
        itemId,
        quantity,
    } = req.body;

    const user = await UserModel.findById(userId);

    let inCart = false;
    user.cart.orders.forEach((item) => {
        if (item._id === itemId) {
            item.quantity++;

            inCart = true;
        }
    })

    if (!inCart) {
        user.cart.items.push({
            itemId,
            quantity,
        });
    }
    user.save();

    res.status(200).json(user.cart);

}


const listCart = async (req, res) => {
    const {
        userId,
    } = req.params;

    const user = await UserModel.findById(userId);
    res.status(200).json(user.cart);

}

const removeItemFromCart = async (req, res) => {
    const {
        userId,
        itemId,
    } = req.body;

    const user = await UserModel.findById(userId);

    user.cart.orders.forEach((item) => {
        if (item._id === itemId) {
            item.quantity--;
        }
    })
    user.save();
    res.status(200).json(user.cart);

}


module.exports = {
        addItemToCart,
        listCart,
        removeItemFromCart
    };





