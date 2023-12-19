import AbstractItemState from './AbstractItemState.js';
import PublishItemState from './PublishItemState.js';

export default class DraftItemState extends AbstractItemState {
  constructor() {
    super();
    this.name = 'DraftDocument';
  }

  public override publish(): void {
    console.log(`Published text: ${this.item.text}`);
    this.item.setState(new PublishItemState());
  }

  public override delete(): void {
    console.log('Delete document');
  }
}
