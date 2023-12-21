import AbstractLogger from './abstract-logger.js';

export default class Logger extends AbstractLogger {
  public log(message: string): void {
    console.log(message);
  }

  public logWithDate(message: string) {
    this.printDate(new Date());
    this.log(message);
  }
}
