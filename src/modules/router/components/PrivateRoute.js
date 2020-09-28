import React from "react";
import { Route, Redirect } from "react-router-dom";
import renderMergedProps from "./RenderMergedProps";

const PrivateRoute = ({
  component,
  authenticated = false,
  redirectTo,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return authenticated ? (
          renderMergedProps(component, routeProps, rest)
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: routeProps.location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
