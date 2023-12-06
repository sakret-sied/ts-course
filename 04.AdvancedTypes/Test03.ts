import { IResponseStatus } from './Enums/IResponseStatus';
import IRequest from './Interfaces/IRequest';
import { IResponse } from './Types/IResponse';

export function myMethod(req: IRequest): IResponse {
  return {
    status: IResponseStatus.Success,
    data: {
      databaseId: 567,
      sum: 10000,
      from: 2,
      to: 4,
    },
  };
}

export const myRequest: IRequest = {
  sum: 10000,
  from: 2,
  to: 4,
};

console.log(myMethod(myRequest));
