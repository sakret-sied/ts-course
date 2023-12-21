import MediatorInterface from '../interfaces/mediator-interface.js';

export default abstract class AbstractMediated {
  public mediator: MediatorInterface;
  public setMediator(mediator: MediatorInterface) {
    this.mediator = mediator;
  }
}
