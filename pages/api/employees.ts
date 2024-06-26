import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../lib/kysely';
import bcrypt from 'bcrypt'; 

type Data = {
  employee_id: string;
  email?: string;
  phone?: string; 
  last_name: string;
  first_name: string; 
  category: string;
  date_created: string;
  date_updated: string;
  last_login: string;
  initials: string;
  username: string;
  hashed_password: string;
  reset_password_enabled: string; 
}

const saltRounds = 10; 

export async function hashPassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const employees = await db
    .selectFrom('employees')
    .select(['employee_id', 'email', 'phone', 'first_name', 'last_name', 'category', 'date_created',
      'date_updated', 'last_login', 'initials', 'active', 'username', 'hashed_password', 'reset_password_enabled'
    ])
    .execute();
    res.status(200).json(employees);
  } else if (req.method === 'PUT') {
    // creating a new employee
    const data = req.body;
    const employee = await db
      .insertInto('employees')
      .values({
        employee_id: data.employee_id,
        first_name: data.first_name.trim(),
        last_name: data.last_name.trim(),
        phone: data.phone.trim() || '',
        category: data.category || '',
        date_created: data.date_created,
        date_updated: data.date_updated,
        last_login: data.last_login,
        initials: data.initials,
        active: data.active,
        username: data.username.trim(),
        hashed_password: hashPassword(data.password.trim()),
        reset_password_enabled: data.reset_password_enabled
      })
      .executeTakeFirst();
    res.status(200).json(employee); 
  } else if (req.method === 'DELETE') {
    const data = req.query;
    console.log(data);
    const result = await db
      .deleteFrom('employees')
      .where('employees.employee_id', '=', data.employee_id)
      .executeTakeFirst();
    if (result.numDeletedRows==0) {
      res.status(404).json({  message: `No resource found.` });
    } else {
      res.status(200).json({ message: `Resource successfully removed.` });
    }
  } else if (req.method === 'PATCH') {
    const data = req.body;
    const updateMap:any = {};
    for (let key in data) {
      updateMap[key] = (data[key]) ? data[key].trim() : data[key];
    }
    const result = await db
      .updateTable('employees')
      .set(updateMap)
      .where('employee_id', '=', data.employee_id)
      .executeTakeFirst();
    if (result.numChangedRows==0) {
      res.status(404).json({ message: `No resource found.` });
    } else {
      res.status(200).json({ message: `Resource successfully modified` });
    }
  }
  // res.setHeader('Allow', ['GET', 'POST']);
  // .end(`METHOD ${req.method} Not Allowed`);
  res.status(400);
}