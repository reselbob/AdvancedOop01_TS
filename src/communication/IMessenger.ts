import {IPerson} from '../common/IPerson';
import {ILogEntry} from '../common/ILogEntry';

export interface IMessenger<T> {
  user: IPerson;

  getUser(): IPerson;
  sendMessage(message: string): void;
  logMessage(message: string): void;
  getMessages(): Array<T>;
}
