import React from "react";
import "./App.css";
import { ObjectKeysExample } from "./Example1/ObjectKeysExample";
import { ZooExample } from "./Example2/ZooExample";
import GenericExample from "./Example2/GenericExample";

function App() {
  return (
    <div className="App">
      {/* <ObjectKeysExample /> */}
      <ZooExample />
      <GenericExample />
    </div>
  );
}

export default App;
