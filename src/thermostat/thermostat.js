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
var ThermostatState;
(function (ThermostatState) {
    ThermostatState["On"] = "ON";
    ThermostatState["Off"] = "OFF";
})(ThermostatState = exports.ThermostatState || (exports.ThermostatState = {}));
var ThermostatMode;
(function (ThermostatMode) {
    ThermostatMode["Heating"] = "HEATING";
    ThermostatMode["Cooling"] = "COOLING";
})(ThermostatMode = exports.ThermostatMode || (exports.ThermostatMode = {}));
var ThermostatPreset;
(function (ThermostatPreset) {
    ThermostatPreset["Auto"] = "AUTO";
    ThermostatPreset["Away"] = "AWAY";
    ThermostatPreset["Vacation"] = "VACATION";
    ThermostatPreset["Party"] = "PARTY";
})(ThermostatPreset = exports.ThermostatPreset || (exports.ThermostatPreset = {}));
