export default class Notify {
  send(template: string, to: string) {
    console.log(`Отправляю ${template}: ${to}`);
  }
}
