import React from 'react';
import PropTypes from 'prop-types';

import { FilterIcon } from 'helpers/Icon/Icon';

const Filters = ({ initialFilters }) => {
  return (
    <div>
      <div className="pl15 pb5 pt5 pr15 flex alignCenter">
        <span className="iblock input-24 verticalMiddle">
          <FilterIcon/>
        </span>
        <div className="iblock pl15 verticalMiddle">
          <p className="iblock f14 fw4 pfc3 pb2">Filters</p>
          <p className="at_filterlength fw4 f10 pfc4">{initialFilters.length} selected</p>
        </div>
      </div>
    </div>
  );
};

Filters.propTypes = {
  initialFilters: PropTypes.array,
};

Filters.defaultProps = {
  initialFilters: [],
};

export default Filters;

