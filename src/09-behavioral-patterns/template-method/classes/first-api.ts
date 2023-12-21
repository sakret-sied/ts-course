import AbstractForm from './abstract-form.js';
import Form from './form.js';

export default class FirstAPI extends AbstractForm<string> {
  protected override fill(form: Form): string {
    return form.name;
  }

  protected override send(data: string): void {
    console.log(`Send ${data}`);
  }
}
