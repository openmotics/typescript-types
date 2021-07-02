import { ConsumptionType, ConsumptionValue, Statistics } from '../consumption';
export interface Label {
    data: LabelData[];
    formula: string;
    labelId: number;
    labelInputIds: number[];
    label_type: string;
    name: string;
}
export interface LabelData {
    consumptionType: ConsumptionType;
    rate: ConsumptionValue;
    total: ConsumptionValue;
}
export interface LabelHistorical {
    labelId: number;
    labelType: string;
    name: string;
    data: LabelHistoricalData[];
}
export interface LabelHistoricalData {
    consumptionType: ConsumptionType;
    measurements: {
        data: {
            [time: string]: number;
        };
        unit: string;
    };
    statistics: Statistics;
}
