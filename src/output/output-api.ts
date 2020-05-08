import { BaseObjectApi } from '../base';
import { OutputType } from './output';

export interface OutputApi extends BaseObjectApi {
  type: OutputType;
}
