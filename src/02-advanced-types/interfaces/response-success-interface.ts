import { ResponseStatusEnum } from '../enums/response-status-enum.js';
import DataSuccessInterface from './data-success-interface.js';

export default interface ResponseSuccessInterface {
  status: ResponseStatusEnum.Success;
  data: DataSuccessInterface;
}
