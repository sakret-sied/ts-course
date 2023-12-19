import AbstractItemState from './AbstractItemState.js';
import DraftItemState from './DraftItemState.js';

export default class PublishItemState extends AbstractItemState {
  constructor() {
    super();
    this.name = 'PublishDocument';
  }

  public override publish(): void {
    console.log("Published document can't be publish");
  }

  public override delete(): void {
    console.log('Unpublish document');
    this.item.setState(new DraftItemState());
  }
}
