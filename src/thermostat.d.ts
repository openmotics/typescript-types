import { Acl, BaseObject, Location, LocationApi, BaseObjectApi, ConfigurationData, AclApi } from 'openmotics-types/base';

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

interface ThermostatLocationApi extends LocationApi {
  thermostat_group_id: number;
}

export interface ThermostatApi extends BaseObjectApi<ThermostatApiState> {
  location: ThermostatLocationApi;
}


export interface ThermostatGroupStatus {
  mode: ThermostatMode;
  state: ThermostatState;
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


export enum ThermostatState {
  On = 'ON',
  Off = 'OFF',
}

export enum ThermostatMode {
  Heating = 'HEATING',
  Cooling = 'COOLING',
}

export enum ThermostatPreset {
  Auto = 'AUTO',
  Away = 'AWAY',
  Vacation = 'VACATION',
  Party = 'PARTY',
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
