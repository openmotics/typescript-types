declare module 'openmotics-types/scene' {
  import { BaseObject, BaseObjectApi } from "openmotics-types/base";

  export interface SceneApi extends BaseObjectApi {
    actions: number[];
  }

  export type Scene = BaseObject;
}
