declare module 'openmotics-types/room' {
  export interface RoomImage {
    height: number;
    size: ImageSize;
    url: string;
    width: number;
  }

  export interface RoomApi {
    id: number;
    name: string;
    floor_id: number;
    image?: RoomImage;
  }

  export enum ImageSize {
    Small = 'SMALL',
    Medium = 'MEDIUM',
    Original = 'ORIGINAL',
  }

  export interface Room {
    id: number;
    name: string;
    floorId: number;
    image: RoomImage;
  }
}
