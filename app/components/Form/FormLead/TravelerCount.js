import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import {
  ProfileIcon,
  DownArrow
} from 'helpers/Icon/Icon';

import styled from '@emotion/styled';

const GTravCountDiv = styled.div({
  '&  .Dropdown-menu': {
    maxHeight: '116px',
  }
});

const adultOptions = () => {
  const options = [];
  for (let i = 1; i <= 150; i += 1) {
    options.push({ value: i, label: i });
  }
  return options;
};

const childOptions = () => {
  const defaultValue = { value: '0', label: '0' };
  const options = [];
  options.push(defaultValue);
  for (let i = 1; i <= 150; i += 1) {
    options.push({ value: i, label: i });
  }
  return options;
};

function getChildCount(formValues, index) {
  try {
    return formValues.child_age_answers_attributes[index].user_input;
  } catch (e) {
    return '0';
  }
}

const TravelerDropdown = ({ input, id, options, handleTravelerCount, defaultValue }) => {
  const handleChange = (event) => {
    input.onChange(event.target.value);
    handleTravelerCount(event.target.value, event.target.id);
  };

  return (
    <select id={id} className="select" onChange={handleChange} defaultValue={defaultValue}>
      {
        options.map(option => (
          <option value={option.value} key={`${id}_${option.value}`}>
            {option.value}
          </option>
        ))
      }
    </select>
  );
};

TravelerDropdown.propTypes = {
  input: PropTypes.object.isRequired,
  id: PropTypes.string,
  options: PropTypes.array.isRequired,
  handleTravelerCount: PropTypes.func,
  defaultValue: PropTypes.string
};

TravelerDropdown.defaultProps = {
  id: '',
  handleTravelerCount: () => {},
  defaultValue: ''
};

class TravelerCount extends React.Component {
  constructor(props) {
    super(props);
    this.handleDefaultValues = this.handleDefaultValues.bind(this);
    this.updateChildCountInRedux = this.updateChildCountInRedux.bind(this);

    this.handleDefaultValues();
  }

  updateChildCountInRedux() {
    const totalCount = parseInt(this.state.child.value, 10) + parseInt(this.state.infant.value, 10);
    this.props.dispatchRxFormAction(totalCount.toString(), 'child');
  }

  handleTravelerCount(value, fieldName) {
    let childAgeAttributes;
    if (fieldName === 'infant') {
      this.setState({ infant: { value: value, label: value } }, () => this.updateChildCountInRedux());
      childAgeAttributes = {
        option_id: '29',
        customization_id: '7',
        user_input: value.toString()
      };
      this.props.dispatchRxFormAction(childAgeAttributes, 'child_age_answers_attributes[0]');
    } else if (fieldName === 'child') {
      this.setState({ child: { value: value, label: value } }, () => this.updateChildCountInRedux());
      childAgeAttributes = {
        option_id: '31',
        customization_id: '7',
        user_input: value.toString()
      };
      this.props.dispatchRxFormAction(childAgeAttributes, 'child_age_answers_attributes[2]');
    } else {
      this.props.dispatchRxFormAction(value, fieldName);
    }
  }

  handleDefaultValues() {
    this.state = {
      adults: {
        value: this.props.formValues.adult || '2',
        label: this.props.formValues.adult || '2'
      },
      child: {
        value: getChildCount(this.props.formValues, 2),
        label: getChildCount(this.props.formValues, 2)
      },
      infant: {
        value: getChildCount(this.props.formValues, 0),
        label: getChildCount(this.props.formValues, 0)
      }
    };
  }

  render() {
    return (
      <GTravCountDiv className="row row-8 trav-count">
        <div className="col-xs-6 p8 pt0">
          <label htmlFor="From" className="f14 fw9 pb8 block pfc3">
            Adults <span className="pfc4 fw4 f12">(12+ yrs)</span>
          </label>
          <div className="row row-">
            <div className="input-with-icon-box input-dropdown-box input-dropdown-box-long">
              <span className="input-icon flexCenter profileCon"><ProfileIcon /></span>
              <span className="r10 block wauto lauto input-icon absolute-center-v downArrow"><DownArrow /></span>
              {
                <Field
                  name="adult"
                  component={TravelerDropdown}
                  type="select"
                  id="adult"
                  options={adultOptions()}
                  value={this.state.adults.value}
                  defaultValue={this.state.adults.value}
                  placeholder="2"
                  onChange={(value) => {
                    this.setState({ adults: value });
                    this.props.meta.dispatch({
                      type: '@@redux-form/CHANGE',
                      meta: {
                        form: this.props.meta.form,
                        field: 'adult',
                        touch: false,
                        persistentSubmitErrors: false
                      },
                      payload: value.value
                    });
                  }}
                />
              }
            </div>
          </div>
        </div>
        <div className="col-xs-6 p8 pt0">
          <label htmlFor="From" className="f14 fw9 pb8 block pfc3">
            Infant <span className="pfc4 fw4 f12">(0-2yrs)</span>
          </label>
          <div className="row row-">
            <div className="input-with-icon-box input-dropdown-box input-dropdown-box-long">
              <span className="input-icon flexCenter profileCon"><ProfileIcon /></span>
              <span className="r10 block wauto lauto input-icon absolute-center-v downArrow"><DownArrow /></span>
              {
                <Field
                  name="infant"
                  component={TravelerDropdown}
                  type="select"
                  id="infant"
                  options={childOptions()}
                  value={this.state.infant.value}
                  defaultValue={this.state.infant.value}
                  placeholder="0"
                  // onChange={value => this.handleTravelerCount(value, 'infant')}
                  handleTravelerCount={(value) => this.handleTravelerCount(value, 'infant')}
                />
              }
            </div>
          </div>
        </div>
        <div className="col-xs-6 p8 pt0">
          <label htmlFor="From" className="f14 fw9 pb8 block pfc3">
            Children <span className="pfc4 fw4 f12">(2-12yrs)</span>
          </label>
          <div className="row row-">
            <div className="input-with-icon-box input-dropdown-box input-dropdown-box-long">
              <span className="input-icon flexCenter profileCon"><ProfileIcon /></span>
              <span className="r10 block wauto lauto input-icon absolute-center-v downArrow"><DownArrow /></span>
              {
                <Field
                  name="child"
                  component={TravelerDropdown}
                  type="select"
                  id="child"
                  options={childOptions()}
                  value={this.state.child.value}
                  defaultValue={this.state.child.value}
                  placeholder="0"
                  // onChange={value => this.handleTravelerCount(value, 'child')}
                  handleTravelerCount={(value) => this.handleTravelerCount(value, 'child')}
                />
              }
            </div>
          </div>
        </div>
      </GTravCountDiv>
    );
  }
}

TravelerCount.propTypes = {
  formValues: PropTypes.object.isRequired,
  dispatchRxFormAction: PropTypes.func.isRequired,
  meta: PropTypes.object.isRequired
};

export default TravelerCount;
