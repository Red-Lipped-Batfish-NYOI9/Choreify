import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/*
Redux Toolkit automatically infers actions
So here, we only define slices. Slices are objects that deal with a particular part of our store.
Inside the slider we create the reducers (update the part of the state regarding this slice), define the actions and the selectors (functionality to access the data).
*/

export const groupsSlice = createSlice({
  name: 'groups',
  initialState: {
    data: {}, // {id:{choreObj}, id: {choreObj}}
    status: 'idle', // status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null,
  },
  reducers: {
    // Redux uses immer library which detects changes to a "draft state" and produces a brand new immutable state based off those changes
    add: (state, action) => {
      console.log('REDUCER: invoker ADD');
      state.groups.data.action.payload.id = action.payload; // Expects all chore data structure to be passed
    },
    modify: (state, action) => {
      console.log('REDUCER: invoker Modify');
      state.groups.data.action.payload.id = action.payload; // Expects all chore data structure to be passed
    },
    deleteOne: (state, action) => {
      console.log('REDUCER: invoker DeleteOne');
      delete state.groups.data.action.payload.id; // Expects chore id to be passed
    },
  },
  extraReducers(builder) {
    // Used for reducers that were not defined and auto-assigned action creators inside our slice - particular use cases
    builder
      .addCase(fetchGroups.pending, (state, action) => {
        console.log('####### fetchGroups.pending! ', {
          state_data: state?.data,
          status: state?.status,
          action_type: action.type,
          payload: action.payload,
        });
        state.status = 'loading';
      })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        console.log('####### fetchGroups.fulfilled! ', {
          state_data: state?.data,
          status: state?.status,
          action_type: action.type,
          payload: action.payload,
        });
        state.data = action.payload; // Rewrites whole state with data from fetch
        state.status = 'succeeded';
      })
      .addCase(fetchGroups.rejected, (state, action) => {
        console.log('(`####### state.data ', state?.data);
        console.log('(`####### state.status ', state?.status);
        console.log('#### action ', action);
        state.error = action.error.message;
        console.log('####### fetchGroups.rejected! ', {
          state_data: state?.data,
          status: state?.status,
          action_type: action.type,
          payload: action.payload,
          error_name: action.error.name,
          error_message: action.error.message,
          error_stack: action.error.stack,
        });
        state.status = 'failed';
      });
  },
});

export const { add, modify, deleteOne } = groupsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const fetchGroups = createAsyncThunk('groups/fetchGroups', async () => {
  const response = await fetch('http://localhost:8080/api/groups/');
  const data = await response.json();
  console.log('#### fetchGroups ', data);
  return data;
});

/* -------------------//     The function below is called a selector and allows us to select a value from
//      SELECTORS    //     the state. Selectors can also be defined inline where they're used instead of
//-------------------//     in the slice file. For example: `useSelector((state) => state.counter.value)` */

export const selectAllGroups = (state) => state.groups.data;

export const selectGroupsById = (state, choreIdsObj) => {
  const selectedGroups = [];
  for (const id in choreIdsObj) {
    if (state.groups.choreIdsObj[id]) {
      selectedGroups.data = state.groups.choreIdsObj[id];
    }
  }
  return selectedGroups;
};

export default groupsSlice.reducer;
