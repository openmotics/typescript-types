import { ThermostatPreset } from './thermostat';
import { BaseObjectApi } from '../base';
import { ThermostatGroupStatus } from './thermostat-group';

export interface ThermostatGroupApi extends BaseObjectApi<ThermostatGroupStatus> {
  _acl: {
    set_mode: {
      allowed: boolean;
      reason: string;
    };
    set_state: {
      allowed: boolean;
      reason: string;
    }
  };
  schedule: {
    preset?: {
      [timestamp: number]: ThermostatPreset;
    };
  };
}
