export declare enum ConsumptionType {
    Electricity = "ELECTRICITY",
    Gas = "GAS",
    Water = "WATER"
}
export declare enum ConsumptionResolution {
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
        };
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
