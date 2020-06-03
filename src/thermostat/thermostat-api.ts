/*
 * Copyright (C) 2020 OpenMotics BV
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

 import { BaseObjectApi, ConfigurationData, LocationApi, AclApi } from '../base';
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

interface ThermostatLocationApi extends LocationApi {
  thermostat_group_id: number;
}

export interface ThermostatApi extends BaseObjectApi<ThermostatApiState>, AclApi {
  location: ThermostatLocationApi;
}
