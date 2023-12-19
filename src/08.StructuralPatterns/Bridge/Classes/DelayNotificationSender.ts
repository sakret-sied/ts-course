import IProvider from '../Interfaces/IProvider.js';
import NotificationSender from './NotificationSender.js';

export default class DelayNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider);
  }

  public sendDelayed() {}
}
