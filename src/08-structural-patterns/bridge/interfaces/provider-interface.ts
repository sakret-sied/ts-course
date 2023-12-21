export default interface ProviderInterface {
  sendMessage(message: string): void;

  connect(config: string): void;

  disconnect(): void;
}
