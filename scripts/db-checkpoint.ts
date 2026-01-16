import db from '../lib/db';

console.log('Checkpointing database...');
db.pragma('wal_checkpoint(TRUNCATE)');
console.log('Database checkpointed successfully!');
