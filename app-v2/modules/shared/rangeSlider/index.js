import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import Slider from 'react-rangeslider';

import './SlideRange.scss';
import 'react-rangeslider/lib/index.css';

class RangeSlider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value, labels: this.getLabels(this.props.value) };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  handleChange(val){
    this.setState({ value: val, labels: this.getLabels(val) });
  }

  handleChangeComplete(){
    const { keyValue } = this.props;
    const { value } = this.state;
    this.props.onChange(keyValue, value);
  }

  getLabels(selectedValue) {
    const { labels } = this.props;
    const newLabels = {};
    Object.keys(labels).forEach((key) => {
      newLabels[key] = <div className={`slider_label ${selectedValue == key ? "active" : ""}`}>
        {labels[key]}</div>;
    });
    return newLabels;
  }

  render() {
    const { value, labels } = this.state;
    const { className, keyValue } = this.props;
    return (
      <div className={` ${className}`}>
      <Slider
        {...this.props}
        ref={`${keyValue}input_range`}
        value={value}
        labels={labels}
        onChange={this.handleChange}
        onChangeComplete={this.handleChangeComplete}
      />
      </div>
    );
  }
};

RangeSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  labels: PropTypes.object,
  className: PropTypes.string,
  keyValue: PropTypes.string.isRequired,
};

RangeSlider.defaultProps = {
  tooltip: false,
  onChange: () => {},
  labels: {},
  className: '',
};

export default RangeSlider;
