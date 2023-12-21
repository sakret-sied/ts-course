export default class KVDatabase {
  private db: Map<string, string> = new Map();

  public save(key: string, value: string) {
    this.db.set(key, value);
  }
}
