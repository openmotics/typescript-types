import { ThermostatGroupState, ThermostatMode, ThermostatPreset } from './thermostat';
import { BaseObject } from '../base';

export interface ThermostatGroupStatus {
  mode: ThermostatMode;
  state: ThermostatGroupState;
}

export interface ThermostatGroupModel extends BaseObject<ThermostatGroupStatus> {
  acl: {
    setMode: {
      allowed: boolean;
    };
    setState: {
      allowed: boolean;
    }
  };
  schedule: {
    preset?: {
      [timestamp: number]: ThermostatPreset;
    };
  };
}
