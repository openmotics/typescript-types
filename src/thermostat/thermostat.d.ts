import { BaseObject } from '../base';
import { Configuration } from './thermostat-api';
export declare type ThermostatGroupState = 'ON' | 'OFF';
export declare type ThermostatMode = 'HEATING' | 'COOLING';
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
export interface ThermostatModel extends BaseObject<ThermostatStatus> {
    configuration: Configuration;
}
