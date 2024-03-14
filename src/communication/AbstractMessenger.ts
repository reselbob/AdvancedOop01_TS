import {IMessenger} from './IMessenger';
import {IPerson} from '../common/IPerson';

export abstract class AbstractMessenger<T> implements IMessenger<T> {
  public readonly user: IPerson;
  public readonly messages: Array<T>;

  constructor(user: IPerson) {
    this.user = user;
    this.messages = new Array<T>();
  }

  public getUser(): IPerson {
    return this.user;
  }

  public abstract getMessages(): Array<T>;

  public abstract logMessage(message: string): void;

  public abstract sendMessage(message: string): void;
}
