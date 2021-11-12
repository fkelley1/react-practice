
import { useState, useCallback } from "react";
import ReactDOM from 'react-dom';
import Entries from './JournalEntries.js'
import './App.css'

function App() {

  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

   const handleSubmit = (event) => {
    event.preventDefault();
    console.log(entry);
    setEntries((t) => [...t, entry]);
    setEntry("");
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Enter your Journal Entry:
        <input 
          type="text" 
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
    <hr />
    <Entries entries={entries}/>
    </>

  )
}


ReactDOM.render(<App />, document.getElementById('root'));