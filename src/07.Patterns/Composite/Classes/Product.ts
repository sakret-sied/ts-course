import DeliveryItem from './DeliveryItem.js';

export default class Product extends DeliveryItem {
  constructor(private price: number) {
    super();
  }

  override getPrice(): number {
    return this.price;
  }
}
