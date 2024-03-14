import {faker} from '@faker-js/faker';
import {IPerson} from '../common/IPerson';
import {IAddress} from '../common/IAddress';

export class Randomizer {
  public static getRandomPerson(): IPerson {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
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
