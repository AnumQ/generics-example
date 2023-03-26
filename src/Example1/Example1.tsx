import { languageObj, languageKeys, personObj, personKeys } from "./Data/data";
import { pickObjectKeys } from "./Generics/Generics";

export const Example1 = () => {
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
      {" "}
      <p>{ageAndExtensions.age}</p>
      <p>{ageAndExtensions.extensions.toString()}</p>
      <p>{personAndGender.age}</p>
      <p>{personAndGender.gender}</p>
    </>
  );
};
