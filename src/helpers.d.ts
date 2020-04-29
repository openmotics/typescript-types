import { ConsumptionApiData, ConsumptionData, StatisticsApi, Statistics } from 'openmotics-types/consumption';
import { DeviceApi, Device } from 'openmotics-types/device';
import { InstallationApi, Installation } from 'openmotics-types/installation';
import { NotificationApi } from 'openmotics-types/notification';
import { SceneApi, Scene } from 'openmotics-types/scene';
import { OutputApi, Output } from 'openmotics-types/output';
export declare const parseApiResponse: {
    toConsumptionData: (response: ConsumptionApiData) => ConsumptionData;
    toStatistics: (response: StatisticsApi) => Statistics;
    toDevice: (response: DeviceApi) => Device;
    toInstallation: (response: InstallationApi) => Installation;
    toNotification: (response: NotificationApi) => Notification;
    toOutput: (response: OutputApi) => Output;
    ToScene: (response: SceneApi) => Scene;
};
