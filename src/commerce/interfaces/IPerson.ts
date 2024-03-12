import {IAddress} from './IAddress';

export interface IPerson {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: IAddress;
}
