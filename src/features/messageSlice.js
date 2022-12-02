import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message : null,
   },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    
    setMessage: (state, action) => {
      state.message = action.payload;
    },

    removeMessage: (state) => {  
      state.message = null;
    },
    
  },
 
});


export const { setMessage, removeMessage } = messageSlice.actions;

// pull the message from redux dataLayer
export const selectMessage = (state) => state.message.message;


export default messageSlice.reducer;

