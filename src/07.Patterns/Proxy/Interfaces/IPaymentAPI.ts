import IPaymentDetail from './IPaymentDetail.js';

export default interface IPaymentAPI {
  getPatmentDetail(id: number): IPaymentDetail | undefined;
}
