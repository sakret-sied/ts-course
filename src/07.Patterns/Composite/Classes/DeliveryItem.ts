export default abstract class DeliveryItem {
  items: DeliveryItem[] = [];

  abstract getPrice(): number;

  addItem(item: DeliveryItem) {
    this.items.push(item);
  }

  getItemPrices() {
    return this.items.reduce(
      (acc: number, i: DeliveryItem) => (acc += i.getPrice()),
      0
    );
  }
}
