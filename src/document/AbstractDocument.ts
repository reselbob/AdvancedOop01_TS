import {IDocument} from './interfaces/IDocument';
import {v4 as uuidv4} from 'uuid';
import {ILogger} from './interfaces/ILogger';
import {ILogEntry} from './interfaces/ILogEntry';
import {IPerson} from './interfaces/IPerson';

export abstract class AbstractDocument implements IDocument, ILogger {
  public readonly id: string;
  public readonly title: string;
  public readonly author: IPerson;
  public text: string;
  protected logEntries: Array<ILogEntry>;

  public constructor(title: string, author: IPerson) {
    this.title = title;
    this.id = uuidv4();
    this.text = '';
    this.author = author;
    this.logEntries = new Array<ILogEntry>();
  }

  public getLogEntries(): Array<ILogEntry> {
    return this.logEntries;
  }

  protected getLogEntry(): ILogEntry {
    return {
      documentId: this.id,
      title: this.title,
      timestamp: new Date(),
      authorId: this.author.id,
    };
  }

  public abstract print(): void;
}
