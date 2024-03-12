import {v4 as uuidv4} from 'uuid';

import {IConfirmation} from '../interfaces/IConfirmation';
import {IPurchaseItem} from '../interfaces/IPurchaseItem';
import {ICustomer} from '../interfaces/ICustomer';

export class Confirmation implements IConfirmation {
  uuid: string;
  confirmationDate: Date;
  purchaseItems: Array<IPurchaseItem>;
  customer: ICustomer;
  total: number;
  tax: number;

  public constructor(
    customer: ICustomer,
    purchaseItems: Array<IPurchaseItem>,
    total: number,
    tax: number
  ) {
    this.uuid = uuidv4();
    this.confirmationDate = new Date.now();
    this.customer = customer;
    this.purchaseItems = purchaseItems;
    this.total = total;
    this.tax = tax;
  }
}
