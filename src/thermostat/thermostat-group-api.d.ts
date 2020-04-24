import { ThermostatPreset } from './thermostat';
import { Acl } from '../base';
import { ThermostatGroupStatus } from './thermostat-group';

export interface ThermostatGroupApi extends Acl {
    id: number;
    capabilities: string[];
    status: ThermostatGroupStatus;
    schedule: {
        preset?: {
            [timestamp: number]: ThermostatPreset;
        };
    };
}
