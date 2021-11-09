
import { useState } from "react";
import ReactDOM from 'react-dom';

function JournalEntryForm() {
  const [entry, setEntry] = useState("");
  const journalItems = [
    {id:1, value:'Entry1'},
    {id:2, value:'Entry2'}
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(entry);
    journalItems.push(entry);
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
    <ul>
      {journalItems.map((journalItem) => <JournalEntry key={journalItem.id} value={journalItem.value} />)}
    </ul>
    </>

  )
}

function JournalEntry(props){
  return(
      <li>{props.value}</li>
  );
}


ReactDOM.render(<JournalEntryForm />, document.getElementById('root'));