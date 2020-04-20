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
  location: {
    floor_coordinates: {
      x: number | null;
      y: number | null;
    };
    floor_id: number | null;
    installation_id: number;
    room_id: number | null;
  };
  name: string;
  status: T;
}

export interface BaseObject<T = Status> {
  id: number;
  name: string;
  capabilities: string[];
  location: {
    floorCoordinates: {
      x: number | null;
      y: number | null;
    };
    installationId: number;
    roomId: number | null;
  };
  status: T;
}
