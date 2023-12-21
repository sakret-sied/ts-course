import DelayNotificationSender from './classes/delay-notification-sender.js';
import NotificationSender from './classes/notification-sender.js';
import TelegramProvider from './classes/telegram-provider.js';
import WhatsUpProvider from './classes/whats-up-provider.js';

const sender = new NotificationSender(new TelegramProvider());
sender.send();

const delaySender = new DelayNotificationSender(new WhatsUpProvider());
delaySender.send();
