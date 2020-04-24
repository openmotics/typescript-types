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
    }
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
    }
  };
}

/**
 * 
 * A BaseObject represents a general data of an appliance (e.g. a light, valve, socket, ...).
 * 
 * @param id - The id of appliance
 * @param name - The name of appliance
 * @param configuration - The configuration of appliance
 * @param capabilities - The capabilities of appliance, may include "ON_OFF" | "RANGE"
 * @param location - Location is an object that describes where the appliance is located {@link Location}
 * @param status: Status is an object that describes status of the appliance, it can be "OFF/ON" and also include other information {@link Status}
 */

export interface BaseObjectApi<T = Status> {
  _version: number;
  capabilities: string[];
  configuration: {
    group_1: number;
    group_2: number;
    name: string;
    timer_down: number;
    timer_up: number;
    up_down_config: number;
    cooling: ConfigurationData | null;
    heating: ConfigurationData | null;
  };
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
 * @param location - Location is an object that describes where the appliance is located {@link Location}
 * @param status: Status is an object that describes status of the appliance, it can be "OFF/ON" and also include other information {@link Status}
 */

export interface BaseObject<T = Status> {
  id: number;
  name: string;
  capabilities: string[];
  location: Location;
  status: T;
}

export interface Status {
  on: boolean;
  value?: number;
}

export interface ConfigurationData {
  presets: {
    AWAY: number;
    PARTY: number;
    VACATION: number;
  };
  schedule: {
    data: Array<{ [time: number]: number }>;
  };
}

interface LocationApi {
  floor_coordinates: {
    x: number | null;
    y: number | null;
  };
  floor_id: number | null;
  installation_id: number;
  room_id: number | null;
}

interface Location {
  floorCoordinates: {
    x: number | null;
    y: number | null;
  };
  floorId: number | null;
  roomId: number | null;
  installationId: number;
}
