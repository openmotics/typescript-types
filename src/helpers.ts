import { RoomImageApi, RoomImage } from '../index';
import { SceneApi, Scene } from './scene';
import { OutputApi, Output } from './output';

const capitalizeFirstLetter = (str: string, index: number): string => {
  const lowerCaseStr = str.toLowerCase();
  if (index === 0) {
    return lowerCaseStr;
  }
  return lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
};

const prepareResponseObject = (data: { [key: string]: any } | object[]): any => {
  if (Array.isArray(data)) {
    return data.map((item: object) => prepareResponseObject(item));
  } else if (data === null) {
    return null;
  } else if (typeof data === 'object') {
    const resultObject = {} as { [key: string]: any };
    Object.keys(data || {}).forEach((key: string) => {
      if (data.hasOwnProperty(key)) {
        const keyParts = (key as any).startsWith('_')
          ? key.replace(/\_/gi, '')
          : key.split('_').map(capitalizeFirstLetter).join('');

        resultObject[keyParts] = prepareResponseObject(data[key]);
      }
    });
    return resultObject;
  }

  return data;
};

export const parseApiResponse = {

  toOutput:     (data: OutputApi): Output         => prepareResponseObject(data),
  toRoomImage:  (data: RoomImageApi): RoomImage   => prepareResponseObject(data),
  toScene:      (data: SceneApi): Scene           => prepareResponseObject(data),
}
