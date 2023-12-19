import EventHandler from './Classes/EventHandler.js';
import Log from './Classes/Log.js';
import Notifications from './Classes/Notifications.js';
import NotificationsMediator from './Classes/NotificationsMediator.js';

const handler = new EventHandler();
const logger = new Log();
const notifications = new Notifications();

const mediator = new NotificationsMediator(notifications, logger, handler);
handler.setMediator(mediator);
handler.myEvent();
