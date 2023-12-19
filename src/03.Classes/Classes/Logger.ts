import AbstractLogger from './AbstractLogger.js';

export default class Logger extends AbstractLogger {
  public log(message: string): void {
    console.log(message);
  }

  public logWithDate(message: string) {
    this.printDate(new Date());
    this.log(message);
  }
}
