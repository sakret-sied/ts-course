import ProviderInterface from '../interfaces/provider-interface.js';
import NotificationSender from './notification-sender.js';

export default class DelayNotificationSender extends NotificationSender {
  constructor(provider: ProviderInterface) {
    super(provider);
  }

  public sendDelayed() {}
}
