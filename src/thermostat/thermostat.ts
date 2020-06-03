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

import { BaseObject, Location, Acl } from '../base';
import { Configuration } from './thermostat-api';

export enum ThermostatState {
  On = 'ON',
  Off = 'OFF',
}

export enum ThermostatMode {
  Heating = 'HEATING',
  Cooling = 'COOLING',
}

export enum ThermostatPreset {
  Auto = 'AUTO',
  Away = 'AWAY',
  Vacation = 'VACATION',
  Party = 'PARTY',
}

export interface ThermostatSupport {
  heatingOnly: boolean;
  coolingOnly: boolean;
}

export interface ThermostatSchedule {
  preset: ThermostatPreset;
  timestamp?: number | string;
}

export interface ThermostatStatus {
  actualTemperature: number;
  currentSetpoint: number;
  preset: ThermostatPreset;
  isActive: boolean;
}

interface ThermostatLocation extends Location {
  thermostatGroupId: number;
}

export interface Thermostat extends BaseObject<ThermostatStatus>, Acl {
  configuration: Configuration;
  location: ThermostatLocation;
}
