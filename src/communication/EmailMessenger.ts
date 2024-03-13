import {AbstractMessenger} from './AbstractMessenger';
import {IEmailLogEntry} from './IEmailLogEntry';

export class EmailMessenger extends AbstractMessenger<IEmailLogEntry> {
  public sendMessage(message: string): void {
    console.log(`Sending email to ${this.user.email} with message: ${message}`);
    this.logMessage(message);
  }

  logMessage(message: string): void {
    this.messages.push({
      timestamp: new Date(),
      message,
      emailAddress: this.user.email,
    });
  }

  getMessages(): Array<IEmailLogEntry> {
    return this.messages;
  }
}
