
import { useState, useCallback } from "react";
import ReactDOM from 'react-dom';

function JournalEntryForm() {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState("");

  const handleSubmit = useCallback((event) => {
    event.preventDefault(); 
    console.log(entry);
    setEntries((t) => [...t, entry]);
  }, [entries]);
   
  


 // const addEntry = useCallback(() => {
  //  setEntries((t) => [...t, entry]);
  //}, [entries]);

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
    <Entries entries={entries} addEntry={handleSubmit} />
    </>

  )
}

const Entries = ({ entries, addEntry }) => {
  console.log("child render");
  return (
    <>
      <h2>Journal Entries</h2>
      {entries.map((entry, index) => {
        return <p key={index}>{entry}</p>;
      })}
      <button onClick={addEntry}>Add Entry</button>
    </>
  );
};




ReactDOM.render(<JournalEntryForm />, document.getElementById('root'));