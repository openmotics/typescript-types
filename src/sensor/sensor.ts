import { BaseObject } from "../base";

export interface SensorState {
  brightness: number | null;
  humidity: number | null;
  temperature: number | null;
}

export interface Sensor extends BaseObject<SensorState> { }
