import {IPerson} from '../../common/IPerson';

export interface IEmployee extends IPerson {
  employeeId: string;
  hireDate: Date;
  title: string;
  department: string;
  salary: number;
}
