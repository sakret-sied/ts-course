import { IResponseStatus } from '../Enums/IResponseStatus';
import IDataSuccess from './IDataSuccess';

export default interface IResponseSuccess {
  status: IResponseStatus.Success;
  data: IDataSuccess;
}
