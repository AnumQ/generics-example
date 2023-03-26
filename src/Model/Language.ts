export interface Language {
  name: string;
  age: number;
  extensions: string[];
}

export type LanguageKeys = keyof Language;
