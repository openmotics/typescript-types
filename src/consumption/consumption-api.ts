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
