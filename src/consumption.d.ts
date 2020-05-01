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
