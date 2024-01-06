import React from 'react';
import { useState } from 'react';
import '../styles.css'

export default function CreateChore() {
  const [initialChore, setChore] = useState('');
  const [owner, setOwner] = useState('');
  const [date, setDate] = useState('');

  const someHelperFunction = () => console.log('test');

  return (
    <div id="createChoreContainer">
      <form onSubmit={someHelperFunction}>
        <label> Chore Title:
          <input
            type="text"
            value={initialChore}
            onChange={(e) => setChore(e.target.value)}
          />
        </label>
        <label> Owner:
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </label>
        <label> Due Date:
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="submit">Create Chore</button>
      </form>
    </div>
  );
}
