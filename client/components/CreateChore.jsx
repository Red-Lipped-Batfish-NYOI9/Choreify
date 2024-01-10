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
      document.getElementById('chore-title').value = '';
      document.getElementById('chore-description').value = '';
      document.getElementById('owner-title').value = '';
      document.getElementById('due-date').value = '';
    
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
      <form onSubmit={sendCreateChore}>
        <label>
          Chore Title:
          <input
            type="text"
            placeholder="Dishes, Laundry, etc..."
            id='chore-title'
            // value={initialChore}
            
          />
        </label>
        <label>
          Chore Description:
          <input
            type="text"
            placeholder="Give 2 scoops to the yellow lab and 1 scoop to the chihuahua"
            id='chore-description'
            // value={initialChore}
            
          />
        </label>
        <label>
          Owner:
          <input
            type="text"
            placeholder="Your Name"
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
            id='due-date'
            // value={date}
            // onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="submit">Create Chore</button>
      </form>
    </div>
  );
}
