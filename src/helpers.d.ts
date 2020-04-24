import { ConsumptionApiData, ConsumptionData, StatisticsApi, Statistics } from './consumption';
import { DeviceApi, Device } from './device';
import { InstallationApi, Installation } from './installation';
import { NotificationApi } from './notification';
import { SceneApi, Scene } from './scene';
import { OutputApi, Output } from './output';
export declare const parseApiResponse: {
    toConsumptionData: (response: ConsumptionApiData) => ConsumptionData;
    toStatistics: (response: StatisticsApi) => Statistics;
    toDevice: (response: DeviceApi) => Device;
    toInstallation: (response: InstallationApi) => Installation;
    toNotification: (response: NotificationApi) => Notification;
    toOutput: (response: OutputApi) => Output;
    ToScene: (response: SceneApi) => Scene;
};
