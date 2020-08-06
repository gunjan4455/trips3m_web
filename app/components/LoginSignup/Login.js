import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import Facebook from './Facebook';
import Google from './Google';
import FormHeader from '../Form/FormHeader';
import { required, email } from '../../utils/formValidators';

const renderEmail = ({ input, type, label, meta: { touched, error } }) =>
  <div className="row row- pb15">
    <div className="col-xs-12">
      <div className="row row- relative">
        <input type={type} {...input} className={`input ${touched && (error && 'input-error')}`} placeholder={label} />
      </div>
      {
        touched &&
        (error && <span className="input-error-text">{error}</span>)
      }
    </div>
  </div>;

renderEmail.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};


class renderPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleType: true };
    this.handleType = this.handleType.bind(this);
  }

  handleType() {
    this.setState(prevState => ({
      isToggleType: !prevState.isToggleType
    }));
  }

  render() {
    const { input, label, meta: { touched, error } } = this.props;
    return (
      <div className="row row-">
        <div className="col-xs-12">
          <div className="row row- relative">
            <input type={this.state.isToggleType ? 'password' : 'text'} {...input} className={`input pr64 ${touched && (error && 'input-error')}`} placeholder={label} />
            <Link onClick={this.handleType} className="input-icon-right pfc4 f12 fw4">
              { this.state.isToggleType ? 'SHOW' : 'HIDE' }
            </Link>
          </div>
          {
            touched &&
            (error && <span className="input-error-text">{error}</span>)
          }
        </div>
      </div>
    );
  }
}

renderPassword.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

const Login = ({ goBack, handleSubmit, submitting }) => (
  <div>
    <div className="row row- sbcw pb64">
      <FormHeader name="Login" goBack={goBack} />
      <div className="row row- mt64">
        <div className="col-xs-12">
          <Facebook title="Login" />
        </div>
      </div>
      <div className="row row- mt15">
        <div className="col-xs-12">
          <Google title="Login" />
        </div>
      </div>
      <p className="f16 uppercase text-center pfc4 pt24 pb24">OR</p>
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          component={renderEmail}
          type="text"
          label="Email ID"
          placeholder="Email ID"
          validate={[required, email]}
        />
        <Field
          name="password"
          component={renderPassword}
          label="Password"
          validate={[required]}
        />
        <div className="row row-">
          <div className="row row- mt8 pl15 pr15">
            <Link to="/users/password/new" className="f12 block">Forgot Password?</Link>
          </div>
          <div className="row row- mt15">
            <div className="col-xs-12">
              <button type="submit" disabled={submitting} className="btn-filled-pri-large wfull ripple">
                <div className="wave" />
              Login
            </button>
            </div>
          </div>
          <p className="f12 text-center pt15">New Here? <Link to="/users/sign_up" className="fw9 ml5">Sign Up</Link></p>
        </div>
      </form>
    </div>
  </div>
);

Login.propTypes = {
  goBack: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'signIn-A709E'
})(Login);
