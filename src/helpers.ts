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

import { ConsumptionApiData, ConsumptionData, StatisticsApi, Statistics } from './consumption';
import { DeviceApi, Device } from './device';
import { InstallationApi, Installation } from './installation';
import { NotificationApi } from './notification';

import { SceneApi, Scene } from './scene';
import { OutputApi, Output } from './output';
import { Room, RoomApi } from './room';
import { Sensor, SensorApi } from './sensor';
import { ShutterApi, Shutter } from './shutter';
import { ThermostatApi, Thermostat } from './thermostat';
import { User, UserApi } from './user';
import { Floor, FloorApi } from './floor';

const capitalizeFirstLetter = (str: string, index: number): string => {
  const lowerCaseStr = str.toLowerCase();
  if (index === 0) {
    return lowerCaseStr;
  }
  return lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
};

const prepareResponseObject = (data: { [key: string]: any } | object[]): any => {
  if (Array.isArray(data)) {
    return data.map((item: object) => prepareResponseObject(item));
  } else if (data === null) {
    return null;
  } else if (typeof data === 'object') {
    const resultObject = {} as { [key: string]: any };
    Object.keys(data || {}).forEach((key: string) => {
      if (data.hasOwnProperty(key)) {
        const keyParts = (key as any).startsWith('_')
          ? key.replace(/\_/gi, '')
          : key.split('_').map(capitalizeFirstLetter).join('');

        resultObject[keyParts] = prepareResponseObject(data[key]);
      }
    });
    return resultObject;
  }
  return data;
};

export const parseApiResponse = {

  // Consumption
  toConsumptionData: (response: ConsumptionApiData): ConsumptionData => prepareResponseObject(response),
  toStatistics: (response: StatisticsApi): Statistics => prepareResponseObject(response),

  // Device
  toDevice: (response: DeviceApi): Device => prepareResponseObject(response),

  // Installation
  toInstallation: (response: InstallationApi): Installation => prepareResponseObject(response),

  // Notification
  toNotification: (response: NotificationApi): Notification => prepareResponseObject(response),

  // Output
  toOutput: (response: OutputApi): Output => prepareResponseObject(response),

  // Room
  toRoom: (response: RoomApi): Room => prepareResponseObject(response),

  // Floor
  toFloor: (response: FloorApi): Floor => prepareResponseObject(response),

  // Scene
  toScene: (response: SceneApi): Scene => prepareResponseObject(response),

  // Sensor
  toSensor: (response: SensorApi): Sensor => prepareResponseObject(response),

  // Shutter
  toShutter: (response: ShutterApi): Shutter => prepareResponseObject(response),

  // Thermostat
  toThermostat: (response: ThermostatApi): Thermostat => prepareResponseObject(response),

  // User
  toUser: (response: UserApi): User => prepareResponseObject(response),
}
