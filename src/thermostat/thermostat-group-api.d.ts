import { ThermostatPreset } from './thermostat';
import { AclApi } from '../base';
import { ThermostatGroupStatus } from './thermostat-group';
export interface ThermostatGroupApi extends AclApi {
    id: number;
    capabilities: string[];
    status: ThermostatGroupStatus;
    schedule: {
        preset?: {
            [timestamp: number]: ThermostatPreset;
        };
    };
}
