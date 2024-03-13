import {IAddress} from '../commerce/interfaces/IAddress';

export interface IPerson {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: IAddress;
}
