export default class KVDatabase {
  private db: Map<string, string> = new Map();
  save(key: string, value: string) {
    this.db.set(key, value);
  }
}
