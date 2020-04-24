export interface RoomImage {
    small: string;
    medium?: string;
    original?: string;
}
export declare enum ImageSize {
    Small = "SMALL",
    Medium = "MEDIUM",
    Original = "ORIGINAL"
}
export interface Room {
    id: number;
    name: string;
    image: RoomImage;
    installationId: number;
}
