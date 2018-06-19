'use strict';

import AsyncHttpService from './AsyncHttpService';

export default class StoreService {
    static baseURL = () => 'http://localhost:3000/store';


    static changeName = async (userId, storeName) => {
        return await AsyncHttpService.post(
            `${this.baseURL()}/changeName`,
            { userId, storeName }
        );
    }
    static visit = async (userId) => {
        return await AsyncHttpService.post(
            `${this.baseURL()}/visit`,
            { userId }
        );
    }
    static addRevenue = async (userId, revenue) => {
        return await AsyncHttpService.post(
            `${this.baseURL()}/addRevenue`,
            { userId, revenue }
        );
    }
    static rate = async (userId, rating) => {
        return await AsyncHttpService.post(
            `${this.baseURL()}/rate`,
            { userId, rating }
        );
    }

    static listItems = async (userId) => {
        return await AsyncHttpService.get(
            `${this.baseURL()}/item/${userId}`
        );
    }


}