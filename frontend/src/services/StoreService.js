'use strict';

import AsyncHttpService from './AsyncHttpService';

export default class StoreService {
    static baseURL = () => 'http://localhost:3000/store';


    static changeName = async (userId, storeName) => {
        return await AsyncHttpService.post(
            `${StoreService.baseURL()}/changeName`,
            { userId, storeName }
        );
    }
    static visit = async (userId) => {
        return await AsyncHttpService.post(
            `${StoreService.baseURL()}/visit`,
            { userId }
        );
    }
    static addRevenue = async (userId, revenue) => {
        return await AsyncHttpService.post(
            `${StoreService.baseURL()}/addRevenue`,
            { userId, revenue }
        );
    }
    static rate = async (userId, rating) => {
        return await AsyncHttpService.post(
            `${StoreService.baseURL()}/rate`,
            { userId, rating }
        );
    }

    static listItems = async (userId) => {
        return await AsyncHttpService.get(
            `${StoreService.baseURL()}/item/${userId}`
        );
    }


}