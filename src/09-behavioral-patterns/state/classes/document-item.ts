import AbstractState from './abstract-state.js';

export default class DocumentItem {
  public text: string;
  private state: AbstractState;

  public getState() {
    return this.state;
  }

  public setState(state: AbstractState) {
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
