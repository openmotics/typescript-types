
import { BaseObject, BaseObjectApi } from "./base";

export interface SensorApi extends BaseObjectApi<SensorState> { }


export interface SensorState {
  brightness: number | null;
  humidity: number | null;
  temperature: number | null;
}
export interface Sensor extends BaseObject<SensorState> { }
