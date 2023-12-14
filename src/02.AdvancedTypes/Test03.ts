import { IResponseStatus } from './Enums/IResponseStatus.js';
import IRequest from './Interfaces/IRequest.js';
import { IResponse } from './Types/IResponse.js';

export function myMethod(req: IRequest): IResponse {
  return {
    status: IResponseStatus.Success,
    data: {
      databaseId: 567,
      ...req,
    },
  };
}

export const myRequest: IRequest = {
  sum: 10000,
  from: 2,
  to: 4,
};

console.log(myMethod(myRequest));
