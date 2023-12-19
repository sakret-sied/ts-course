import AbstractMediated from './AbstractMediated.js';

export default class EventHandler extends AbstractMediated {
  public myEvent() {
    this.mediator.notify('EventHandler', 'myEvent');
  }
}
