"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var capitalizeFirstLetter = function (str, index) {
    var lowerCaseStr = str.toLowerCase();
    if (index === 0) {
        return lowerCaseStr;
    }
    return lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
};
var prepareResponseObject = function (data) {
    if (Array.isArray(data)) {
        return data.map(function (item) { return prepareResponseObject(item); });
    }
    else if (data === null) {
        return null;
    }
    else if (typeof data === 'object') {
        var resultObject_1 = {};
        Object.keys(data || {}).forEach(function (key) {
            if (data.hasOwnProperty(key)) {
                var keyParts = key.startsWith('_')
                    ? key.replace(/\_/gi, '')
                    : key.split('_').map(capitalizeFirstLetter).join('');
                resultObject_1[keyParts] = prepareResponseObject(data[key]);
            }
        });
        return resultObject_1;
    }
    return data;
};
exports.parseApiResponse = {
    // Consumption
    toConsumptionData: function (response) { return prepareResponseObject(response); },
    toStatistics: function (response) { return prepareResponseObject(response); },
    // Device
    toDevice: function (response) { return prepareResponseObject(response); },
    // Installation
    toInstallation: function (response) { return prepareResponseObject(response); },
    // Notification
    toNotification: function (response) { return prepareResponseObject(response); },
    // Output
    toOutput: function (response) { return prepareResponseObject(response); },
    // Scene
    ToScene: function (response) { return prepareResponseObject(response); },
};
