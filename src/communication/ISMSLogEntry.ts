import {ILogEntry} from '../common/ILogEntry';

export interface ISMSLogEntry extends ILogEntry {
  phoneNumber: string;
}
