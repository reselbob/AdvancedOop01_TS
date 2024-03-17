import {IAddress} from './IAddress';

export interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: IAddress;
}
