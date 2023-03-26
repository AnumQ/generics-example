import React from "react";
import "./App.css";

interface Language {
  name: string;
  age: number;
  extensions: string[];
}

type LanguageKeys = keyof Language;
interface Person {
  name: string;
  age: number;
  gender: "male" | "female" | "non-binary" | "prefer not to say";
}

type PersonKeys = keyof Person;

function App() {
  const languageKeys: LanguageKeys[] = ["age", "extensions"];
  const ageAndExtensions = pickObjectKeys(language, languageKeys);
  // 8
  // ts, tsx

  const personKeys: PersonKeys[] = ["age", "gender"];
  const personAndGender = pickObjectKeys(person, personKeys);
  // 30
  // male

  return (
    <div className="App">
      <p>{ageAndExtensions.age}</p>
      <p>{ageAndExtensions.extensions.toString()}</p>
      <p>{personAndGender.age}</p>
      <p>{personAndGender.gender}</p>
    </div>
  );
}

export default App;

// Example 1
const language: Language = {
  name: "TypeScript",
  age: 8,
  extensions: ["ts", "tsx"],
};

const person: Person = {
  name: "John",
  age: 30,
  gender: "male",
};

function pickObjectKeys<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
) {
  let result: Pick<T, K> = {} as any;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}
