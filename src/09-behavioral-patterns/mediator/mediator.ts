import EventHandler from './classes/event-handler.js';
import Log from './classes/log.js';
import Notifications from './classes/notifications.js';
import NotificationsMediator from './classes/notifications-mediator.js';

const handler = new EventHandler();
const logger = new Log();
const notifications = new Notifications();

const mediator = new NotificationsMediator(notifications, logger, handler);
handler.setMediator(mediator);
handler.myEvent();
