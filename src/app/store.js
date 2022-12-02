import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import routeReducer from '../features/routeSlice';
import messageReducer from '../features/messageSlice';




export const store = configureStore({
  reducer: {
    message: messageReducer,
    user: userReducer,
    route: routeReducer,
    
  },
});
