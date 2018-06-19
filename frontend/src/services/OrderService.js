'use strict';

import AsyncHttpService from './AsyncHttpService';

export default class OrderService {
    static baseURL = () => 'http://localhost:3000/order';

    static addItemToCart = async (buyerId, itemId, quantity, deliveryMethod) => {
        return await AsyncHttpService.post(
            `${this.baseURL()}/cart`,
            {buyerId, itemId, quantity, deliveryMethod}
        );
    }

    static remoteItemFromCart = async (orderId) => {
        return await AsyncHttpService.delete(
            `${this.baseURL()}/cart`,
            {orderId}
        );
    }

    static listCart = async (buyerId) => {
        return await AsyncHttpService.get(
            `${this.baseURL()}/cart`,
            {buyerId}
        );
    }

    static listOrderHistory = async (buyerId) => {
        return await AsyncHttpService.get(
            this.baseURL(),
            {buyerId}
        );
    }
    static incrementOrderQuantity = async (orderId) => {
        return await AsyncHttpService.post(
            `${this.baseURL()}/increment`,
            {orderId}
        );
    }
    static decrementOrderQuantity = async (orderId) => {
        return await AsyncHttpService.post(
            `${this.baseURL()}/decrement`,
            {orderId}
        );
    }

    static payForOrder = async (orderId) => {
        return await AsyncHttpService.post(
            `${this.baseURL()}/pay`,
            {orderId}
        );
    }

    static deliverOrder = async (orderId) => {
        return await AsyncHttpService.post(
            `${this.baseURL()}/deliver`,
            {orderId}
        );
    }
}