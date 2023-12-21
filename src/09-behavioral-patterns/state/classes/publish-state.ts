import AbstractState from './abstract-state.js';
import DraftState from './draft-state.js';

export default class PublishState extends AbstractState {
  constructor() {
    super();
    this.name = 'PublishDocument';
  }

  public override publish(): void {
    console.log("Published document can't be publish");
  }

  public override delete(): void {
    console.log('Unpublish document');
    this.item.setState(new DraftState());
  }
}
