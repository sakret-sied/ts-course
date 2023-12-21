import AbstractDeliveryItem from './abstract-delivery-tem.js';

export default class DeliveryShop extends AbstractDeliveryItem {
  constructor(private deliveryFee: number) {
    super();
  }

  public override getPrice(): number {
    return this.getItemPrices() + this.deliveryFee;
  }
}
