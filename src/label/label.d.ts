import { ConsumptionType, ConsumptionValue, Statistics } from '../consumption';

export interface Label {
    data: LabelData[];
    formula: string;
    label_id: number;
    label_input_ids: number[];
    label_type: string;
    name: string;
}

export interface LabelData {
    consumption_type: ConsumptionType;
    rate: ConsumptionValue;
    total: ConsumptionValue;
}

export interface LabelHistorical {
    label_id: number;
    label_type: string;
    name: string;
    data: LabelHistoricalData[];
}

export interface LabelHistoricalData {
    consumption_type: ConsumptionType;
    measurements: {
        data: {
            [time: string]: number;
        }
        unit: string;
    };
    statistics: Statistics;
}
