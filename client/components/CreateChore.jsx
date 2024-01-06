import React from 'react';
import { useState } from 'react';

export default function CreateChore() {

  return (
    <div id="createChoreContainer">
      <form onSubmit={someHelperFunction}>
        <label> Chore Name:
          <input
            type="text"
            value={initialState}
            onChange={(e) => changedState(e.target.value)}
          />
        </label>
        <label> Chore Name:
          <input
            type="text"
            value={initialState}
            onChange={(e) => changedState(e.target.value)}
          />
        </label>
        <label> Chore Name:
          <input
            type="text"
            value={initialState}
            onChange={(e) => changedState(e.target.value)}
          />
        </label>
        <button type="submit">Create Chore</button>
      </form>
    </div>
  );
}
