export default abstract class AbstractDeliveryItem {
  public items: AbstractDeliveryItem[] = [];

  public abstract getPrice(): number;

  public addItem(item: AbstractDeliveryItem) {
    this.items.push(item);
  }

  public getItemPrices() {
    return this.items.reduce(
      (acc: number, i: AbstractDeliveryItem) => (acc += i.getPrice()),
      0
    );
  }
}
