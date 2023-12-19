import DeliveryShop from './Classes/DeliveryShop.js';
import Package from './Classes/Package.js';
import Product from './Classes/Product.js';

const shop = new DeliveryShop(100);
shop.addItem(new Product(1000));

const pack1 = new Package();
pack1.addItem(new Product(200));
pack1.addItem(new Product(300));
shop.addItem(pack1);

const pack2 = new Package();
pack2.addItem(new Product(30));
shop.addItem(pack2);

console.log(shop.getPrice());
