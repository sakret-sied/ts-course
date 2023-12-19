import Mediator from '../Interfaces/Mediator.js';
import EventHandler from './EventHandler.js';
import Log from './Log.js';
import Notifications from './Notifications.js';

export default class NotificationsMediator implements Mediator {
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
