'use strict';

import HttpService from './HttpService';
import defer from 'defer-promise';
import queryString from 'query-string';

// a httpservice wrap to support async/await
export default class AsyncHttpService {
    static get = async (url, params) => {
        params = params || {};

        const deferred = defer();
        HttpService.get(
            `${url}?${queryString.stringify(params)}`,
            res => deferred.resolve(res),
            err => deferred.reject(err)
        );

        return deferred.promise;
    }

    static post = async (url, data) => {
        const deferred = defer();
        HttpService.post(
            url,
            data,
            res => deferred.resolve(res),
            err => deferred.reject(err)
        );

        return deferred.promise;
    }

    static put = async (url, data) => {
        const deferred = defer();
        HttpService.put(
            url,
            data,
            res => deferred.resolve(res),
            err => deferred.reject(err)
        );

        return deferred.promise;
    }

    static delete = async (url, data) => {
        const deferred = defer();
        HttpService.remove(
            url,
            data,
            res => deferred.resolve(res),
            err => deferred.reject(err)
        );

        return deferred.promise;
    }
}