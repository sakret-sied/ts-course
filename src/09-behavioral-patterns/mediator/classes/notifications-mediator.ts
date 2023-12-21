import MediatorInterface from '../interfaces/mediator-interface.js';
import EventHandler from './event-handler.js';
import Log from './log.js';
import Notifications from './notifications.js';

export default class NotificationsMediator implements MediatorInterface {
  constructor(
    public notifications: Notifications,
    public logger: Log,
    public handler: EventHandler
  ) {}

  public notify(_: string, event: string): void {
    switch (event) {
      case 'myEvent':
        this.notifications.send();
        this.logger.log('Sended');
        break;
    }
  }
}
