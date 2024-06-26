import type { NextApiRequest, NextApiResponse } from 'next'
import { db, sql } from '../../lib/kysely';

type Data = {
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const timeEvents = await db
      .selectFrom('events')
      .select(['event_id', 'employee_id', 'employee_name', 'employee_category', 'creator_id', 'creator_name', 'creator_category', 
        sql<string>`TO_CHAR(start_time, 'HH24:MI')`.as('start_time'), 
        sql<string>`TO_CHAR(end_time, 'HH24:MI')`.as('end_time'), 
        sql<string>`TO_CHAR(start_date, 'YYYY-MM-DD')`.as('start_date'), 
        'creation_date', 
        'edited_date', 'note'])
      .execute();
      res.status(200).json(timeEvents); 
  } else if (req.method === 'PUT') {
    const data = req.body;
    const date = data.start_date;
    // the start_time and end_time are timestamps. You get them in the form 24:24.
    let dateFormatted =  date.substring(0,4) + '-' + date.substring(4,6) + '-' + date.substring(6,8);
    let start_timestamp = dateFormatted + ' ' + data.start_time + ':00';
    let end_timestamp = dateFormatted + ' ' + data.end_time + ':00';
    const timeEvent = await db
      .insertInto('events')
      .values({
        event_id: data.event_id,
        employee_id: data.employee_id,
        employee_name: data.employee_name,
        employee_category: data.employee_category,
        creator_id: data.employee_creator_id,
        creator_name: data.creator_name,
        creator_category: data.creator_category,
        start_time: start_timestamp,
        end_time: end_timestamp,
        start_date: data.start_date, 
        creation_date: data.creation_date,
        edited_date: data.edited_date,
        note: data.note.trim(), 
      })
      .executeTakeFirst(); 
    res.status(200).json({ message: 'Resource created successfully.' })
  } else if (req.method === 'DELETE') {
    const data = req.body;
    try {
      const timeEvent = await db
        .deleteFrom('events')
        .where('events.event_id', '=', data.event_id)
        .executeTakeFirst();
        res.status(200).json({ message: 'Resource updated successfully.' })
    } catch (error) {
      console.error(error); 
      res.status(4500).json({ message: 'A server error has occurred. Please try again later.' })
    }
      
  } else if (req.method === 'PATCH') {
    const data = req.body;
    const updateMap:any = {};
    for (let key in data) {
      updateMap[key] = data[key];
    }
    const result = await db
      .updateTable('events')
      .set(updateMap)
      .where('event_id', '=', data.event_id)
      .executeTakeFirst();
    if (result.numChangedRows==0) {
      res.status(404).json({ message: `No resource found.` });
    } else {
      res.status(200).json({ message: `Resource successfully modified` });
    }
  }
}