//React
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//Components
import home from "./modules/home/home";
import orders from "./modules/account/account";
import login from "./modules/auth/components/login";

const PublicRoute = ({ component: ReactComponent, ...rest }) => {
  return <Route {...rest} render={(props) => <ReactComponent {...props} />} />;
};

const PrivateRoute = ({ component: ReactComponent, authStatus, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        typeof authStatus === "undefined" || authStatus === false ? (
          <Redirect to="/login" />
        ) : (
          <ReactComponent {...props} />
        )
      }
    />
  );
};

class Routes extends Component {
  render() {
    //let isAuthenticated = this.props.isAuthenticated;

    return (
      <Switch>
        <PublicRoute path="/" exact component={home} />
        <PublicRoute path="/login" exact component={login} />

        <PrivateRoute path="/account" exact component={orders} />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        //validateUserSession
      },
      dispatch
    ),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
