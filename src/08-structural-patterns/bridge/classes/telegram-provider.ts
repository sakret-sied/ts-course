import ProviderInterface from '../interfaces/provider-interface.js';

export default class TelegramProvider implements ProviderInterface {
  public sendMessage(message: string): void {
    console.log(message);
  }

  public connect(config: string): void {
    console.log(config);
  }

  public disconnect(): void {
    console.log('Telegram disconnect');
  }
}
