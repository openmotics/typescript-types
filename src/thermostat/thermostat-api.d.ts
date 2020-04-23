import { BaseObjectApi, ConfigurationData } from '../base';
import { ThermostatPreset } from './thermostat';
export interface ThermostatApiState {
    actual_temperature: number;
    current_setpoint: number;
    preset: ThermostatPreset;
    output_0: number;
    output_1: number;
}
export interface Configuration {
    cooling: ConfigurationData | null;
    heating: ConfigurationData | null;
}
export interface ThermostatApiModel extends BaseObjectApi<ThermostatApiState> {
}
