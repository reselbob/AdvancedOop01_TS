import {AbstractDocument} from './AbstractDocument';

export class WebDocument extends AbstractDocument {
  print(): void {
    console.log(
      `Sending the WebDocument: ${this.title} - ${this.text} to our website.`
    );

    this.logEntries.push(this.getLogEntry());
  }
}
