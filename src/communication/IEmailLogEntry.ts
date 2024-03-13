import {ILogEntry} from '../common/ILogEntry';

export interface IEmailLogEntry extends ILogEntry {
  emailAddress: string;
}
