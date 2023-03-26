import { Language, LanguageKeys } from "../Model/Language";
import { Person, PersonKeys } from "../Model/Person";

// Example 1
export const languageObj: Language = {
  name: "TypeScript",
  age: 8,
  extensions: ["ts", "tsx"],
};

export const languageKeys: LanguageKeys[] = ["age", "extensions"];

export const personObj: Person = {
  name: "John",
  age: 30,
  gender: "male",
};

export const personKeys: PersonKeys[] = ["age", "gender"];
