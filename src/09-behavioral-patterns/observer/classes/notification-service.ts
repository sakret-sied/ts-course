import Observer from '../interfaces/observer-interface.js';
import Subject from '../interfaces/subject-interface.js';

export default class NotificationService implements Observer {
  public update(subject: Subject): void {
    console.log('Notifiction service');
    console.log(subject);
  }
}
