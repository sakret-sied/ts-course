import KVDatabase from './KVDatabase.js';
import PersistentDB from './PersistentDB.js';

export default class PersistentDBAdapter extends KVDatabase {
  constructor(public database: PersistentDB) {
    super();
  }

  override save(key: string, value: string): void {
    this.database.savePersistent({ key, value });
  }
}
