class CreateDate {
  makeDate(timestamp: number): Date;
  makeDate(m: number, d: number, y: number): Date;
  makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
      return new Date(y, mOrTimestamp, d);
    } else {
      return new Date(mOrTimestamp);
    }
  }
}

const createDate = new CreateDate();
const d1 = createDate.makeDate(12345678);
const d2 = createDate.makeDate(5, 5, 5);
