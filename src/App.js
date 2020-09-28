//React
import React, { Component, useEffectAsync } from "react";

//Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//React Router
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

//Components
import PrivateRoute from "./modules/router/components/PrivateRoute";
import home from "./modules/home/home";
import Account from "./modules/account/components/Account";
import login from "./modules/auth/components/login";
import register from "./modules/auth/components/register";
import { Debug } from "./modules/debug/Debug";

//import { PropsRoute, PublicRoute, PrivateRoute } from "react-router-with-props";

import { Hub } from "aws-amplify";

//Style
import "./App.scss";
import { validateUserSession } from "./modules/auth/components/authActions";


class App extends Component {
  constructor() {
    super();

    Hub.listen("auth", (data) => {
      const { payload } = data;
      this.onAuthEvent(payload);
    });
  }

  onAuthEvent(payload) {
    console.log(
      "A new auth event has happened: ",
      payload.data.username + " has " + payload.event
    );
  }

  componentDidMount() {
    validateUserSession();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/login" component={login} />
        <Route exact path="/register" component={register} />
        <PrivateRoute
          exact
          path="/account"
          authenticated={this.props.authenticated}
          redirectTo="/login"
          component={Account}
        /><PrivateRoute
        exact
        path="/debug"
        authenticated={this.props.authenticated}
        redirectTo="/login"
        component={Debug}
      />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(App);
