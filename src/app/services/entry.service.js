
import angular from 'angular';
import sampleJson from '../assets/sample.json';

export default class EntryService {
    /*@ngInject;*/
    constructor($http, $filter, $timeout) {
        this._$http = $http;
        this._$filter = $filter;
        this._$timeout = $timeout;
    }

    getEntries() {
        /* Timeout for the see loading */
        return new Promise((resolve, reject) => {
            this._$timeout(function () {
                if (sampleJson) {
                    resolve({ data: sampleJson.entries });
                } else {
                    reject({ message: 'Oops, something went wrong...' });
                }
            }, 2500);
        });
    }

    filterEntries(entries, filter) {
        const filteredEntries = [];
        let orderedEntries = this._$filter('orderBy')(entries, filter.orderProperty);
        angular.forEach(orderedEntries, function (entry) {
            if (entry.programType === filter.programType && entry.releaseYear >= filter.releaseYear
                && filteredEntries.length < filter.entryCount) {
                filteredEntries.push(entry);
            }
        })
        return filteredEntries;
    }
}