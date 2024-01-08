/* eslint-disable import/extensions */
import React from 'react';
import CreateChore from '../components/CreateChore.jsx';
import ChoreCard from '../components/ChoreCard.jsx';
import '../styles.css';

export default function MainContainer() {
  return (
    <div>
      <h1>Choreify!</h1>
      <div id="swimLanes">
        <CreateChore />
        <ChoreCard />
      </div>
    </div>
  );
}
