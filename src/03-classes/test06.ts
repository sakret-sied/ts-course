import Cart from './classes/cart.js';
import Delivery from './classes/delivery.js';
import Product from './classes/product.js';

const apple = new Product(1, 'Apple', 10);
const banana = new Product(2, 'Banana', 30);
const kiwi = new Product(3, 'Kiwi', 20);
const pineapple = new Product(4, 'Pineapple', 100);

const cart = new Cart();
cart
  .addProduct(apple)
  .addProduct(banana)
  .addProduct(kiwi)
  .addProduct(pineapple);
console.log('\n\nAdd products:');
console.log(cart);

cart.delProduct(3);
console.log('\n\nDel product:');
console.log(cart);

console.log('\n\nCalculate sum:');
console.log(cart.getSum());

const deliveryToHome = new Delivery(new Date(), 'Home');
cart.setDelivery(deliveryToHome);
console.log('\n\nSet delivery to home:');
console.log(cart);
const deliveryToShop = new Delivery(new Date(), 1);
cart.setDelivery(deliveryToShop);
console.log('\n\nSet delivery to shop:');
console.log(cart);

console.log('\n\nCart checkout:');
console.log(cart.checkout());
