import Subject from './Subject.js';

export default interface Observer {
  update(subject: Subject): void;
}
