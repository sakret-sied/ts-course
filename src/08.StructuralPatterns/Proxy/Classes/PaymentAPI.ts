import IPaymentAPI from '../Interfaces/IPaymentAPI.js';
import IPaymentDetail from '../Interfaces/IPaymentDetail.js';

export default class PaymentAPI implements IPaymentAPI {
  private data: [{ id: 1; sum: 10000 }];

  public getPatmentDetail(id: number): IPaymentDetail | undefined {
    return this.data.find((d) => d.id === id);
  }
}
