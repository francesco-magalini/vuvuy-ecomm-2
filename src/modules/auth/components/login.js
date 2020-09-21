import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Segment, Form, Icon, Button, Label } from "semantic-ui-react";
import { InputField } from "../components/form_controls";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FormattedMessage, injectIntl } from "react-intl";
import Header from "../../layout/header";
import Footer from "../../layout/footer";

import {
  login as loginAction,
  confirmLogin as confirmLoginAction,
  setNewPassword as setPasswordAction,
} from "../redux/actions/authActions";

import { AUTH_ERROR_CLEAR } from "../redux/types/types";
import store from "../../../redux/store";

class Login extends Component {
  constructor(props) {
    super(props);
    this.renderAlert.bind(this);
  }

  dispatchResetError = () => {
    let counter = 6;
    const seconds = setInterval(() => {
      if (counter === 0) {
        clearInterval(seconds);
        // dispatch INIT_STATE

        store.dispatch({ type: AUTH_ERROR_CLEAR });
      }
      counter = counter - 1;
    }, 1000);
  };

  onFormSubmit({ username, password, newPassword, newPasswordConfirm, code }) {
    const { cognitoUser, mfaRequired, changePassword } = this.props;

    if (
      (typeof mfaRequired === "undefined" || mfaRequired === false) &&
      (typeof changePassword === "undefined" || changePassword === false)
    ) {
      // we pass in the history function so we can navigate from loginAction
      this.props.loginAction({ username, password }, this.props.history);
    } else if (mfaRequired === true && changePassword === false) {
      // we pass in the history function so we can navigate from loginAction
      this.props.confirmLoginAction({ cognitoUser, code }, this.props.history);
    } else if (mfaRequired === false && changePassword === true) {
      const { cognitoUser } = this.props;

      this.props.setPasswordAction(
        { cognitoUser, newPassword },
        this.props.history
      );
    }
  }

  renderAlert() {
    // consume errorMessage and then dispatch event after 4 seconds to clear the state such
    // that message disappears from the screen
    const { errorMessage } = this.props;

    if (typeof errorMessage !== "undefined" && errorMessage !== "") {
      this.dispatchResetError();

      return errorMessage;
    }
  }

