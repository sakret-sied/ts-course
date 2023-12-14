import { IResponseStatus } from '../Enums/IResponseStatus.js';
import IDataFailed from './IDataFailed.js';

export default interface IResponseFailed {
  status: IResponseStatus.Failed;
  data: IDataFailed;
}
