import { BaseObject } from '../base';
export declare enum OutputType {
    Light = "LIGHT",
    Outlet = "OUTLET",
    Valve = "VALVE",
    Appliance = "APPLIANCE",
    Alarm = "ALARM",
    Pump = "PUMP",
    Hvac = "HVAC",
    Generic = "GENERIC",
    Motor = "MOTOR",
    Ventilation = "Ventilation"
}
export interface Output extends BaseObject {
    type: OutputType;
}
