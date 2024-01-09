import { useEffect, useState } from "react";
import "./App.css";
import WordOutput from "./WordOutput";
import WordInput from "./WordInput";
import Movies from "./Movies";


function App() {

  return (
    <div>
      <WordInput/>
      <WordOutput/>
      <br />
      <br />
      <Movies />
    </div>
  )
}


export default App;
