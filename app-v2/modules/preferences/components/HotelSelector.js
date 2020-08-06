import React, { Component } from 'react';
import PropTypes from "prop-types";

import { HotelRequiredIds } from '../constants';

export default class HotelSelector extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    options: PropTypes.array,
    input: PropTypes.object,
    meta: PropTypes.object,
  };

  onClick = option => {
    const value = { ...this.props.input.value };
    if (option.id === HotelRequiredIds.NOT_REQUIRED) {
      Object.keys(value).forEach(key => {
        value[key] = false;
      });
    } else {
      value[HotelRequiredIds.NOT_REQUIRED] = false;
    }
    value[option.id] = !value[option.id];
    this.props.input.onChange(value);
  };

  render() {
    const { input, meta: { touched, error } } = this.props;

    return (
      <div>
        {this.props.options
          ? this.props.options.map(option => (
            <div className='iblock mr8 mb8' key={option.id}>
              <input type='checkbox' id={`checkboxHotel_${option.id}`} className='checkbox-common'
                     checked={input.value[option.id]} onChange={() => this.onClick(option)} />
              <label className='pl24 pr24' htmlFor={`checkboxHotel_${option.id}`}>{option.name}</label>
            </div>
          ))
          : null
        }
        {
          touched &&
          (error && <span className="input-error-text">{error}</span>)
        }
      </div>
    );
  }
}
