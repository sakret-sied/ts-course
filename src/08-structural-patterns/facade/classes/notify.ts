export default class Notify {
  public send(template: string, to: string) {
    console.log(`Отправляю ${template}: ${to}`);
  }
}
