import { RoomImageApi, RoomImage } from '../index';
import { SceneApi, Scene } from './scene';
import { OutputApi, Output } from './output';
export declare const parseApiResponse: {
    toOutput: (response: OutputApi) => Output;
    toRoomImage: (response: RoomImageApi) => RoomImage;
    toScene: (response: SceneApi) => Scene;
};
