import {IPerson} from '../common/IPerson';
import {ILogEntry} from '../common/ILogEntry';
import {IMessage} from "../common/IMessage";

export interface IMessenger<T> {
  user: IPerson;

  getUser(): IPerson;
  sendMessage(message: string): void;
  getLogEntries(): Array<T>;
  getMessages(): Array<IMessage>;
}
