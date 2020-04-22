import { BaseObject } from '../base';

export type ShutterState = 'up' | 'stopped' | 'down';
export interface ShutterStatus {
  state: ShutterState;
}

export interface Shutter extends BaseObject<ShutterStatus> {}
