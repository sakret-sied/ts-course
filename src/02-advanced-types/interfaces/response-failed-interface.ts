import { ResponseStatusEnum } from '../enums/response-status-enum.js';
import DataFailedInterface from './data-failed-interface.js';

export default interface ResponseFailedInterface {
  status: ResponseStatusEnum.Failed;
  data: DataFailedInterface;
}
