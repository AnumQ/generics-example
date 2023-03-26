import { Language, LanguageKeys } from "./Model/Language";
import { Person, PersonKeys } from "./Model/Person";

export const ObjectKeysExample = () => {
  // Example 1
  const ageAndExtensions = pickObjectKeys({
    obj: languageObj,
    keys: languageKeys,
  });
  // 8
  // ts, tsx

  const personAndGender = pickObjectKeys({ obj: personObj, keys: personKeys });
  // 30
  // male

  return (
    <>
      <p>{ageAndExtensions.age}</p>
      <p>{ageAndExtensions.extensions.toString()}</p>
      <p>{personAndGender.age}</p>
      <p>{personAndGender.gender}</p>
    </>
  );
};

const languageObj: Language = {
  name: "TypeScript",
  age: 8,
  extensions: ["ts", "tsx"],
};

const languageKeys: LanguageKeys[] = ["age", "extensions"];

const personObj: Person = {
  name: "John",
  age: 30,
  gender: "male",
};

const personKeys: PersonKeys[] = ["age", "gender"];

function pickObjectKeys<T extends object, K extends keyof T>({
  obj,
  keys,
}: {
  obj: T;
  keys: K[];
}) {
  let result: Pick<T, K> = {} as any;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}
