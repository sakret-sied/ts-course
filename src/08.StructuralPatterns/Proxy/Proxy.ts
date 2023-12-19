import PaymentAPI from './Classes/PaymentAPI.js';
import PaymentAccessProxy from './Classes/PaymentAccessProxy.js';

const proxy1 = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy1.getPatmentDetail(1));

const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPatmentDetail(1));
