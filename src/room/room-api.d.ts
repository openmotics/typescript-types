import { RoomImage } from "./room";
export interface RoomApi {
    id: number;
    name: string;
    floor_id: number;
    image?: RoomImage;
}
