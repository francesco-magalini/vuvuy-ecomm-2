import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from '../redux/node_modules/redux-form';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { InputField } from '../partials/form_controls';
import PropTypes from 'prop-types';
import {
  forgotPassword as forgotPasswordAction,
  confirmForgotPassword as confirmForgotPasswordAction } from '../redux/actions/authActions';
import { FormattedMessage, injectIntl } from "react-intl";

class forgot extends Component {

  constructor(props) {
    super(props);
    this.renderAlert.bind(this);
  }


  onFormSubmit({ username, newPassword, code }) {
    const {
      forgotPasswordCode,
      history} = this.props;

    // Need to do something to log user in
    // we pass in the history function so we can navigate from forgotPasswordAction
    if (typeof forgotPasswordCode === 'undefined' || forgotPasswordCode ===false) {
      this.props.forgotPasswordAction({ username }, history);
    } else {
      this.props.confirmForgotPasswordAction({username, code, newPassword}, history);
    }
  }

  renderAlert() {
    // consume errorMessage and then dispatch event after 4 seconds to clear the state such
    // that message disappears from the screen
    const { errorMessage } = this.props;

    if (typeof errorMessage != 'undefined' && errorMessage !== '' ) {

      this.dispatchResetError();

      return errorMessage;
    }
  }

  render() {
    const {
      handleSubmit,
      forgotPasswordCode,
      fields: { username, newPassword, newPasswordConfirm, code }} = this.props; // eslint-disable-line
    const invalidCredentialsMessage = this.renderAlert();

    return (
      <div>
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

        { !forgotPasswordCode && (
          <div className="forget-page">
            <Form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
              <div className="fill-in">
                <Field
                  name="username"
                  component={InputField}
                  label={this.props.intl.formatMessage({ id: "SERVICE.EMAIL" })}
                  className="form-control form-control-solid h-auto py-5 px-6"
                  type="text"
                  placeholder={this.props.intl.formatMessage({ id: "SERVICE.EMAIL" })} />
              </div>

              <div className="form-group d-flex flex-wrap flex-center">
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                >
                  <span>
                    <FormattedMessage id="SERVICE.AUTH.SEND_VERIFICATION_CODE" />
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
            </Form>
          </div>
        )}

        { forgotPasswordCode && (
          <div className="forget-page">
            <Form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
              <div className="fill-in">
                <Field
                  name="newPassword"
                  component={InputField}
                  label={this.props.intl.formatMessage({ id: "SERVICE.AUTH.NEW_PASSWORD" })}
                  type="password"
                  className="form-control form-control-solid h-auto py-5 px-6"
                  placeholder={this.props.intl.formatMessage({ id: "SERVICE.AUTH.NEW_PASSWORD" })} />
                <Field
                  name="newPasswordConfirm"
                  component={InputField}
                  label={this.props.intl.formatMessage({ id: "SERVICE.AUTH.REPEAT_NEW_PASSWORD" })}
                  type="password"
                  className="form-control form-control-solid h-auto py-5 px-6"
                  placeholder={this.props.intl.formatMessage({ id: "SERVICE.AUTH.REPEAT_NEW_PASSWORD" })} />
                <Field
                  name="code"
                  component={InputField}
                  label={this.props.intl.formatMessage({ id: "SERVICE.AUTH.VERIFICATION_CODE" })}
                  type="text"
                  className="form-control form-control-solid h-auto py-5 px-6"
                  placeholder={this.props.intl.formatMessage({ id: "SERVICE.AUTH.VERIFICATION_CODE" })} />
              </div>
              <div className="form-group d-flex flex-wrap flex-center">
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                >
                  <span>
                    <FormattedMessage id="SERVICE.AUTH.CHANGE_PASSWORD" />
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
            </Form>
          </div>
        )}

      </div>
    );
  }
}

// Redux-form validation
function validate(formProps) {
  const errors = {};

  if (!formProps.username) {
    errors.username = 'Please enter verification code';
  }

  return errors;
}

// Runtime type checking for React props
Forget.propTypes = {
  forgotPasswordAction: PropTypes.func,
  confirmForgotPasswordAction: PropTypes.func,
  history: PropTypes.object,
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.string)
};


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    forgotPasswordCode: state.auth.forgotPasswordCode,
    errorMessage: state.auth.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ forgotPasswordAction, confirmForgotPasswordAction }, dispatch),
    dispatch
  };
}


// Reference: https://redux-form.com/7.2.3/docs/faq/howtoconnect.md/
Forget = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forget);

export default injectIntl(reduxForm({
  form: 'loginForm',
  fields: ['username'],
  validate
})(Forget));


