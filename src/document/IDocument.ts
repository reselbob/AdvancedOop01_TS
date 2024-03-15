export interface IDocument {
  id: string;
  title: string;
  text: string;
  print(): void;
}
