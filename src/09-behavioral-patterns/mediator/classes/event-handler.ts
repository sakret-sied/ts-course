import AbstractMediated from './abstract-mediated.js';

export default class EventHandler extends AbstractMediated {
  public myEvent() {
    this.mediator.notify('EventHandler', 'myEvent');
  }
}
