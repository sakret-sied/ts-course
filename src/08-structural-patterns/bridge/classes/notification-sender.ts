import ProviderInterface from '../interfaces/provider-interface.js';

export default class NotificationSender {
  constructor(private provider: ProviderInterface) {}

  public send() {
    this.provider.connect('connect');
    this.provider.sendMessage('message');
    this.provider.disconnect();
  }
}
