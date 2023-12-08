export default abstract class AbstructLogger {
  abstract log(message: string): void;

  printDate(date: Date): void {
    this.log(date.toString());
  }
}
