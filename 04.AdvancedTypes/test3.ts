const enum IResponseStatus {
  Success = 'success',
  Failed = 'failed',
}

interface IRequest {
  sum: number;
  from: number;
  to: number;
}

interface IDataSuccess extends IRequest {
  databaseId: number;
}

interface IResponseSuccess {
  status: IResponseStatus.Success;
  data: IDataSuccess;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseFailed {
  status: IResponseStatus.Failed;
  data: IDataFailed;
}

type IResponse = IResponseFailed | IResponseSuccess;

function myMethod(req: IRequest): IResponse {
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

const myRequest: IRequest = {
  sum: 10000,
  from: 2,
  to: 4,
};

console.log(myMethod(myRequest));
