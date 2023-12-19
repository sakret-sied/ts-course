export default abstract class AbstractLogger {
  public abstract log(message: string): void;

  public printDate(date: Date): void {
    this.log(date.toString());
  }
}
