import AbstractForm from './AbstractForm.js';
import Form from './Form.js';

export default class SecondAPI extends AbstractForm<{ fio: string }> {
  protected override fill(form: Form): { fio: string } {
    return { fio: form.name };
  }

  protected override send(data: { fio: string }): void {
    console.log(`Send ${data.fio}`);
  }
}
