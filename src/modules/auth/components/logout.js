import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "./authActions";
import { bindActionCreators } from 'redux';

class logout extends Component {
  constructor(props) {
    super(props);
    this.props.action.logout(this.props.username , this.props.history);
  }

  render() {
    return <Redirect to="/" />;
  }
}

function mapStateToProps(state) {
  return {
    username: state.auth.cognitoUser.username,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators({ logout }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);