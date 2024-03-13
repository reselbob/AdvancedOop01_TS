import {IPerson} from "../../common/IPerson";

export interface ICustomer extends IPerson{
  customerId: string;
  creditCard: string;
  asOfDate: Date;
}
