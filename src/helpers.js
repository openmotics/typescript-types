"use strict";
/*
 * Copyright (C) 2020 OpenMotics BV
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
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
    // Room
    toRoom: function (response) { return prepareResponseObject(response); },
    // Scene
    toScene: function (response) { return prepareResponseObject(response); },
    // Sensor
    toSensor: function (response) { return prepareResponseObject(response); },
    // Shutter
    toShutter: function (response) { return prepareResponseObject(response); },
    // Thermostat
    toThermostat: function (response) { return prepareResponseObject(response); },
    // User
    toUser: function (response) { return prepareResponseObject(response); },
};
