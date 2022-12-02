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

export const routeSlice = createSlice({
  name: 'route',
  initialState: {
    route : null,
   },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    
    setRoute: (state, action) => {
      state.route = action.payload;
    },

    resetRoute: (state) => {  
      state.route = null;
    },
    
  },
 
});


export const { setRoute, resetRoute } = routeSlice.actions;

// pull the route from redux dataLayer
export const selectRoute = (state) => state.route.route;


export default routeSlice.reducer;

