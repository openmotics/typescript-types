export interface RoomImage {
  height: number;
  size: ImageSize;
  url: string;
  width: number;
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
