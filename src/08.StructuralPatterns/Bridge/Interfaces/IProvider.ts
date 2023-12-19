export default interface IProvider {
  sendMessage(message: string): void;

  connect(config: string): void;

  disconnect(): void;
}
