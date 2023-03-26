import React from "react";
import "./App.css";
import { pickObjectKeys } from "./Example1/Generics/Generics";
import {
  languageObj,
  languageKeys,
  personObj,
  personKeys,
} from "./Example1/Data/data";

function App() {
  // Example 1
  const ageAndExtensions = pickObjectKeys({
    obj: languageObj,
    keys: languageKeys,
  });
  // 8
  // ts, tsx

  // Example 2
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
