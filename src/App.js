import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { validateUserSession } from "./modules/auth/redux/actions/authActions";

import "./App.scss";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        validateUserSession,
      },
      dispatch
    ),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
