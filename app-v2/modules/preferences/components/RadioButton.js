import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    options: PropTypes.array,
    input: PropTypes.object,
    meta: PropTypes.object,
  };

  handleChange = (e) => {
    this.props.input.onChange(parseInt(e.target.value));
  };

  render() {
    const { input, meta: { touched, error } } = this.props;

    return (
      <div className='mb15'>
        {this.props.options
          ? this.props.options.map(option => (
            <div className='iblock mr8 mb8' key={option.id}>
              <input name={input.name} type='radio' id={`checkboxHotel_${option.id}`} className='radio-common-circle checkbox-round sfc6'
                     value={option.id} checked={option.id === input.value} onChange={this.handleChange}/>
              <label className='pr8' htmlFor={`checkboxHotel_${option.id}`}><div className='pl3'>{option.name}</div></label>
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
