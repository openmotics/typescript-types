import { BaseObject } from '../base';
export declare enum ShutterState {
    Up = "up",
    Stopped = "stopped",
    Down = "down"
}
export declare enum ShutterDirections {
    up = "UP",
    down = "DOWN",
    stopped = "STOP"
}
export interface ShutterStatus {
    state: ShutterState;
}
export interface Shutter extends BaseObject<ShutterStatus> {
}
