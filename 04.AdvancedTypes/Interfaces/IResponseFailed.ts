import { IResponseStatus } from '../Enums/IResponseStatus';
import IDataFailed from './IDataFailed';

export default interface IResponseFailed {
  status: IResponseStatus.Failed;
  data: IDataFailed;
}
