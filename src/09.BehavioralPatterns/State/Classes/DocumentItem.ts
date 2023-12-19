import AbstractItemState from './AbstractItemState.js';

export default class DocumentItem {
  public text: string;
  private state: AbstractItemState;

  public getState() {
    return this.state;
  }

  public setState(state: AbstractItemState) {
    this.state = state;
    this.state.setContext(this);
  }

  public publishDoc() {
    this.state.publish();
  }

  public deleteDoc() {
    this.state.delete();
  }
}
