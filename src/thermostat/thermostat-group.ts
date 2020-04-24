import { ThermostatGroupState, ThermostatMode, ThermostatPreset } from './thermostat';
import { Acl } from '../base';

export interface ThermostatGroupStatus {
  mode: ThermostatMode;
  state: ThermostatGroupState;
}

export interface ThermostatGroup extends Acl {
  id: number;
  capabilities: string[];
  status: ThermostatGroupStatus;
  schedule: {
    preset?: {
      [timestamp: number]: ThermostatPreset;
    };
  };
}
