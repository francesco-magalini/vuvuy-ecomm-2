import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "../redux/node_modules/redux-form";
import { Form } from "semantic-ui-react";
import { InputField } from "../partials/form_controls";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  register as registerAction,
  confirmRegistration as confirmRegistrationAction,
  resendConfirmationCode as resendCodeAction,
} from "../redux/actions/authActions";
import store from "../../../../redux/store";
import { AUTH_ERROR_CLEAR } from "../redux/types/types";
import { FormattedMessage, injectIntl } from "react-intl";

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

  onFormSubmit({ email, password, code }) {
    const { mfaRequired, resendCode } = this.props;

    if (
      (typeof mfaRequired === "undefined" || mfaRequired === false) &&
      (typeof resendCode === "undefined" || resendCode === false)
    ) {
      // we pass in the history function so we can navigate from loginAction
      this.props.registerAction(
        { email, password },
        this.props.history
      );
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
      fields: { email, password }, // eslint-disable-line
    } = this.props;
    const invalidRegistration = this.renderAlert();

    return (
      <div className="register-page">
        {invalidRegistration && (
          <div
            role="alert"
            className="mb-10 alert alert-custom alert-light-info alert-dismissible"
          >
            <div className="alert-text ">
              {invalidRegistration}
            </div>
          </div>
        )}

        {!mfaRequired && (
          <Form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
            <div className="fill-in">
              <Field
                name="email"
                component={InputField}
                label={this.props.intl.formatMessage({ id: "SERVICE.EMAIL" })}
                className="form-control form-control-solid h-auto py-5 px-6"
                type="email"
                placeholder={this.props.intl.formatMessage({ id: "SERVICE.EMAIL" })}
              />
              {/* <Field
                name="username"
                component={InputField}
                label={{ content: <Icon color="orange" name="user" size="large" /> }}
                labelPosition="left"
                type="text"
                placeholder="Enter username" /> */}
              <Field
                name="password"
                component={InputField}
                label={this.props.intl.formatMessage({ id: "SERVICE.PASSWORD" })}
                className="form-control form-control-solid h-auto py-5 px-6"
                /* label={{
                  content: <Icon color="orange" name="lock" size="large" />,
                }}
                labelPosition="left" */
                type="password"
                placeholder={this.props.intl.formatMessage({ id: "SERVICE.PASSWORD" })}
              />

              {/* <Field
                name="phone"
                component={InputField}
                label={{ content: <Icon color="orange" name="phone" size="large" /> }}
                labelPosition="left"
                type="phone"
              placeholder="Enter phone number" /> */}
              <div className="form-group d-flex flex-wrap flex-center">
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                >
                  <span>
                    <FormattedMessage id="SERVICE.SUBMIT" />
                  </span>
                </button>

                <Link to="/auth/login">
                  <button
                    type="button"
                    className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4"
                  >
                    <FormattedMessage id="SERVICE.CANCEL" />
                  </button>
                </Link>
              </div>
            </div>
          </Form>
        )}

        {mfaRequired && (
          <Form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
            <div className="fill-in">
              <Field
                name="code"
                component={InputField}
                label={this.props.intl.formatMessage({ id: "SERVICE.AUTH.VERIFICATION_CODE" })}
                type="text"
                className="form-control form-control-solid h-auto py-5 px-6"
                placeholder={this.props.intl.formatMessage({ id: "SERVICE.AUTH.VERIFICATION_CODE" })}
              />

              <div className="form-group d-flex flex-wrap flex-center">
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                >
                  <span>
                    <FormattedMessage id="SERVICE.AUTH.VERIFY" />
                  </span>
                </button>

                {resendCode && (
                  <button
                    type="submit"
                    className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                  >
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
    );
  }
}

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

// Reference: https://redux-form.com/7.2.3/docs/faq/howtoconnect.md/
function mapStateToProps(state, ownProps) {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error,
    mfaRequired: state.auth.mfa,
    cognitoUser: state.auth.cognitoUser,
    resendCode: state.auth.resendCode,
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

export default injectIntl(reduxForm({
  form: "loginForm",
  fields: ["username", "password", "email", "phone", "code"],
  validate,
})(Register));
