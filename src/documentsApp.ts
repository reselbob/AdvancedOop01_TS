import {Randomizer} from './utils/Randomizer';
import {EmailMessenger} from './communication/EmailMessenger';
import {SMSMessenger} from './communication/SMSMessenger';
import {WebDocument} from "./document/WebDocument";
import {IDocument} from "./document/IDocument";
import {HardCopyDocument} from "./document/HardCopyDocument";
import {ILogEntry} from "./document/ILogEntry";
import {ILogger} from "./document/ILogger";

(async () => {
  try {
    //let document: IDocument;
    let document = new WebDocument('Understanding the World Wide Web');
    (document as IDocument).print();

    let logEntries: Array<ILogEntry> = (document as ILogger).getLogEntries()
    console.log({webDocumentEntries: logEntries});
    console.log('\n----------------\n');

    document = new HardCopyDocument('Hard Copy Manifesto');
    (document as IDocument).print();
    logEntries = (document as ILogger).getLogEntries();
    console.log({hardCopyEntries: logEntries});
  } catch (e: any) {
    console.error(e.message);
  }
})();