  render() {
    const {
      handleSubmit,
      changePassword,
      mfaRequired,
      resendCode,
      fields: { username, password, newPassword, newPasswordConfirm, code }, // eslint-disable-line
    } = this.props;
    const invalidCredentialsMessage = this.renderAlert();

    return (
      <div className="App">
        <div className="page-wrapper">
          <Header />

          <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="icon-home" />
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Login
                  </li>
                </ol>
              </div>
              {/* End .container */}
            </nav>
            <div className="page-header">
              <div className="container">
                <h1>Login and Create Account</h1>
              </div>
              {/* End .container */}
            </div>
            {/* End .page-header */}
            <div className="container">
              <div className="login-form login-signin">
                {/* begin::Head */}
                <div className="text-center mb-10 mb-lg-20">
                  {/* https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage */}
                  <h3 className="font-size-h1">
                    <FormattedMessage id="AUTH.LOGIN.TITLE" />
                  </h3>
                  <p className="text-muted font-weight-bold">
                    <FormattedMessage id="AUTH.LOGIN.TITLE" />
                  </p>
                </div>
                {/* end::Head */}

                {invalidCredentialsMessage && (
                  <div
                    role="alert"
                    className="mb-10 alert alert-custom alert-light-info alert-dismissible"
                  >
                    <div className="alert-text ">
                      {invalidCredentialsMessage}
                    </div>
                  </div>
                )}

                {!mfaRequired && (
                  <div>
                    {!changePassword && (
                      <Form
                        onSubmit={handleSubmit(this.onFormSubmit.bind(this))}
                        className="form"
                      >
                        <div className="form-group row">
                          <div className="col-12">
                            <Field
                              name="username"
                              component={InputField}
                              className="form-control form-control-solid h-auto py-5 px-6"
                              label={this.props.intl.formatMessage({
                                id: "AUTH.INPUT.EMAIL",
                              })}
                              type="text"
                              placeholder={this.props.intl.formatMessage({
                                id: "AUTH.INPUT.EMAIL",
                              })}
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <div className="col-12">
                            <Field
                              name="password"
                              component={InputField}
                              className="form-control form-control-solid h-auto py-5 px-6"
                              label={this.props.intl.formatMessage({
                                id: "AUTH.INPUT.PASSWORD",
                              })}
                              type="password"
                              placeholder={this.props.intl.formatMessage({
                                id: "AUTH.INPUT.PASSWORD",
                              })}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
                            <Link to="/auth/forget">
                              <FormattedMessage id="AUTH.FORGOT.TITLE" />
                            </Link>
                          </div>
                        </div>

                        <Segment clearing className="button-holder-segment">
                          <Form.Field
                            control={Button}
                            compact
                            className="login-button"
                            floated="left"
                            type="submit"
                          >
                            <FormattedMessage id="AUTH.LOGIN.BUTTON" />
                          </Form.Field>
                          <Link to="/register">
                            <Button compact floated="right">
                              <FormattedMessage id="AUTH.GENERAL.SIGNUP_BUTTON" />
                            </Button>
                          </Link>
                        </Segment>
                      </Form>
                    )}

                    {changePassword === true && (
                      <Form
                        onSubmit={handleSubmit(this.onFormSubmit.bind(this))}
                      >
                        <div className="form-group d-flex flex-wrap flex-center">
                          <Field
                            name="newPassword"
                
                            component={InputField}
                            label={this.props.intl.formatMessage({
                              id: "SERVICE.AUTH.NEW_PASSWORD",
                            })}
                            type="password"
                            placeholder={this.props.intl.formatMessage({
                              id: "SERVICE.AUTH.NEW_PASSWORD",
                            })}
                          />
                          <Field
                            name="newPasswordConfirm"
                            component={InputField}
                   
                            label={this.props.intl.formatMessage({
                              id: "SERVICE.AUTH.REPEAT_NEW_PASSWORD",
                            })}
                            type="password"
                            placeholder={this.props.intl.formatMessage({
                              id: "SERVICE.AUTH.REPEAT_NEW_PASSWORD",
                            })}
                          />
                          <div className="forgot-password">
                            {invalidCredentialsMessage && (
                              <Label basic color="red" pointing="above">
                                {invalidCredentialsMessage}
                              </Label>
                            )}
                          </div>
                        </div>
                        <div className="button-holder">
                          <Segment clearing className="button-holder-segment">
                            <Form.Field
                              control={Button}
                              compact
            
                              floated="left"
                              type="submit"
                            >
                            <FormattedMessage id="SERVICE.AUTH.CHANGE_PASSWORD" />
                            </Form.Field>
                          </Segment>
                        </div>
                      </Form>
                    )}
                  </div>
                )}

                {mfaRequired && (
                  <div className="login-page">
                    <Form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                      <div className="fill-in">
                        <Field
                          name="code"
                          component={InputField}
                          label={{
                            content: (
                              <Icon color="orange" name="lock" size="large" />
                            ),
                          }}
                          labelPosition="left"
                          type="text"
                          placeholder={this.props.intl.formatMessage({
                            id: "SERVICE.AUTH.VERIFICATION_CODE",
                          })}
                        />
                        <div className="error-message">
                          {invalidCredentialsMessage && (
                            <Label basic color="red" pointing="above">
                              {invalidCredentialsMessage}
                            </Label>
                          )}
                        </div>
                        <div className="button-holder">
                          <Segment clearing className="button-holder-segment">
                            <Form.Field
                              control={Button}
                              compact
                              className="verify-code-button"
                              floated="left"
                              type="submit"
                            >
                              <FormattedMessage id="SERVICE.AUTH.VERIFY" />
                            </Form.Field>
                            {resendCode && (
                              <Form.Field
                                control={Button}
                                compact
                                className="resend-code-button"
                                floated="left"
                                type="submit"
                              >
                                <FormattedMessage id="SERVICE.AUTH.RESEND_CODE" />
                              </Form.Field>
                            )}
                          </Segment>
                        </div>
                      </div>
                    </Form>
                  </div>
                )}
              </div>
            </div>
            {/* End .container */}
          </main>

          <Footer />
        </div>
      </div>
    );
  }
}

// Redux-form validation
function validate(formProps) {
  const errors = {};

  if (!formProps.username) {
    errors.username = "Please enter a valid username";
  }

  if (!formProps.password) {
    errors.password = "Please enter a password";
  }

  if (formProps.newPassword !== formProps.newPasswordConfirm) {
    errors.newPasswordConfirm = "Passwords do not match";
  }

  return errors;
}

// Runtime type checking for React props
Login.propTypes = {
  loginAction: PropTypes.func,
  history: PropTypes.object,
  cognitoUser: PropTypes.object,
  errorMessage: PropTypes.string,
  changePassword: PropTypes.bool,
  handleSubmit: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.string),
};

// Lets connect props and dispatch to redux store.
// 1. implement mapStateToProps() and mapDispatchToProps()
// 2. connect() methods above to redux store
// 3. finally, connect reduxForm
// Reference: https://redux-form.com/7.2.3/docs/faq/howtoconnect.md/

function mapStateToProps(state, ownProps) {
  return {
    errorMessage: state.auth.error,
    mfaRequired: state.auth.mfa,
    changePassword: state.auth.changePassword,
    cognitoUser: state.auth.cognitoUser,
  };
}

function mapDispatchToProps(dispatch) {
  // return {
  //   ...bindActionCreators(actionCreators, dispatch),
  //   dispatch
  // };
  return {
    ...bindActionCreators(
      {
        loginAction,
        confirmLoginAction,
        setPasswordAction,
      },
      dispatch
    ),
    dispatch,
  };
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default injectIntl(
  reduxForm({
    form: "loginForm",
    fields: [
      "username",
      "password",
      "newPassword",
      "newPasswordConfirm",
      "code",
    ],
    validate,
  })(Login)
);
