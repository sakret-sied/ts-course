import IProvider from '../Interfaces/IProvider.js';

export default class NotificationSender {
  constructor(private provider: IProvider) {}

  public send() {
    this.provider.connect('connect');
    this.provider.sendMessage('message');
    this.provider.disconnect();
  }
}
