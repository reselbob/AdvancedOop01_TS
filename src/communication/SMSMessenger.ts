import {AbstractMessenger} from './AbstractMessenger';
import {ISMSLogEntry} from './ISMSLogEntry';

export class SMSMessenger extends AbstractMessenger<ISMSLogEntry> {
  public sendMessage(message: string): void {
    console.log(
      `Sending SMS to ${this.user.phoneNumber} with message: ${message}`
    );
    this.logMessage(message);
  }

  getMessages(): Array<ISMSLogEntry> {
    return this.messages;
  }

  logMessage(message: string): void {
    this.messages.push({
      timestamp: new Date(),
      message,
      phoneNumber: this.user.phoneNumber,
    });
  }
}
