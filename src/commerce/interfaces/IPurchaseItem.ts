import {ICompany} from "./ICompany";

export interface IPurchaseItem {
  name: string;
  price: number;
  quantity: number;
  description: string;
  currency: string;
  vendor: ICompany
}
