import {IShoppingCart} from '../interfaces/IShoppingCart';
import {IConfirmation} from '../interfaces/IConfirmation';
import {ICustomer} from '../interfaces/ICustomer';
import {IPurchaseItem} from '../interfaces/IPurchaseItem';
import {Confirmation} from "./Confirmation";

export abstract class AbstractShoppingCart implements IShoppingCart {
  customer: ICustomer;
  purchaseItems: Array<IPurchaseItem>;

  public constructor(customer: ICustomer) {
    this.customer = customer;
    this.purchaseItems = Array<IPurchaseItem>()
  }

  public abstract getTaxRate(): number;

  checkout(): IConfirmation {
    const total = this.purchaseItems.reduce((acc, item) => acc + item.price, 0);
    const tax = total * this.getTaxRate();
    return new Confirmation(this.customer, this.purchaseItems, total, tax);
  }

  addPurchaseItem(item: IPurchaseItem): void {
    this.purchaseItems.push(item);
  }
}
