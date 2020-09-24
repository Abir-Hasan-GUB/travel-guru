import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../App';

const PrivateRaoute = ({ children, ...rest }) => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/contacts",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRaoute;