import IProvider from '../Interfaces/IProvider.js';

export default class WhatsUpProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }

  connect(config: string): void {
    console.log(config);
  }

  disconnect(): void {
    console.log('WhatsUp disconnect');
  }
}
