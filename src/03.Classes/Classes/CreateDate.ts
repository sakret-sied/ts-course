export default class CreateDate {
  public makeDate(timestamp: number): Date;
  public makeDate(m: number, d: number, y: number): Date;
  public makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
      return new Date(y, mOrTimestamp, d);
    } else {
      return new Date(mOrTimestamp);
    }
  }
}
