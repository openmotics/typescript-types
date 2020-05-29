/**
 * 
 * A BaseApi object contain a default response properties
 * 
 * @param _acl - The object that include access info {@link AclApi}
 * @param _error - The container always contains an _error field. It will be null when no error occurred, or will contain an error message. When _error is not null an extra field, _errorCode, will be available, containing an error code. This code, together with client knowledge (which endpoint has been called) might be used to provide user friendly (translated) error messages.
 * @param _paging - When requesting lists, the client can request paging to be applied. This is possible by adding a JSON encoded paging object to the url inside a paging parameter.
 * @param data - Array of requested data
 */

export interface BaseResponseApi<T = object> {
  _acl: AclApi;
  _error: object | null;
  _paging: PaginationApi;
  data: Array<T>;
}

/**
 * 
 * A BaseApi object contain a default response properties
 * 
 * @param _acl - The object that include access info {@link AclApi}
 * @param _error - The container always contains an _error field. It will be null when no error occurred, or will contain an error message. When _error is not null an extra field, _errorCode, will be available, containing an error code. This code, together with client knowledge (which endpoint has been called) might be used to provide user friendly (translated) error messages.
 * @param _paging - When requesting lists, the client can request paging to be applied. This is possible by adding a JSON encoded paging object to the url inside a paging parameter.
 * @param data - Array of requested data
 */

export interface BaseResponse<T = object> {
  acl: Acl;
  error: object | null;
  paging: Pagination;
  data: Array<T>;
}

/**
 * 
 * A acl might contain a property containing and ACL (access control list) or null,
 * indicating what actions are possible and if not might indicate why they are not possible.
 * 
 * @param _acl - The object that include access info
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
 * A acl might contain a property containing and ACL (access control list) or null,
 * indicating what actions are possible and if not might indicate why they are not possible.
 * 
 * @param acl - The object that include access info
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
 * When requesting lists, the client can request paging to be applied.
 * This is possible by adding a JSON encoded paging object to the url inside a paging parameter.
 * 
 * @param page - Number of current page
 * @param items_per_page - Number of items per page
 * @param number_of_items - Number of all items
 * @param number_of_pages - Number of all pages
 * 
 */

export interface PaginationApi {
  page: number;
  items_per_page: number;
  number_of_items: number;
  number_of_pages: number;
}

/**
 * When requesting lists, the client can request paging to be applied.
 * This is possible by adding a JSON encoded paging object to the url inside a paging parameter.
 * 
 * @param page - Number of current page
 * @param itemsPerPage - Number of items per page
 * @param numberOfItems - Number of all items
 * @param numberOfPages - Number of all pages
 * 
 */

export interface Pagination {
  page: number;
  itemsPerPage: number;
  numberOfItems: number;
  numberOfPages: number;
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
  output_0_id: number | null;
  output_1_id: number | null;
  presets: {
    AWAY: number;
    PARTY: number;
    VACATION: number;
  };
  schedule: {
    data: Array<{ [time: number]: number }>;
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
