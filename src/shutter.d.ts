
import { BaseObject, BaseObjectApi } from './base';
export interface ShutterApi extends BaseObjectApi<ShutterStatus> { }
export enum ShutterState {
  Up = 'up',
  Stopped = 'stopped',
  Down = 'down',
}

export interface ShutterStatus {
  state: ShutterState;
}

export interface Shutter extends BaseObject<ShutterStatus> { }
