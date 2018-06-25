'use strict';

const OrderModel = require('../models/order');
const ItemModel = require('../models/item');

const addItemToCart = async (req, res) => {
    const {buyerId, itemId, quantity, deliveryMethod} = req.body;

    const order = await OrderModel.create({
        buyerId,
        itemId,
        quantity: quantity || 1,
        deliveryMethod,
    });

    res.status(200).json(order);
};

const removeItemFromCart = async (req, res) => {
    const {orderId} = req.params;

    await OrderModel.findByIdAndRemove(orderId);

    res.status(200).json();
};

const listCart = async (req, res) => {
    const {buyerId} = req.query;
    const orders = await OrderModel.find({
        buyerId,
        status: 'inCart',
    });

    const orderObjects = orders.map((order) => order.toObject());
    for (const orderObject of orderObjects) {
        orderObject.item = await ItemModel.findById(orderObject.itemId);
    }

    res.status(200).json(orderObjects);
};

const listOrderHistory = async (req, res) => {
    const {buyerId} = req.query;
    const orders = await OrderModel.find({
        buyerId,
    });

    const orderObjects = orders.map((order) => order.toObject());
    for (const orderObject of orderObjects) {
        orderObject.item = await ItemModel.findById(orderObject.itemId);
    }

    res.status(200).json(orderObjects);
};

const incrementOrderQuantity = async (req, res) => {
    const {orderId} = req.body;
    const order = await OrderModel.findOneAndUpdate({
        _id: orderId,
    }, {
            $inc: {
                quantity: 1,
            },
        });

    res.status(200).json(order);
};

const decrementOrderQuantity = async (req, res) => {
    const {orderId} = req.body;
    const order = await OrderModel.findOneAndUpdate({
        _id: orderId,
    }, {
            $inc: {
                quantity: -1,
            },
        });

    if (order.quantity < 1) {
        const removed = await OrderModel.findByIdAndRemove(orderId);
        res.status(200).json(removed);
    } else {
        res.status(200).json(order);
    }
};

const payForOrder = async (req, res) => {
    const {orderId} = req.body;
    const order = await OrderModel.findByIdAndUpdate(orderId, {
        status: 'Paid',
    });
    res.status(200).json(order);
};

const deliverOrder = async (req, res) => {
    const {orderId} = req.body;
    const order = await OrderModel.findByIdAndUpdate(orderId, {
        status: 'Delivered',
    });
    res.status(200).json(order);
};

module.exports = {
    addItemToCart,
    removeItemFromCart,
    listCart,
    listOrderHistory,
    incrementOrderQuantity,
    decrementOrderQuantity,
    payForOrder,
    deliverOrder,
};
