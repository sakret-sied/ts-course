import Observer from '../interfaces/observer-interface.js';
import Subject from '../interfaces/subject-interface.js';

export default class LeadService implements Observer {
  public update(subject: Subject): void {
    console.log('Lead service');
    console.log(subject);
  }
}
