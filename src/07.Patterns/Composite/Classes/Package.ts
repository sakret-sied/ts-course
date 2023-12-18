import DeliveryItem from './DeliveryItem.js';

export default class Package extends DeliveryItem {
  override getPrice(): number {
    return this.getItemPrices();
  }
}
