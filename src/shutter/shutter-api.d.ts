import { ShutterState } from './shutter';
import { BaseObjectApi } from '../base';
export interface ShutterStatusApi {
    state: ShutterState;
    last_change: number;
}
export interface ShutterApi extends BaseObjectApi<ShutterStatusApi> {
}
