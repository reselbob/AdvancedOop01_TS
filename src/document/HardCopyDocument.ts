import {AbstractDocument} from './AbstractDocument';
import {ILogEntry} from './ILogEntry';

export class HardCopyDocument extends AbstractDocument {
  print(): void {
    console.log(
      `Sending the Hard Copy Document: ${this.title} - ${this.text} to my printer.`
    );

    this.logEntries.push(this.getLogEntry());
  }
}
