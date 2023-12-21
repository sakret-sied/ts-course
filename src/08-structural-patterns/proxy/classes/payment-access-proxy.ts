import PaymentAPIInterface from '../interfaces/payment-api-interface.js';
import PaymentDetailInterface from '../interfaces/payment-detail-interface.js';
import PaymentAPI from './payment-api.js';

export default class PaymentAccessProxy implements PaymentAPIInterface {
  constructor(private api: PaymentAPI, private userId: number) {}

  public getPatmentDetail(id: number): PaymentDetailInterface | undefined {
    if (this.userId === 1) {
      return this.api.getPatmentDetail(id);
    }

    console.log('Try to get payment data');
    return undefined;
  }
}
