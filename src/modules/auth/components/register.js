import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Form } from "semantic-ui-react";
import { InputField } from "../components/form_controls";
import PropTypes from "prop-types";
import { FormattedMessage, injectIntl } from "react-intl";

import {
  register as registerAction,
  confirmRegistration as confirmRegistrationAction,
  resendConfirmationCode as resendCodeAction,
} from "./authActions";
import store from "../../../redux/store";
import { AUTH_ERROR_CLEAR } from "../redux/types/types";

class Register extends Component {
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

  onFormSubmit({ username, password, code }) {
    const { mfaRequired, resendCode } = this.props;

    if (
      (typeof mfaRequired === "undefined" || mfaRequired === false) &&
      (typeof resendCode === "undefined" || resendCode === false)
    ) {
      // we pass in the history function so we can navigate from loginAction
      this.props.registerAction({ username, password }, this.props.history);
    } else if (
      mfaRequired === true &&
      (typeof resendCode === "undefined" || resendCode === false)
    ) {
      const { cognitoUser } = this.props;

      this.props.confirmRegistrationAction(
        { cognitoUser, code },
        this.props.history
      );
    } else if (mfaRequired === true && resendCode === true) {
      const { cognitoUser } = this.props;

      this.props.resendCodeAction({ cognitoUser }, this.props.history);
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
      mfaRequired,
      resendCode,
      fields: { username, password }, // eslint-disable-line
    } = this.props;

    const invalidRegistration = this.renderAlert();

    return (


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
                <h1>
                  <FormattedMessage id="AUTH.REGISTER.TITLE" />
                </h1>
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
                    <FormattedMessage id="AUTH.REGISTER.TITLE" />
                  </h3>
                  <p className="text-muted font-weight-bold">
                    <FormattedMessage id="AUTH.REGISTER.TITLE" />
                  </p>
                </div>
                {/* end::Head */}

                {invalidRegistration && (
                  <div
                    role="alert"
                    className="mb-10 alert alert-custom alert-light-info alert-dismissible"
                  >
                    <div>{invalidRegistration}</div>
                  </div>
                )}

                {!mfaRequired && (
                  <Form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                    <div>
                      <Field
                        autoComplete="username"
                        name="username"
                        component={InputField}
                        label={this.props.intl.formatMessage({
                          id: "AUTH.INPUT.EMAIL",
                        })}
                        type="email"
                        placeholder={this.props.intl.formatMessage({
                          id: "AUTH.INPUT.EMAIL",
                        })}
                      />

                      <Field
                        autoComplete="current-password"
                        name="password"
                        component={InputField}
                        label={this.props.intl.formatMessage({
                          id: "AUTH.INPUT.PASSWORD",
                        })}
                        type="password"
                        placeholder={this.props.intl.formatMessage({
                          id: "AUTH.INPUT.PASSWORD",
                        })}
                      />

                      <div>
                        <button type="submit">
                          <span>
                            <FormattedMessage id="AUTH.GENERAL.SUBMIT_BUTTON" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </Form>
                )}

                {mfaRequired && (
                  <Form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                    <div>
                      <Field
                        name="code"
                        component={InputField}
                        label={this.props.intl.formatMessage({
                          id: "SERVICE.AUTH.VERIFICATION_CODE",
                        })}
                        type="text"
                        placeholder={this.props.intl.formatMessage({
                          id: "SERVICE.AUTH.VERIFICATION_CODE",
                        })}
                      />
                      <div>
                        <button type="submit">
                          <span>
                            <FormattedMessage id="SERVICE.AUTH.VERIFY" />
                          </span>
                        </button>

                        {resendCode && (
                          <button type="submit">
                            <span>
                              <FormattedMessage id="SERVICE.AUTH.RESEND_CODE" />
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </div>
            </div>
            {/* End .container */}
          </main>


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

  if (!formProps.email) {
    errors.email = "Please enter a valid email address";
  }

  if (!formProps.phone) {
    errors.phone = "Phone number must be in this format +1416XXXYYYY";
  }

  return errors;
}

// Runtime type checking for React props
Register.propTypes = {
  registerAction: PropTypes.func,
  history: PropTypes.object,
  errorMessage: PropTypes.string,
  mfaRequired: PropTypes.bool,
  resendCode: PropTypes.bool,
  cognitoUser: PropTypes.object,
  handleSubmit: PropTypes.func,
  confirmRegistrationAction: PropTypes.func,
  resendCodeAction: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.string),
};

function mapStateToProps(state, ownProps) {
  return {
    authenticated: state.auth.authReducer.authenticated,
    errorMessage: state.auth.authReducer.error,
    mfaRequired: state.auth.authReducer.mfa,
    cognitoUser: state.auth.authReducer.cognitoUser,
    resendCode: state.auth.authReducer.resendCode
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        registerAction,
        confirmRegistrationAction,
        resendCodeAction,
      },
      dispatch
    ),
    dispatch,
  };
}

Register = connect(mapStateToProps, mapDispatchToProps)(Register);

export default injectIntl(
  reduxForm({
    form: "loginForm",
    fields: ["username", "password", "email", "phone", "code"],
    validate,
  })(Register)
);
