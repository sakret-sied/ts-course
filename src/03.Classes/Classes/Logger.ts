import AbstructLogger from './AbstructLogger';

export default class Logger extends AbstructLogger {
  log(message: string): void {
    console.log(message);
  }

  logWithDate(message: string) {
    this.printDate(new Date());
    this.log(message);
  }
}