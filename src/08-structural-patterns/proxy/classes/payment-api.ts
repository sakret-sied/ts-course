import PaymentAPIInterface from '../interfaces/payment-api-interface.js';
import PaymentDetailInterface from '../interfaces/payment-detail-interface.js';

export default class PaymentAPI implements PaymentAPIInterface {
  private data: [{ id: 1; sum: 10000 }];

  public getPatmentDetail(id: number): PaymentDetailInterface | undefined {
    return this.data.find((d) => d.id === id);
  }
}
