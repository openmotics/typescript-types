import { User } from "../user";

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
