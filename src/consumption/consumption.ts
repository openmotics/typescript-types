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

export enum ConsumptionType {
  Electricity = 'ELECTRICITY',
  Gas = 'GAS',
  Water = 'WATER',
}

export enum ConsumptionResolution {
  Month = "M",
  Day = "D",
  Hour = "h"
}

export interface ConsumptionValue {
  unit: string;
  value: number;
}

export interface ConsumptionData {
  consumptionType: ConsumptionType;
  resolution: ConsumptionResolution;
  period: number;
  measurements: {
    data: {
      [time: string]: number;
    }
    unit: string;
  };
  total: ConsumptionValue;
  rate: ConsumptionValue;
  statistics: Statistics;
}

export interface Statistics {
  data: {
    average: {
      value: number;
    };
    current: {
      value: number;
    };
    max: {
      value: number;
    };
    min: {
      value: number;
    };
  };
  unit: string;
}

export interface StatisticsValue {
  absolute: ConsumptionValue;
  relative: ConsumptionValue;
}

export interface Statistics {
  consumptionType: ConsumptionType;
  trends: {
    day: StatisticsValue;
    month: StatisticsValue;
    week: StatisticsValue;
    year: StatisticsValue;
  };
}

export interface Consumption<T = ConsumptionData> {
  id: number;
  name: string; 
  labelType: string;
  data: T[];
}
