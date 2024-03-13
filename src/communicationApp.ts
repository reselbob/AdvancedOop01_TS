import {Randomizer} from './utils/Randomizer';
import {EmailMessenger} from './communication/EmailMessenger';
import {SMSMessenger} from './communication/SMSMessenger';

(async () => {
  try {
    const numberOfMessages = 5
    const person = Randomizer.getRandomPerson();

    const emailMessenger = new EmailMessenger(person);
    const smsMessenger = new SMSMessenger(person);

    for (let i = 0; i < numberOfMessages; i++) {
      emailMessenger.sendMessage(Randomizer.getRandomMessage());
      smsMessenger.sendMessage(Randomizer.getRandomMessage());
    };

    console.log({emailMessages: emailMessenger.getMessages()});
    console.log({smsMessages: smsMessenger.getMessages()});

  } catch (e: any) {
    console.error(e.message);
  }
})();
