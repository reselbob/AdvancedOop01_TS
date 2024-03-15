import {AbstractMessenger} from './AbstractMessenger';
import {IEmailLogEntry} from './IEmailLogEntry';

export class EmailMessenger extends AbstractMessenger<IEmailLogEntry> {
  public sendMessage(message: string): void {
    console.log(`Sending email to ${this.user.email} with message: ${message}`);
    this.logMessage(message);
  }

  private logMessage(message: string): void {
    this.logEntries.push({
      timestamp: new Date(),
      message,
      emailAddress: this.user.email,
    });
  }
}
