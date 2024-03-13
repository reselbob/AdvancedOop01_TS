import {faker} from '@faker-js/faker';
import {IPerson} from '../common/IPerson';
import {IAddress} from '../commerce/interfaces/IAddress';
import {IEmployee} from '../commerce/interfaces/IEmployee';
import {v4 as uuidv4} from 'uuid';
import {ICustomer} from '../commerce/interfaces/ICustomer';
import {ICompany} from '../commerce/interfaces/ICompany';
import {IPurchaseItem} from '../commerce/interfaces/IPurchaseItem';

export class Randomizer {
  public static getRandomPerson(): IPerson {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = `${firstName}.${lastName}@${faker.internet.domainName()}`;
    const phoneNumber = faker.phone.number();
    const address = this.getRandomAddress();

    return {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
    };
  }

  public static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public static getRandomAddress(): IAddress {
    return {
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      city: faker.location.city(),
      stateProvince: faker.location.state(),
      postalCode: faker.location.zipCode(),
      country: 'USA',
    };
  }

  public static getRandomEmployee(): IEmployee {
    const employeeId = uuidv4();
    const person = this.getRandomPerson();
    const hireDate = faker.date.past();
    const title = faker.name.jobTitle();
    const department = faker.commerce.department();
    const salary = this.getRandomNumber(80, 200000);

    return {
      employeeId,
      hireDate,
      title,
      department,
      salary,
      ...person,
    } as IEmployee;
  }

  public static getRandomCustomer(): ICustomer {
    const person = this.getRandomPerson();
    const customerId = uuidv4();
    const creditCard = faker.finance.creditCardNumber();
    return {
      customerId,
      creditCard,
      ...person,
    } as ICustomer;
  }

  public static getRandomCompany(): ICompany {
    const companyName = faker.company.name();
    const address = this.getRandomAddress();
    const company = {
      companyName,
      address,
    } as ICompany;
    return company;
  }

  public static getRandomPurchaseItem(): IPurchaseItem {
    const name = faker.commerce.productName();
    const price = this.getRandomNumber(1, 10);
    const vendor = this.getRandomCompany();
    const currency = 'USD';
    const description = faker.commerce.productDescription();
    const quantity = this.getRandomNumber(1, 10);
    const purchaseItem = {
      name,
      price,
      quantity,
      vendor,
      currency,
      description,
    } as IPurchaseItem;
    return purchaseItem;
  }

  public static getRandomMessage(): string {
    return faker.hacker.phrase();
  }
}
