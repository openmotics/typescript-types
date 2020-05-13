import { BaseObject } from '../base';

export enum ShutterState {
  Up = 'UP',
  GoingUp = 'GOING_UP',
  Down = 'DOWN',
  GoingDown = 'GOING_DOWN',
  Stopped = 'STOPPED',
}

export enum ShutterDirections {
  up = 'UP',
  down = 'DOWN',
  stopped = 'STOP',
};

export interface ShutterStatus {
  state: ShutterState;
}

export interface Shutter extends BaseObject<ShutterStatus> {}
