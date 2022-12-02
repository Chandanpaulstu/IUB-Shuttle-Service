import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Routes
} from "react-router-dom";
import Join from "./Components/Join";
import Login from "./Components/Login";
import Home from "./Container/Home";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./utils/firebase";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
          dispatch(
            login
            ({
              email: user.email,
              displayName: user.displayName,
              photoUrl: user.photoURL
          }));
      }else{
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="App">
      <Routes>
            
            <Route path='/join' element={<Join />} />
            <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
