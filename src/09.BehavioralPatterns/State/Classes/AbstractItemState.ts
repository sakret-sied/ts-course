import DocumentItem from './DocumentItem.js';

export default abstract class AbstractItemState {
  public name: string;
  public item: DocumentItem;

  public abstract publish(): void;

  public abstract delete(): void;

  public setContext(item: DocumentItem) {
    this.item = item;
  }
}
