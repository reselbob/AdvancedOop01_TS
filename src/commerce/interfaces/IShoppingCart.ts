import {ICustomer} from "./ICustomer";
import {IPurchaseItem} from "./IPurchaseItem";
import {IConfirmation} from "./IConfirmation";

export interface IShoppingCart {
  customer: ICustomer
  purchaseItems: Array<IPurchaseItem>
  // Write a function checkout
  checkout: () => IConfirmation;
  addPurchaseItem: (item: IPurchaseItem) => void;
}
