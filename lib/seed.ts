// import { db, sql } from "./kysely"

// export async function seed() {
//   const createTable = await db.schema
//     .createTable('employees')
//     .ifNotExists()
//     .addColumn('eid', 'serial', (cb) => cb.primaryKey())
//     .addColumn('firstName', 'varchar(255)', (cb) => cb.notNull())
//     .addColumn('lastName', 'varchar(255)', (cb) => cb.notNull())
//     .execute();

//   return {
//     createTable
//   }
// }