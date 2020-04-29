declare module 'openmotics-types/device' {
  import { User, UserApi } from "openmotics-types/user";

  /**
   * 
   * A Device object represents device connecting to the API.
   * This might for example be a mobile app, or a webinterface.
   * 
   * @param device_id - The device id
   * @param platform_name - Name of the platform (e.g. ANDROID, IOS, CHROME, ...)
   * @param platform_version - Platform version
   * @param app_version - Version of the application itself
   * @param last_updated: When the device was updated
   * @param user: User object or null if unlinked {@link UserApi}
   */
  export interface DeviceApi {
    device_id: number;
    platform_name: string;
    platform_version: string;
    app_version: string;
    last_updated: number;
    user: UserApi | null;
  }

  /**
   * 
   * A Device object represents device connecting to the API.
   * This might for example be a mobile app, or a webinterface.
   * 
   * @param deviceId - The device id
   * @param platformName - Name of the platform (e.g. ANDROID, IOS, CHROME, ...)
   * @param platformVersion - Platform version
   * @param appVersion - Version of the application itself
   * @param lastUpdated: When the device was updated
   * @param user: User object or null if unlinked {@link User}
   */
  export interface Device {
    deviceId: number;
    platformName: string;
    platformVersion: string;
    appVersion: string;
    lastUpdated: number;
    user: User;
  }

}