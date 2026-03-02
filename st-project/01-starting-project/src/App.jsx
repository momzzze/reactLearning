import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts concepts={CORE_CONCEPTS} />
        <Examples />
      </main>
    </>
  );
}

export default App;
