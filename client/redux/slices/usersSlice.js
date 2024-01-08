import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* 
Redux Toolkit automatically infers actions
So here, we only define slices. Slices are objects that deal with a particular part of our store.
Inside the slider we create the reducers (update the part of the state regarding this slice), define the actions and the selectors (functionality to access the data).
*/

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: {},
    status: "idle", //status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null,
  },
  reducers: {
    //Redux uses immer library which detects changes to a "draft state" and produces a brand new immutable state based off those changes
    addLoggedUser: (state, action) => {
      console.log("REDUCER: invoker ADD");
      console.log("action ", action);
      state.data.loggedUser = action.payload;
    },
    add: (state, action) => {
      console.log("REDUCER: invoker ADD");
      state.users.data = action.payload;
    },
    modify: (state, action) => {
      console.log("REDUCER: invoker Modify");
      state.users.data = action.payload;
    },
    deleteOne: (state, action) => {
      console.log("REDUCER: invoker DeleteOne");
      delete state.users.data.action.payload.id;
    },
  },
  extraReducers(builder) {
    //Used for reducers that were not defined and auto-assigned action creators inside our slice - particular use cases
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        console.log(`####### fetchUsers.pending! `, {
          state_data: state?.data,
          status: state?.status,
          action_type: action.type,
          payload: action.payload,
        });
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log(`####### fetchUsers.fulfilled! `, {
          state_data: state?.data,
          status: state?.status,
          action_type: action.type,
          payload: action.payload,
        });
        state.data = action.payload; //Rewrites whole state with data from fetch
        state.status = "succeeded";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log("(`####### state.data ", state?.data);
        console.log("(`####### state.status ", state?.status);
        console.log(`#### action `, action);
        state.error = action.error.message;
        console.log(`####### fetchUsers.rejected! `, {
          state_data: state?.data,
          status: state?.status,
          action_type: action.type,
          payload: action.payload,
          error_name: action.error.name,
          error_message: action.error.message,
          error_stack: action.error.stack,
        });
        state.status = "failed";
      });
  },
});

export const { add, modify, deleteOne, addLoggedUser } = usersSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const fetchUsers = createAsyncThunk("chores/fetchChores", async () => {
  const response = await fetch("http://localhost:8080/api/chores/");
  const data = await response.json();
  console.log("#### fetchChores ", data);
  return data;
});

/*-------------------//     The function below is called a selector and allows us to select a value from
//      SELECTORS    //     the state. Selectors can also be defined inline where they're used instead of
//-------------------//     in the slice file. For example: `useSelector((state) => state.counter.value)` */

export const selectAllUsers = (state) => {
  return state.users.data;
};

export const selectLoggedIn = (state) => {
  return state.users.dataloggedUser;
  // return;
};

export const selectLoggedUser = (state) => {
  return state.users.data.loggedUser;
};

export const selectUsersById = (state, choreIdsObj) => {
  const selectedUsers = [];
  for (let id in usersIdsObj) {
    if (state.chores.choreIdsObj[id]) {
      selectedUsers.push(state.chores.usersIdsObj[id]);
    }
  }
  return selectedUsers;
};

export default usersSlice.reducer;
