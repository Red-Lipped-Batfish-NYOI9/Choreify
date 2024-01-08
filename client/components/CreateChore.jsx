import React, { useState } from 'react';
import '../styles.css';
import { useGetAllChoresQuery } from "../redux/api/chores/choresApi.js";

export default function CreateChore() {
  const [initialChore, setChore] = useState('');
  const [owner, setOwner] = useState('');
  const [date, setDate] = useState('');
  const [data, error, isLoading] = useGetAllChoresQuery();

  const someHelperFunction = (e) => {
    e.preventDefault();
    try {
      console.log('test');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="lane" className="createChore">
      <h2>Create Chore</h2>
      <form onSubmit={someHelperFunction}>
        <label>
          {' '}
          Chore Title:
          <input
            type="text"
            placeholder="Dishes, Laundry, etc..."
            value={initialChore}
            onChange={(e) => setChore(e.target.value)}
          />
        </label>
        <label>
          {' '}
          Owner:
          <input
            type="text"
            placeholder="Your Name"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </label>
        <label>
          {' '}
          Due Date:
          <input
            type="text"
            placeholder="MM/DD/YYYY"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="submit">Create Chore</button>
      </form>
    </div>
  );
}
