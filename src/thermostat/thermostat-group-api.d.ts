import { ThermostatPreset } from './thermostat';
import { BaseObjectApi, Acl } from '../base';
import { ThermostatGroupStatus } from './thermostat-group';
export interface ThermostatGroupApi extends BaseObjectApi<ThermostatGroupStatus>, Acl {
    schedule: {
        preset?: {
            [timestamp: number]: ThermostatPreset;
        };
    };
}
