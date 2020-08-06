import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { required } from 'utils/formValidators';

const renderRadioButton = ({ input, options, meta: { touched, error }, onClickHandler }) => (
  <div>
    {
      touched &&
      (error && <span className="f14 fw7 mt8 mb0" style={{ color: 'red' }}>Please select a reason.</span>)
    }
    {options
      ? options.map(option => (
        <div className='mb8' key={option.id}>
          <input name={input.name} type="radio" {...input} className="radio-common-circle checkbox-round"
                 id={`feedback${option.id}`} value={option.id} checked={option.id === input.value}
                 onClick={onClickHandler} />
          <label className="iblock wfull f14 sfc6 mb8 mt8" htmlFor={`feedback${option.id}`}>
            <div className='pl3'>{option.name}</div>
          </label>
        </div>
      ))
      : null
    }
  </div>
);

renderRadioButton.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  options: PropTypes.array,
  onClickHandler: PropTypes.func
};

const renderRejectReasonTextBox = ({ input }) => (
  <TextArea placeholder="Write Here " className="border p8 mb8" {...input} />
);

renderRejectReasonTextBox.propTypes = {
  input: PropTypes.object
};


const TextArea = styled.textarea({
  height: '76px',
  marginLeft: '30px',
  resize: 'none',
  width: '80%'
});

const GScrollDiv = styled.div({
  height: '72vh',
});


class MoreQuotesForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    constants: PropTypes.object,
    handleCancel: PropTypes.func,
    meta: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      isOtherReasonVisible: false,
    };

    this.hideOtherReason = this.hideOtherReason.bind(this);
    this.showOtherReason = this.showOtherReason.bind(this);
  }

  hideOtherReason() {
    this.setState({ isOtherReasonVisible: false });
  }

  showOtherReason() {
    this.setState({ isOtherReasonVisible: true });
  }

  handleOptionClick = (e) => e.target.value === '6' ? this.showOtherReason() : this.hideOtherReason(); //other option

  render() {
    const otherReasonNode = this.state.isOtherReasonVisible ?
      (<Field
        component={renderRejectReasonTextBox}
        name="otherReason"
      />) : null;

    const options = Object.keys(this.props.constants).map((key) => {
      return {
        id: key,
        name: this.props.constants[key]
      };
    });

    const optionsField = <Field
      name="feedback"
      options={options}
      component={renderRadioButton}
      onClickHandler={(e) => this.handleOptionClick(e)}
      validate={required}
    />;

    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row row-">
          <GScrollDiv className='wfull overflowa'>
            <div className="col-md-12 sbcw z2 p0">
              <div className="col-md-12 iblock">
                <div className="p15 pb24 pt24">
                  <p className="f14 fw7 sfc6 mb0">Please let us know why are you requesting for more quotes?</p>
                </div>
              </div>
              <div className="col-md-12 p15 pt0">
                {optionsField}
                {otherReasonNode}
              </div>
            </div>
          </GScrollDiv>
          <div className="col-md-12 p15  text-right pb24">
            <div className="text-center iblock mr24">
              <span onClick={this.props.handleCancel} className="sfc6 fw7">Cancel</span>
            </div>
            <div className="iblock">
              <button type='submit' className='sfc1 fw7 mr8 ml8'>Request Quotes</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'moreQuotesForm'
})(MoreQuotesForm);
