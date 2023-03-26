import React from "react";
import "./App.css";
import { pickObjectKeys } from "./Generics/Generics";
import { languageObj, personObj } from "./Data/data";
import { LanguageKeys } from "./Model/Language";
import { PersonKeys } from "./Model/Person";

function App() {
  const languageKeys: LanguageKeys[] = ["age", "extensions"];
  const ageAndExtensions = pickObjectKeys({
    obj: languageObj,
    keys: languageKeys,
  });
  // 8
  // ts, tsx

  const personKeys: PersonKeys[] = ["age", "gender"];
  const personAndGender = pickObjectKeys({ obj: personObj, keys: personKeys });
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
