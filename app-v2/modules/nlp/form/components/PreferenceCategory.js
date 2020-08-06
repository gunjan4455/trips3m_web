import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RangeSlider from 'modules/shared/rangeSlider';
import styles from './PreferencesCategory.cm.scss';

class PreferenceCategory extends PureComponent {

  render() {
    const { text, subText, keyValue, min, max, labels, updateFormValues, value, valueSuffix, displayValue } = this.props;
    return (
      <div className={`at_category pl24 pr24 pt24 pb15 ${styles.bottomSpacing}`}>
        <div className="flex fw9 spaceBetween">
          <p>{text}</p>
          <span className="pfc1">{displayValue ? displayValue : value} {valueSuffix}</span>
        </div>
        <p className="f12 pfc4 mt8 pb48">{subText}</p>
        <div className="">
          <RangeSlider
            min={min}
            max={max}
            labels={labels}
            onChange={updateFormValues}
            className="nurturingSlider relative"
            value={value}
            keyValue={keyValue}
          />
        </div>
      </div>
    );
  }
}

PreferenceCategory.propTypes = {
  text: PropTypes.string,
  subText: PropTypes.string,
  keyValue: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  labels: PropTypes.object.isRequired,
  updateFormValues: PropTypes.func,
  value: PropTypes.number,
  valueSuffix: PropTypes.string,
  displayValue: PropTypes.string
};

PreferenceCategory.defaultProps = {
  valueSuffix: '',
  text: '',
  subText: '',
  updateFormValues: () => {},
  value: 0,
  displayValue: null
};

export default PreferenceCategory;
