import ProviderInterface from '../interfaces/provider-interface.js';

export default class WhatsUpProvider implements ProviderInterface {
  public sendMessage(message: string): void {
    console.log(message);
  }

  public connect(config: string): void {
    console.log(config);
  }

  public disconnect(): void {
    console.log('WhatsUp disconnect');
  }
}
