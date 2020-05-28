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
