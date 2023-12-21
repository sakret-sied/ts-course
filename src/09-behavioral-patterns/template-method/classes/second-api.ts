import AbstractForm from './abstract-form.js';
import Form from './form.js';

export default class SecondAPI extends AbstractForm<{ fio: string }> {
  protected override fill(form: Form): { fio: string } {
    return { fio: form.name };
  }

  protected override send(data: { fio: string }): void {
    console.log(`Send ${data.fio}`);
  }
}
