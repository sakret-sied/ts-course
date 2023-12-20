import Observer from '../Interfaces/Observer.js';
import Subject from '../Interfaces/Subject.js';

export default class LeadService implements Observer {
  public update(subject: Subject): void {
    console.log('Lead service');
    console.log(subject);
  }
}
