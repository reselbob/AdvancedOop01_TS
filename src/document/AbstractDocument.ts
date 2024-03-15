import {IDocument} from './IDocument';
import {v4 as uuidv4} from 'uuid';
import {ILogger} from './ILogger';
import {ILogEntry} from './ILogEntry';

export abstract class AbstractDocument implements IDocument, ILogger {
  public id: string;
  public title: string;
  public text: string;
  protected logEntries: Array<ILogEntry>;

  public constructor(title: string) {
    this.title = title;
    this.id = uuidv4();
    this.text = '';
    this.logEntries = new Array<ILogEntry>();
  }

  public getLogEntries(): Array<ILogEntry>{
    return this.logEntries;
  }

  protected getLogEntry(): ILogEntry {
    return {
      documentId: this.id,
      title: this.title,
      timestamp: new Date(),
    };
  }

  public abstract print(): void;
}
