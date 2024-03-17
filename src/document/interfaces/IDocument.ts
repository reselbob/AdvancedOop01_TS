import {IPerson} from './IPerson';

export interface IDocument {
  id: string;
  title: string;
  text: string;
  author: IPerson;
  print(): void;
}
