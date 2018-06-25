'use strict';

import AsyncHttpService from './AsyncHttpService';

export default class OrderService {
    static baseURL = () => 'http://localhost:3000/order';

    static addItemToCart = async (buyerId, itemId, quantity, deliveryMethod) => {
        return await AsyncHttpService.post(
            `${OrderService.baseURL()}/cart`,
            {buyerId, itemId, quantity, deliveryMethod}
        );
    }

    static removeItemFromCart = async (orderId) => {
        return await AsyncHttpService.delete(
            `${OrderService.baseURL()}/cart`,
            orderId
        );
    }

    static listCart = async (buyerId) => {
        return await AsyncHttpService.get(
            `${OrderService.baseURL()}/cart`,
            {buyerId}
        );
    }

    static listOrderHistory = async (buyerId) => {
        return await AsyncHttpService.get(
            OrderService.baseURL(),
            {buyerId}
        );
    }
    static incrementOrderQuantity = async (orderId) => {
        return await AsyncHttpService.post(
            `${OrderService.baseURL()}/increment`,
            {orderId}
        );
    }
    static decrementOrderQuantity = async (orderId) => {
        return await AsyncHttpService.post(
            `${OrderService.baseURL()}/decrement`,
            {orderId}
        );
    }

    static payForOrder = async (orderId) => {
        return await AsyncHttpService.post(
            `${OrderService.baseURL()}/pay`,
            {orderId}
        );
    }

    static deliverOrder = async (orderId) => {
        return await AsyncHttpService.post(
            `${OrderService.baseURL()}/deliver`,
            {orderId}
        );
    }
}