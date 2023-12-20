import Observer from '../Interfaces/Observer.js';
import Subject from '../Interfaces/Subject.js';

export default class NotificationService implements Observer {
  public update(subject: Subject): void {
    console.log('Notifiction service');
    console.log(subject);
  }
}
