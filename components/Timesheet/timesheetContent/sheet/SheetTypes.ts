export interface ScheduleEventType {
  date: string;
  start: string;
  end: string;
  creationDate: string;
  lastEditedDate: string;
  creatorId: string;
}

export interface RowDataInterface {
  name: string;
  schedule: ScheduleEventType[];
}

export interface RowInterface {
  rowData: RowDataInterface;
  startDay: string;
}


export interface TimesInterface {
  times: ScheduleEventType[];
}