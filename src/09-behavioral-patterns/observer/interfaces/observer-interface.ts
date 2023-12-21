import Subject from './subject-interface.js';

export default interface Observer {
  update(subject: Subject): void;
}
