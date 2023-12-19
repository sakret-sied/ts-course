import AbstractDeliveryItem from './AbstractDeliveryItem.js';

export default class Package extends AbstractDeliveryItem {
  public override getPrice(): number {
    return this.getItemPrices();
  }
}
