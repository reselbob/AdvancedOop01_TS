import {ILogEntry} from './ILogEntry';

export interface ILogger {
  getLogEntries(): Array<ILogEntry>;
}
