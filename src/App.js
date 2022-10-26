import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {
  const [entries, setEntries] = useState([{weight: 175, date: '10-26-22'}])

  return (
    <div>
     <DisplayEntries entries={entries}></DisplayEntries>
    </div>
  );
}

export default App;
