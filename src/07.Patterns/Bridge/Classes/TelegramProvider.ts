import IProvider from '../Interfaces/IProvider.js';

export default class TelegramProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }

  connect(config: string): void {
    console.log(config);
  }

  disconnect(): void {
    console.log('Telegram disconnect');
  }
}
