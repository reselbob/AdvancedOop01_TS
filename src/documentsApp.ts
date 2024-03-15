import {IDocument} from './document/IDocument';
import {HardCopyDocument} from './document/HardCopyDocument';
import {ILogEntry} from './document/ILogEntry';
import {ILogger} from './document/ILogger';
import {WebDocument} from './document/WebDocument';

(async () => {
  try {
    let document = new WebDocument('Understanding the World Wide Web');
    console.log('\n----------------\n');
    (document as IDocument).print();
    let logEntries: Array<ILogEntry> = (document as ILogger).getLogEntries();
    console.log({webDocumentLogEntries: logEntries});
    console.log('\n----------------\n');

    document = new HardCopyDocument('Hard Copy Manifesto');
    (document as IDocument).print();
    logEntries = (document as ILogger).getLogEntries();
    console.log({hardCopyLogEntries: logEntries});
    console.log('\n----------------\n');
  } catch (e: any) {
    console.error(e.message);
  }
})();
