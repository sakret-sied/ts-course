import { ResponseStatusEnum } from './enums/response-status-enum.js';
import ResponseSuccessInterface from './interfaces/response-success-interface.js';
import { myMethod, myRequest } from './test03.js';
import { ResponseType } from './types/response-type.js';

type f = (res: ResponseType) => number;

const isResponseSuccess = (
  res: ResponseType
): res is ResponseSuccessInterface => res.status === ResponseStatusEnum.Success;

const getInt: f = (res) => {
  if (isResponseSuccess(res)) {
    return 1;
  } else {
    return 0;
  }
};

const resp = myMethod(myRequest);

console.log(getInt(resp));
