import {AbstractMessenger} from './AbstractMessenger';
import {ISMSLogEntry} from './ISMSLogEntry';

export class SMSMessenger extends AbstractMessenger<ISMSLogEntry> {
  public sendMessage(message: string): void {
    console.log(
      `Sending SMS to ${this.user.phoneNumber} with message: ${message}`
    );
    this.logMessage(message);
  }

  private logMessage(message: string): void {
    this.logEntries.push({
      timestamp: new Date(),
      message,
      phoneNumber: this.user.phoneNumber,
    });
  }
}
