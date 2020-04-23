export interface RoomImage {
    small: string;
    medium?: string;
    original?: string;
}
export declare type ImageSize = 'SMALL' | 'MEDIUM' | 'ORIGINAL';
export interface Room {
    id: number;
    name: string;
    image: RoomImage;
    installationId: number;
}
