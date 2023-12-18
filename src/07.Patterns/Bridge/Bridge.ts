import DelayNotificationSender from './Classes/DelayNotificationSender.js';
import NotificationSender from './Classes/NotificationSender.js';
import TelegramProvider from './Classes/TelegramProvider.js';
import WhatsUpProvider from './Classes/WhatsUpProvider.js';

const sender = new NotificationSender(new TelegramProvider());
sender.send();

const delaySender = new DelayNotificationSender(new WhatsUpProvider());
delaySender.send();
