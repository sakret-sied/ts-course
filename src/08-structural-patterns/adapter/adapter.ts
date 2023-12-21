import KVDatabase from './classes/kv-database.js';
import PersistentDB from './classes/persistent-db.js';
import PersistentDBAdapter from './classes/persistent-db-adapter.js';

function run(base: KVDatabase) {
  base.save('key', 'value');
}

run(new PersistentDBAdapter(new PersistentDB()));
