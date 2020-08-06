import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { DownArrow } from 'helpers/Icon/Icon';
import { notSatisfiedOpt, cancelRequestReasons, goingNotTTOpt, notGoigOpt } from './constants';
import {
  CancelOption,
  TextArea,
} from '../ctas/G';
import styled from '@emotion/styled';

const GScrollDiv = styled.div({
  height: 'calc(100vh - 110px)',
});

const getOptions = number => {
  if (number === 0) {
    return notGoigOpt;
  } else if (number === 1) {
    return notSatisfiedOpt;
  } else {
    return goingNotTTOpt;
  }
};

const RenderRadioButton = ({ input, label, id, onClickHandler }) => (
  <div id={`div-${id}`} className='iblock mr8 mt24 mb8'>
    <input type="radio" {...input} className="radio-common-circle checkbox-round sfc6" id={id}
           onClick={onClickHandler} />
    <label className="iblock wfull f14 pfc3 at_cancelrequestreason"
           htmlFor={id}><div className='pl3'>{label}</div></label>
  </div>
);

RenderRadioButton.propTypes = {
  input: PropTypes.any,
  label: PropTypes.any,
  id: PropTypes.any,
  onClickHandler: PropTypes.any
};

const RenderDropdown = ({ input, options }) => (
  <CancelOption className='ml8 relative'>
    <div className='icon-18 absolute-center-v absolute r10 p4 lineHeight0'>
      <DownArrow />
    </div>
    <div className="select-with-icon-box relative ml24">      
      <select className='pl8 Select wfull border pr48' {...input}>
        {
          getOptions(options).map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))
        }
      </select>
    </div>
  </CancelOption>
);

RenderDropdown.propTypes = {
  input: PropTypes.any,
  options: PropTypes.any,
  label: PropTypes.any
};

const RenderTextarea = ({ input }) => (
  <div className="ml8">
    <div className="ml24 mt8">
      <TextArea {...input} />
    </div>
  </div>
);

RenderTextarea.propTypes = {
  input: PropTypes.any
};

class CancelRequestPopUp extends React.Component {

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
  };

  static defaultProps = {};

  constructor() {
    super();
    this.state = {
      showTextClass: false,
      currentChecked: '',
      defaultOption: '',
      dropdowns: [false, false, false],
      textareas: [false, false, false]
    };
  }

  toggleDropdowns = (idx) => {
    const a = [false, false, false];
    a[idx] = true;
    this.setState({
      dropdowns: a
    });
    if (idx === 1) {
      this.setState({
        textareas: [false, true, false]
      });
    } else {
      this.setState({
        textareas: [false, false, false]
      });
    }
  };

  toggleTextareas = (idx, value) => {
    const a = [false, false, false];

    switch (idx) {
      case 0:
        if (value === notGoigOpt[1].value || value === notGoigOpt[3].value) {
          a[idx] = true;
        }
        break;
      case 2:
        if (value === goingNotTTOpt[4].value) {
          a[idx] = true;
        }
        break;
    }

    this.setState({ textareas: a });
  };

  componentDidMount() {
    this.toggleDropdowns(0);
  }

  render() {
    const dropdownOne = this.state.dropdowns[0] ?
      (<Field
        name="reason0"
        options={0}
        component={RenderDropdown}
        onChange={(e) => this.toggleTextareas(0, e.target.value)}
      />) : null;

    const dropdownTwo = this.state.dropdowns[1] ?
      (<Field
        name="reason1"
        options={1}
        component={RenderDropdown}
      />) : null;

    const dropdownThree = this.state.dropdowns[2] ?
      (<Field
        name="reason2"
        options={2}
        component={RenderDropdown}
        onChange={(e) => this.toggleTextareas(2, e.target.value)}
      />) : null;

    const textareaOne = this.state.textareas[0] ?
      (<Field
        name="otherReason"
        component={RenderTextarea}
      />) : null;

    const textareaTwo = this.state.textareas[1] ?
      (<Field
        name="quote_customization"
        component={RenderTextarea}
      />) : null;

    const textareaThree = this.state.textareas[2] ?
      (<Field
        name="otherReason"
        component={RenderTextarea}
      />) : null;

    return (
      <div className="clearfix">
        <form onSubmit={this.props.handleSubmit}>
          <GScrollDiv className="col-sm-12 sbcw z2 p0 overflowa">
            <div className='absolute wfull t0 l0'>
              <div className="pt8 pb8 pl15 pr15 flex bb">
                <div className="pt4 pb4 flex">
                  <p className="f16 flex alignCenter fw7 flexFull ellipsis ml24">
                    Cancel Request
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 iblock p24">
                <p className="f14 fw9 pfc3">Please let us know the reason for cancelling this trip</p>
              <Field
                name="cancel_reason"
                component={RenderRadioButton}
                label={cancelRequestReasons[0]}
                id="not-going"
                type="radio"
                value={cancelRequestReasons[0]}
                onClickHandler={() => this.toggleDropdowns(0)}
              />
              {dropdownOne}
              {textareaOne}
              <Field
                name="cancel_reason"
                component={RenderRadioButton}
                label={cancelRequestReasons[1]}
                id="not-satisfied"
                type="radio"
                value={cancelRequestReasons[1]}
                onClickHandler={() => this.toggleDropdowns(1)}
              />
              {dropdownTwo}
              {textareaTwo}
              <Field
                name="cancel_reason"
                component={RenderRadioButton}
                label={cancelRequestReasons[2]}
                id="going"
                type="radio"
                value={cancelRequestReasons[2]}
                onClickHandler={() => this.toggleDropdowns(2)}
              />
              {dropdownThree}
              {textareaThree}
            </div>
            <div className="fixed flex wfull b0 l0 r0 bs6">
              <div
                className="flexFull text-center sbcw">
                <a onClick={this.props.closeModal}
                   className="link-pri wfull flex at_notnow fw7 hfull justifyCenter alignCenter"><span className='block sfc6'>Not Now</span></a>
              </div>
              <div className="flexFull">
                <button
                  className="pbc2 pt15 pb15 sfcw fw7 wfull ripple at_cancelrequestconfirm radius0">
                  <span className="wave" />Cancel Request
                </button>
              </div>
            </div>
          </GScrollDiv>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'cancelBookingForm',
  initialValues: {
    reason0: notGoigOpt[0].value,
    reason1: notSatisfiedOpt[0].value,
    reason2: goingNotTTOpt[0].value,
    cancel_reason: cancelRequestReasons[0]
  }
})(CancelRequestPopUp);
