import KVDatabase from './Classes/KVDatabase.js';
import PersistentDB from './Classes/PersistentDB.js';
import PersistentDBAdapter from './Classes/PersistentDBAdapter.js';

function run(base: KVDatabase) {
  base.save('key', 'value');
}

run(new PersistentDBAdapter(new PersistentDB()));
