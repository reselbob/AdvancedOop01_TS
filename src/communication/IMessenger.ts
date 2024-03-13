import {IPerson} from '../common/IPerson';
import {ILogEntry} from '../common/ILogEntry';

export interface IMessenger {
  user: IPerson;

  sendMessage(message: string): void;
  logMessage(message: string): void;
  getMessages(): Array<T>;
}
