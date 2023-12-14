import { IResponseStatus } from './Enums/IResponseStatus.js';
import IResponseSuccess from './Interfaces/IResponseSuccess.js';
import { myMethod, myRequest } from './Test03.js';
import { IResponse } from './Types/IResponse.js';

type f = (res: IResponse) => number;

const isResponseSuccess = (res: IResponse): res is IResponseSuccess =>
  res.status === IResponseStatus.Success;

const getInt: f = (res) => {
  if (isResponseSuccess(res)) {
    return 1;
  } else {
    return 0;
  }
};

const resp = myMethod(myRequest);

console.log(getInt(resp));
