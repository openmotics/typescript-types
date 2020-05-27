/**
 *
 * A acl might contain an property containing and ACL (access control list) or null,
 * indicating what actions are possible and if not might indicate why they are not possible.
 *
 * @param action - The object that include access info
 */
export interface AclApi {
    _acl: {
        [action: string]: {
            allowed: boolean;
            reason: string;
        };
    };
}
/**
 *
 * A acl might contain an property containing and ACL (access control list) or null,
 * indicating what actions are possible and if not might indicate why they are not possible.
 *
 * @param action - The object that include access info
 */
export interface Acl {
    acl: {
        [action: string]: {
            allowed: boolean;
            reason: string;
        };
    };
}
/**
 *
 * A BaseObject represents a general data of an appliance (e.g. a light, valve, socket, ...).
 *
 * @param id - The id of appliance
 * @param name - The name of appliance
 * @param capabilities - The capabilities of appliance, may include "ON_OFF" | "RANGE"
 * @param configuration - The configuration of appliance {@link BaseConfigurationApi}
 * @param location - Location is an object that describes where the appliance is located {@link Location}
 * @param status: Status is an object that describes status of the appliance, it can be "OFF/ON" and also include other information {@link Status}
 */
export interface BaseObjectApi<T = Status> {
    _version: number;
    capabilities: string[];
    configuration?: BaseConfigurationApi;
    id: number;
    location: LocationApi;
    name: string;
    status: T;
}
/**
 *
 * A BaseObject represents a general data of an appliance (e.g. a light, valve, socket, ...).
 *
 * @param id - The id of appliance
 * @param name - The name of appliance
 * @param capabilities - The capabilities of appliance, may include "ON_OFF" | "RANGE"
 * @param configuration - The configuration of appliance {@link BaseConfiguration}
 * @param location - Location is an object that describes where the appliance is located {@link Location}
 * @param status: Status is an object that describes status of the appliance, it can be "OFF/ON" and also include other information {@link Status}
 */
export interface BaseObject<T = Status> {
    id: number;
    name: string;
    capabilities: string[];
    configuration?: BaseConfiguration;
    location: Location;
    status: T;
}
export interface Status {
    on: boolean;
    value?: number;
}

export interface BaseConfigurationApi {
  group_1: number;
  group_2: number;
  name: string;
  timer_down: number;
  timer_up: number;
  up_down_config: number;
  cooling: ConfigurationDataApi | null;
  heating: ConfigurationDataApi | null;
}

export interface BaseConfiguration {
  group1: number;
  group2: number;
  name: string;
  timerDown: number;
  timerUp: number;
  upDownConfig: number;
  cooling: ConfigurationData | null;
  heating: ConfigurationData | null;
}

export interface ConfigurationData {
    output0Id: number | null;
    output1Id: number | null;
    presets: {
        AWAY: number;
        PARTY: number;
        VACATION: number;
    };
    schedule: {
        data: Array<{
            [time: number]: number;
        }>;
    };
}

export interface ConfigurationDataApi {
    output_0_id: number | null;
    output_1_id: number | null;
    presets: {
        AWAY: number;
        PARTY: number;
        VACATION: number;
    };
    schedule: {
        data: Array<{
            [time: number]: number;
        }>;
    };
}

export interface LocationApi {
    floor_coordinates: {
        x: number | null;
        y: number | null;
    };
    floor_id: number | null;
    installation_id: number;
    room_id: number | null;
}

export interface Location {
    floorCoordinates: {
        x: number | null;
        y: number | null;
    };
    floorId: number | null;
    roomId: number | null;
    installationId: number;
}
