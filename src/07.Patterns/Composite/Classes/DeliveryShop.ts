import DeliveryItem from './DeliveryItem.js';

export default class DeliveryShop extends DeliveryItem {
  constructor(private deliveryFee: number) {
    super();
  }

  override getPrice(): number {
    return this.getItemPrices() + this.deliveryFee;
  }
}
