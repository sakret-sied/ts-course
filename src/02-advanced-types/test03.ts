import { ResponseStatusEnum } from './enums/response-status-enum.js';
import RequestInterface from './interfaces/request-interface.js';
import { ResponseType } from './types/response-type.js';

export function myMethod(req: RequestInterface): ResponseType {
  return {
    status: ResponseStatusEnum.Success,
    data: {
      databaseId: 567,
      ...req,
    },
  };
}

export const myRequest: RequestInterface = {
  sum: 10000,
  from: 2,
  to: 4,
};

console.log(myMethod(myRequest));
