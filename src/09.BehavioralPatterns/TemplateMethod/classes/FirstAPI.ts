import AbstractForm from './AbstractForm.js';
import Form from './Form.js';

export default class FirstAPI extends AbstractForm<string> {
  protected override fill(form: Form): string {
    return form.name;
  }

  protected override send(data: string): void {
    console.log(`Send ${data}`);
  }
}
