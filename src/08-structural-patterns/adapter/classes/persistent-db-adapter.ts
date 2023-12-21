import KVDatabase from './kv-database.js';
import PersistentDB from './persistent-db.js';

export default class PersistentDBAdapter extends KVDatabase {
  constructor(public database: PersistentDB) {
    super();
  }

  public override save(key: string, value: string): void {
    this.database.savePersistent({ key, value });
  }
}
