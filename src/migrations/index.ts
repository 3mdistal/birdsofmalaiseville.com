import * as migration_20241209_082536_migration from './20241209_082536_migration';

export const migrations = [
  {
    up: migration_20241209_082536_migration.up,
    down: migration_20241209_082536_migration.down,
    name: '20241209_082536_migration'
  },
];
