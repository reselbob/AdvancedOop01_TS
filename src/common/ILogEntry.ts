import {IMessage} from './IMessage';

export interface ILogEntry extends IMessage {
  timestamp: Date;
}
