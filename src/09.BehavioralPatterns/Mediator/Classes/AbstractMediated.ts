import Mediator from '../Interfaces/Mediator.js';

export default abstract class AbstractMediated {
  public mediator: Mediator;
  public setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}
