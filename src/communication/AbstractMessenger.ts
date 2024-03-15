import {IMessenger} from './IMessenger';
import {IPerson} from '../common/IPerson';
import {IMessage} from '../common/IMessage';

export abstract class AbstractMessenger<T> implements IMessenger<T> {
  public readonly user: IPerson;
  public readonly logEntries: Array<T>;

  constructor(user: IPerson) {
    this.user = user;
    this.logEntries = new Array<T>();
  }

  public getUser(): IPerson {
    return this.user;
  }

  public getMessages(): Array<IMessage> {
    const arr = new Array<IMessage>();
    this.logEntries.forEach((entry: T) => {
      const message = (entry as IMessage).message;
      arr.push({message});
    });
    return arr;
  }

  public getLogEntries(): Array<T> {
    return this.logEntries;
  }

  // This method is abstract so the derived classes must implement its
  // behavior. The knowledge about how to format an log entry is particular
  // to the derived class, hence the reason to make the method protected.
  // Also, it is protected so it can only be called from the derived
  // classes.
  protected abstract logMessage(message: string): void;

  public abstract sendMessage(message: string): void;
}
