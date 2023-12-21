import DocumentItem from './document-item.js';

export default abstract class AbstractState {
  public name: string;
  public item: DocumentItem;

  public abstract publish(): void;

  public abstract delete(): void;

  public setContext(item: DocumentItem) {
    this.item = item;
  }
}
