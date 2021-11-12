
import { useState, useCallback } from "react";
import ReactDOM from 'react-dom';
import Entries from './JournalEntries.js'
function App() {

  const staticEntry = ["First day I learned components", "Second Day I learned State", "Third Item was controlled components"];

  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

   const handleSubmit = (event) => {
    event.preventDefault();
    console.log(entry);
    console.log(staticEntry);
    setEntries(staticEntry);

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