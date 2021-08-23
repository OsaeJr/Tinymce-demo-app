import * as dayjs from 'dayjs';

export interface ITask {
  id?: string;
  name?: string | null;
  description?: string | null;
  createdDate?: dayjs.Dayjs | null;
  modifiedDate?: dayjs.Dayjs | null;
  lastModifiedBy?: string | null;
}

export class Task implements ITask {
  constructor(
    public id?: string,
    public name?: string | null,
    public description?: string | null,
    public createdDate?: dayjs.Dayjs | null,
    public modifiedDate?: dayjs.Dayjs | null,
    public lastModifiedBy?: string | null
  ) {}
}

export function getTaskIdentifier(task: ITask): string | undefined {
  return task.id;
}
