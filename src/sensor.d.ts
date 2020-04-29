declare module 'openmotics-types/sensor' {
  import { BaseObject, BaseObjectApi } from "openmotics-types/base";

  export interface SensorApi extends BaseObjectApi<SensorState> { }


  export interface SensorState {
    brightness: number | null;
    humidity: number | null;
    temperature: number | null;
  }
  export interface Sensor extends BaseObject<SensorState> { }
}
