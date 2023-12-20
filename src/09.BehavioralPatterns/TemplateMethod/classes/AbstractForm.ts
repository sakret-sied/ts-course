import Form from './Form.js';

export default abstract class AbstractForm<T> {
  public save(form: Form): void {
    const res = this.fill(form);
    this.log(res);
    this.send(res);
  }

  protected abstract fill(form: Form): T;

  protected abstract send(data: T): void;

  protected log(data: T): void {
    console.log(data);
  }
}
