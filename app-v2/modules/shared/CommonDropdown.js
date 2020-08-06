import React from 'react';
import { PropTypes } from 'prop-types';
import Dropdown from 'react-dropdown';
import 'theme/Common/Dropdown.scss';

const CommonDropdown = ({ options, clickHandler, defaultOption, placeholder }) => (
  <Dropdown
    options={options}
    value={defaultOption || options[0]}
    placeholder={placeholder || 'Select an option'}
    onChange={clickHandler}
  />
);

CommonDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  clickHandler: PropTypes.func,
  defaultOption: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  placeholder: PropTypes.string
};

CommonDropdown.defaultProps = {
  clickHandler: () => {},
  defaultOption: '',
  placeholder: ''
};

export default CommonDropdown;
