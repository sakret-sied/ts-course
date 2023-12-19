import AbstractDeliveryItem from './AbstractDeliveryItem.js';

export default class Product extends AbstractDeliveryItem {
  constructor(private price: number) {
    super();
  }

  public override getPrice(): number {
    return this.price;
  }
}
