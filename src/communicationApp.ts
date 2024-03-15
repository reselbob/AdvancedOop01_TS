import {Randomizer} from './utils/Randomizer';
import {EmailMessenger} from './communication/EmailMessenger';
import {SMSMessenger} from './communication/SMSMessenger';

(async () => {
  try {
    const numberOfMessages = 2;
    const person = Randomizer.getRandomPerson();

    const emailMessenger = new EmailMessenger(person);
    const smsMessenger = new SMSMessenger(person);

    for (let i = 0; i < numberOfMessages; i++) {
      emailMessenger.sendMessage(Randomizer.getRandomMessage());
      smsMessenger.sendMessage(Randomizer.getRandomMessage());
    }
    console.log('\n-------SMS---------\n');
    console.log({emailMessages: emailMessenger.getMessages()});
    console.log({emailLogEntries: emailMessenger.getLogEntries()});

    console.log('\n-------EMAIL-------\n');

    console.log({smsMessages: smsMessenger.getMessages()});
    console.log({smsLogEntries: smsMessenger.getLogEntries()});
  } catch (e: any) {
    console.error(e.message);
  }
})();
