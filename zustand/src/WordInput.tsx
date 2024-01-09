import React from "react";
import { useTextStore } from "./store";

const WordInput = () => {
  const setText = useTextStore((state) => state.setText);

  return <input onChange={(e) => setText(e.target.value)} />;
};
export default WordInput;
