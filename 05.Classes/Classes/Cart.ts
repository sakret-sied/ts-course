import Delivery from './Delivery';
import Product from './Product';

export default class Cart {
  private list: Product[] = [];
  private delivery: Delivery | null = null;

  public addProduct(product: Product): this {
    this.list.push(product);
    return this;
  }

  public delProduct(id: number): this {
    this.list = this.list.filter((product: Product) => product.id !== id);
    return this;
  }

  public getSum(): number {
    return this.list.reduce(
      (sum: number, product: Product) => sum + product.price,
      0
    );
  }

  public setDelivery(delivery: Delivery): void {
    this.delivery = delivery;
  }

  public checkout(): boolean {
    return this.list.length !== 0 && this.delivery !== null;
  }
}
