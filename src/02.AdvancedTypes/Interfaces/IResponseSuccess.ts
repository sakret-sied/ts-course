import { IResponseStatus } from '../Enums/IResponseStatus.js';
import IDataSuccess from './IDataSuccess.js';

export default interface IResponseSuccess {
  status: IResponseStatus.Success;
  data: IDataSuccess;
}
