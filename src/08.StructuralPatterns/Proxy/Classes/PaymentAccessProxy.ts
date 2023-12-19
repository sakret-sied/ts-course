import IPaymentAPI from '../Interfaces/IPaymentAPI.js';
import IPaymentDetail from '../Interfaces/IPaymentDetail.js';
import PaymentAPI from './PaymentAPI.js';

export default class PaymentAccessProxy implements IPaymentAPI {
  constructor(private api: PaymentAPI, private userId: number) {}

  public getPatmentDetail(id: number): IPaymentDetail | undefined {
    if (this.userId === 1) {
      return this.api.getPatmentDetail(id);
    }

    console.log('Try to get payment data');
    return undefined;
  }
}
