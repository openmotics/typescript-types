import { UserApi } from "../user";
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
