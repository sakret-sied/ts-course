import IProvider from '../Interfaces/IProvider.js';

export default class WhatsUpProvider implements IProvider {
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
