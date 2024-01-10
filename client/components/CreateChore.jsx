import React, { useState } from 'react';
import '../styles.css';
import { useDispatch } from 'react-redux';
import { useGetAllChoresQuery } from "../redux/api/chores/choresApi.js";


export default function CreateChore() {
  // const [initialChore, setChore] = useState('');
  // const [owner, setOwner] = useState('');
  // const [date, setDate] = useState('');
  // const [data, error, isLoading] = useGetAllChoresQuery();

  const dispatch = useDispatch();

  const someHelperFunction = (e) => {
    e.preventDefault();
    try {
      console.log('test', document.getElementById('chore-title').value, document.getElementById('owner-title').value, document.getElementById('due-date').value, document.getElementById('chore-description').value);
      // send a POST request to the server with the form data
      const choreTitle = document.getElementById('chore-title');
      const ownerTitle = document.getElementById('owner-title');
      const dueDate = document.getElementById('due-date');
      const choreDescription = document.getElementById('chore-description');
      

      document.getElementById('chore-title').value = '';
      document.getElementById('chore-description').value = '';
      document.getElementById('owner-title').value = '';
      document.getElementById('due-date').value = '';
      fetch('localhost:8080/api/chores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON',
        },
        body: JSON.stringify(
          // (title, description, group_id, chore_status, due_date, assigner_id, created_date)
          [choreTitle, choreDescription, 1, 'assigned', dueDate, 1, new Date().toLocaleString('en-US')],
        ),
      })
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
  };

  // const sendCreateChore = (e) => {
  //   e.preventDefault();
  //   try {
  //     // const usePostResult = api.endpoints.updatePost.useMutation(options)
  //     useGetAllChoresQuery(JSON.stringify({
  //       title: 'cheney is testing',
  //       description: 'pandawhale',
  //       group_id: 1,
  //       chore_status: 'doing',
  //       due_date: 'as soon as possible',
  //       assigner_id: 1,
  //       created_date: new Date().toLocaleString('en-US'),
  //     }));
  //     console.log('test', initialChore, owner, date);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div id="lane" className="createChore">
      <h2>Create Chore</h2>
      <form onSubmit={someHelperFunction}>
        <label>
          Chore Title:
          <input
            type="text"
            placeholder="Dishes, Laundry, etc..."
            className='create-chore-input'
            id='chore-title'
            // value={initialChore}
            
          />
        </label>
        <label>
          Chore Description:
          <input
            type="text"
            placeholder="Use cleaning solution, etc..."
            className='create-chore-input'
            id='chore-description'
            // value={initialChore}
            
          />
        </label>
        <label>
          Owner:
          <input
            type="text"
            placeholder="Name"
            className='create-chore-input'
            id="owner-title"
            // value={owner}
            // onChange={(e) => setOwner(e.target.value)}
          />
        </label>
        <label>
          Due Date:
          <input
            type="text"
            placeholder="MM/DD/YYYY"
            className='create-chore-input'
            id='due-date'
            // value={date}
            // onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button id='create-chore-button' type="submit">Create Chore</button>
      </form>
    </div>
  );
}
