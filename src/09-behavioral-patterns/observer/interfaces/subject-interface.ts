import Observer from './observer-interface.js';

export default interface Subject {
  attach(observer: Observer): void;

  detach(observer: Observer): void;

  notify(): void;
}
