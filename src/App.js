import React, { createContext, useState } from 'react';
import './App.css';
import Details from './Details/Details';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import RoomInformation from './RoomInformation/RoomInformation';
import {
  BrowserRouter as Router,
  Switch,
  Route, useHistory, useLocation
} from "react-router-dom";
import NotFound from './NotFound/NotFound';
import PrivateRaoute from './PrivateRoute/PrivateRaoute';


export const userContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});


  return (
     <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
       <p>Name: {loggedInUser.name}</p>
     <Router>
        <Switch>
          <Route path="/news">
            <Home />
          </Route>

          <PrivateRaoute path="/destination">
          <RoomInformation name={loggedInUser.name}></RoomInformation>
          </PrivateRaoute>

          <Route path="/blog">
          <Details></Details>
          </Route>
          <Route path="/contacts">
            <Login></Login>
          </Route>
          <Route exact path="/">
          <Home />
          </Route>
          {/* <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route> */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </userContext.Provider>

   
  );
}

export default App;
