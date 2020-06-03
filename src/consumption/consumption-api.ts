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

import { ConsumptionType, ConsumptionValue, Statistics, StatisticsValue } from "./consumption";

export interface ConsumptionApiData {
  consumption_type: ConsumptionType;
  resolution: string;
  period: number;
  measurements: {
    value: { [time: number]: number };
    unit: string;
  };
  total: ConsumptionValue;
  rate: ConsumptionValue;
  statistics: Statistics;
}

export interface StatisticsApi {
  consumption_type: ConsumptionType;
  trends: {
    month: StatisticsValue;
    week: StatisticsValue;
    year: StatisticsValue;
  };
}

export interface ConsumptionApi<T = ConsumptionApiData> {
  id: number;
  name: string;
  label_id: number;
  label_type: string;
  data: T[];
}
