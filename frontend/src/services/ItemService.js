'use strict';

import AsyncHttpService from "./AsyncHttpService";


export default class ItemService {
    static baseURL = () => 'http://localhost:3000/item';

    static getItem = async (id) => {
        return await AsyncHttpService.get(
            `${this.baseURL()}/${id}`
        );
    }

    static remoteItem = async (userId, itemId) => {
        return await AsyncHttpService.delete(
            this.baseURL(),
            {userId, itemId}
        );
    }

    static addItem = async (userId, itemInfo, stock) => {
        return await AsyncHttpService.post(
            this.baseURL(),
            {userId, itemInfo, stock}
        );
    }

    static updateItem = async (userId, itemId, itemInfo, stock) => {
        return await AsyncHttpService.put(
            this.baseURL(),
            {userId, itemId, itemInfo, stock}
        );
    }

    static findItems = async (names, categories) => {
        return await AsyncHttpService.get(
            this.baseURL(),
            {names, categories}
        );
    }

    static promoteItem = async (promotionEndDate, itemId) => {
        return await AsyncHttpService.post(
            `${this.baseURL()}/promote`,
            {promotionEndDate, itemId}
        );
    }

    static getPromotedItems = async () => {
        return await AsyncHttpService.get(
            `${this.baseURL()}/promote/all`
        )
    }
}