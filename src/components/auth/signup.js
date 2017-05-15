import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';

class Signup extends Component {
  handleFormSubmit(formProps) {
    // call action creator to sign up the user
    console.log(this.props);
    this.props.signupUser(formProps);
  }
  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert-danger">
          <strong>Opz!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit } = this.props;
      return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label htmlFor="email">Email</label>
            <Field className="form-control" name="email" component={renderField} type="email"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="password">Password</label>
            <Field className="form-control" name="password" component={renderField} type="password"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <Field className="form-control" name="confirmPassword" component={renderField} type="password"/>
          </fieldset>
          {this.renderAlert()}
          <button type="submit">Submit</button>
        </form>
      );

  };

}

// reduxForm input validation
function validate(formProps) {
  const errors = {};
  console.log(formProps);

  if(!formProps.email)
    errors.email = 'Please enter an email';
  if(!formProps.password)
    errors.password = 'Please enter an password';
  if(!formProps.confirmPassword)
    errors.confirmPassword = 'Please enter an confirmPassword';

  if(formProps.password !== formProps.confirmPassword)
    errors.password = "password must match";

  return errors;
}
// tenery statement to check for input matching
function renderField(field) {
  return (
    <div>
      <input {...field.input} type={field.type} className="form-control" />
      {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
    </div>
  );
}

Signup = reduxForm({
  form: 'signup',
  validate: validate
})(Signup);

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

// must use connect to attach mapStateToProps and actions to redux form
export default connect(mapStateToProps, actions)(Signup);
