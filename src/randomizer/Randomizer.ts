import {faker} from '@faker-js/faker';
import {v4 as uuidv4} from 'uuid';
import {IPerson} from '../document/interfaces/IPerson';
import {IAddress} from '../document/interfaces/IAddress';

export class Randomizer {
  public static getRandomPerson(): IPerson {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
      id: uuidv4(),
      firstName,
      lastName,
      email: `${firstName}.${lastName}@${faker.internet.domainName()}`,
      phoneNumber: faker.phone.number(),
      address: this.getRandomAddress(),
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

  public static getRandomMessage(): string {
    return faker.hacker.phrase();
  }
}
