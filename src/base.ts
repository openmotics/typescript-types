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
      x: number;
      y: number;
    };
    floor_id: number;
    installation_id: number;
    room_id: number;
  };
  name: string;
  status: T;
}

export interface BaseObject<T = Status> {
  uniqueId: string;
  id: number;
  name: string;
  location: {
    installationId: number;
    roomId: number;
  };
  status: T;
}
