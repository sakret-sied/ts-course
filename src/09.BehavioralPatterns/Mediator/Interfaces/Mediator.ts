export default interface Mediator {
  notify(sender: string, event: string): void;
}
