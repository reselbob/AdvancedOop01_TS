import {IMessenger} from './IMessenger';
import {IPerson} from '../common/IPerson';
import {ILogEntry} from "../common/ILogEntry";


export abstract class AbstractMessenger<T> implements IMessenger {
  user: IPerson;
  messages: Array<T>;

  constructor(user: IPerson) {
    this.user = user;
    this.messages = new Array<T>();
  }

  public abstract getMessages(): Array<T>;

  public abstract logMessage(message: string): void;

  public abstract sendMessage(message: string): void;
}
