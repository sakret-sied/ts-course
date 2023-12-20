import Observer from '../Interfaces/Observer.js';
import Subject from '../Interfaces/Subject.js';
import Lead from './Lead.js';

export default class NewLead implements Subject {
  private observers: Observer[] = [];
  public state: Lead;

  public attach(observer: Observer): void {
    if (this.observers.includes(observer)) {
      return;
    }
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return;
    }
    this.observers.splice(observerIndex, 1);
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}
