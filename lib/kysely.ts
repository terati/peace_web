import { createKysely } from "@vercel/postgres-kysely"
import { Generated, Kysely } from "kysely";
import { dialect } from "./database/db";

interface EmployeeTable {
  eid: Generated<number>;
  firstName: string;
  lastName: string;
  role: string;
  dateCreated: string;
}

export interface Database {
  employees: EmployeeTable
}

export const db = new Kysely<Database>({
  dialect
});
// console.log(db);
export { sql } from 'kysely';