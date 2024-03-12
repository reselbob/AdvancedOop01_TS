import {IPerson} from "./IPerson";

export interface ICustomer extends IPerson{
  customerId: string;
  creditCard: string;
  asOfDate: Date;
}
