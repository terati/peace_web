import { Kysely, PostgresDialect } from "kysely";

import * as dotenv from 'dotenv'
import { Pool } from "pg";

// dotenv.config({ path: ".env" });

console.log('Initializing database connection pool...');
console.log(process.env.POSTGRES_URL);

export const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.POSTGRES_URL,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    port: 5434,
    max: 10,
    password: process.env.POSTGRES_PASSWORD
  })
})