import React, { useState } from 'react';

export default function ChoreCard() {
  const [name, setName] = useState('');
  const [chore, setChore] = useState('');

  return (
    <div id="lane">
      <h2>Chores Not Started</h2>
      <p>
        Chore:
        {' '}
        {chore}
      </p>
      <p>
        Owner:
        {' '}
        {name}
      </p>
      <p>Created Date: "some date from the database"</p>
      <p>Due Date: </p>
    </div>
  );
}
