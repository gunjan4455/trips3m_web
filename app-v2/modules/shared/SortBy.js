import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import CommonDropdown from './CommonDropdown';
import {
  DownArrow
} from 'helpers/Icon/Icon';

const SortByDiv = styled.div({
  height: '36px !important'
});

const SortBy = ({ clickHandler, selected, options }) =>
  <SortByDiv className="input-dropdown-box mt0 mb0 radius4 at_sortby">
    <CommonDropdown
      options={options}
      clickHandler={clickHandler}
      defaultOption={options.length && options.filter(obj => obj.value === selected)[0]}
    />
    <span className="r10 block wauto lauto input-icon absolute-center-v arr-icon" >
      <DownArrow />
    </span>
  </SortByDiv>;

SortBy.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  selected: PropTypes.string,
  options: PropTypes.array
};

SortBy.defaultProps = {
  selected: '',
  options: []
};

export default SortBy;
