import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions/index';

class Signin extends Component {

handleFormSubmit({email, password }) {
  console.log(email, password);
  this.props.signinUser({email, password})
}

renderAlert() {
  if(this.props.errorMessage) {
    return (
      <div className="alert alert-danger">
        <strong>Oppz</strong> {this.props.errorMessage}
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
          <Field className="form-control" name="email" component="input" type="email"/>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password</label>
          <Field className="form-control" name="password" component="input" type="password"/>
        </fieldset>
        {this.renderAlert()}
        <button type="submit">Submit</button>
      </form>
    );
  }
  
}

Signin = reduxForm({
  form: 'signin'
})(Signin);

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

// mapstate to props, actions
export default connect(mapStateToProps, actions)(Signin);
