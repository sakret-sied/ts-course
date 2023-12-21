import AbstractDeliveryItem from './abstract-delivery-tem.js';

export default class Package extends AbstractDeliveryItem {
  public override getPrice(): number {
    return this.getItemPrices();
  }
}
