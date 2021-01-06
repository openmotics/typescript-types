import { Location } from '../base';
export interface VentilationStatus {
    mode: 'automatic' | 'manual';
    level: number;
    remainingTime: number;
}
export interface Ventilation {
    id: number;
    location: Location;
    name: string;
    status: VentilationStatus;
}
