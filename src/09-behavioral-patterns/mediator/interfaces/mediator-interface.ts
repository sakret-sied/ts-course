export default interface MediatorInterface {
  notify(sender: string, event: string): void;
}
