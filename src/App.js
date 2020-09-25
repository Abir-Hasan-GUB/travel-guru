import React, { createContext, useState } from 'react';
import './App.css';
import Details from './Details/Details';
import Home from './Home/Home';
import RoomInformation from './RoomInformation/RoomInformation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './NotFound/NotFound';
import PrivateRaoute from './PrivateRoute/PrivateRaoute';
import Contact from './Contact/Contact';
export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
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
           <Contact></Contact>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </userContext.Provider>
  );
}
export default App;
