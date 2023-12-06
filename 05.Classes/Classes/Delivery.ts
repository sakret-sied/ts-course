export default class Delivery {
  public date: Date;
  public address?: string | undefined;
  public shopId?: number | undefined;

  constructor(date: Date, address: string);
  constructor(date: Date, shopId: number);
  constructor(date: Date, addressOrShopId: string | number) {
    this.date = date;
    if (this.isAddress(addressOrShopId)) {
      this.address = addressOrShopId;
    } else {
      this.shopId = addressOrShopId;
    }
  }

  private isAddress(param: string | number): param is string {
    return typeof param === 'string';
  }
}
