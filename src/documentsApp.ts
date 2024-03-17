import {IDocument} from './document/interfaces/IDocument';
import {HardCopyDocument} from './document/HardCopyDocument';
import {ILogEntry} from './document/interfaces/ILogEntry';
import {ILogger} from './document/interfaces/ILogger';
import {WebDocument} from './document/WebDocument';
import {Randomizer} from './randomizer/Randomizer';

(async () => {
  const author = Randomizer.getRandomPerson();
  try {
    let document = new WebDocument('Understanding the World Wide Web', author);
    console.log('\n----------------\n');
    (document as IDocument).print();
    let logEntries: Array<ILogEntry> = (document as ILogger).getLogEntries();
    console.log({webDocumentLogEntries: logEntries});
    console.log('\n----------------\n');

    document = new HardCopyDocument('Hard Copy Manifesto', author);
    (document as IDocument).print();
    logEntries = (document as ILogger).getLogEntries();
    console.log({hardCopyLogEntries: logEntries});
    console.log('\n----------------\n');
  } catch (e: any) {
    console.error(e.message);
  }
})();
