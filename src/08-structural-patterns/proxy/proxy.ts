import PaymentAPI from './classes/payment-api.js';
import PaymentAccessProxy from './classes/payment-access-proxy.js';

const proxy1 = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy1.getPatmentDetail(1));

const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPatmentDetail(1));
