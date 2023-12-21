import PaymentDetailInterface from './payment-detail-interface.js';

export default interface PaymentAPIInterface {
  getPatmentDetail(id: number): PaymentDetailInterface | undefined;
}
