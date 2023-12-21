import AbstractState from './abstract-state.js';
import PublishState from './publish-state.js';

export default class DraftState extends AbstractState {
  constructor() {
    super();
    this.name = 'DraftDocument';
  }

  public override publish(): void {
    console.log(`Published text: ${this.item.text}`);
    this.item.setState(new PublishState());
  }

  public override delete(): void {
    console.log('Delete document');
  }
}
