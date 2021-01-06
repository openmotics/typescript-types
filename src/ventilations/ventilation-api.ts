import { LocationApi } from '../base';

interface VentilationApiStatus {
  mode: 'automatic' | 'manual';
  level: number;
  remaining_time: number;
}

export interface VentilationApi {
  id: number;
  name: string;
  location: LocationApi;
  status: VentilationApiStatus;
}
