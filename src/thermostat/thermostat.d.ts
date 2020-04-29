import { BaseObject, Location } from '../base';
import { Configuration } from './thermostat-api';
export declare enum ThermostatState {
    On = "ON",
    Off = "OFF"
}
export declare enum ThermostatMode {
    Heating = "HEATING",
    Cooling = "COOLING"
}
export declare enum ThermostatPreset {
    Auto = "AUTO",
    Away = "AWAY",
    Vacation = "VACATION",
    Party = "PARTY"
}
export interface ThermostatSupport {
    heatingOnly: boolean;
    coolingOnly: boolean;
}
export interface ThermostatSchedule {
    preset: ThermostatPreset;
    timestamp?: number | string;
}
export interface ThermostatStatus {
    actualTemperature: number;
    currentSetpoint: number;
    preset: ThermostatPreset;
    isActive: boolean;
}
interface ThermostatLocation extends Location {
    thermostatGroupId: number;
}
export interface Thermostat extends BaseObject<ThermostatStatus> {
    configuration: Configuration;
    location: ThermostatLocation;
}
export {};
