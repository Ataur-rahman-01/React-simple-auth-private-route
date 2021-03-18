import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { MyContext } from "../../App";

const PrivteRoute = ({ children, ...rest }) => {
  const [user, setUser] = useContext(MyContext);
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          user[0]?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </>
  );
};

export default PrivteRoute;
