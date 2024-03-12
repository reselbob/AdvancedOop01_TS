import {IPurchaseItem} from './IPurchaseItem';
import {ICustomer} from './ICustomer';

export interface IConfirmation {
  uuid: string;
  confirmationDate: Date;
  customer: ICustomer;
  purchaseItems: Array<IPurchaseItem>;
  total: number;
  tax: number;
}
