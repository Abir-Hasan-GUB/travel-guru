import React from 'react';
import './App.css';
import Details from './Details/Details';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import RoomInformation from './RoomInformation/RoomInformation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div>
     {/* <Home></Home> */}
     {/* <Details></Details> */}
     {/* <Login></Login> */}
     {/* <RoomInformation></RoomInformation> */}
     {/* <Header></Header> */}

     <Router>
        <Switch>
          <Route path="/news">
            <Home />
          </Route>

          <Route path="/destination">
          <RoomInformation></RoomInformation>
          </Route>
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





    </div>
  );
}

export default App;
