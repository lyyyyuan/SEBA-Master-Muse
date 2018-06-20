'use strict';

import AsyncHttpService from "./AsyncHttpService";


export default class ItemService {
    static baseURL = () => 'http://localhost:3000/item';

    static getItem = async (id) => {
        return await AsyncHttpService.get(
            `${ItemService.baseURL()}/${id}`
        );
    }

    static remoteItem = async (userId, itemId) => {
        return await AsyncHttpService.delete(
            ItemService.baseURL(),
            {userId, itemId}
        );
    }

    static addItem = async (userId, itemInfo, stock) => {
        return await AsyncHttpService.post(
            ItemService.baseURL(),
            {userId, itemInfo, stock}
        );
    }

    static updateItem = async (userId, itemId, itemInfo, stock) => {
        return await AsyncHttpService.put(
            ItemService.baseURL(),
            {userId, itemId, itemInfo, stock}
        );
    }

    static findItems = async (names, categories) => {
        return await AsyncHttpService.get(
            ItemService.baseURL(),
            {names, categories}
        );
    }

    static promoteItem = async (promotionEndDate, itemId) => {
        return await AsyncHttpService.post(
            `${ItemService.baseURL()}/promote`,
            {promotionEndDate, itemId}
        );
    }

    static getPromotedItems = async () => {
        return await AsyncHttpService.get(
            `${ItemService.baseURL()}/promote/all`
        )
    }
}