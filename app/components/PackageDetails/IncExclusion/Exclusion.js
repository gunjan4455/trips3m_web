import React from 'react';
import PropTypes from 'prop-types';
import './Inclusion.scss';

const Exclusion = ({ list }) => {
  const elements = list.map((item, i) => (
    <li key={i}>{ item }</li>
    ));

  return (
    <ul className="p0 m0 incl-excl-list excl-list">
      {elements}
    </ul>
  );
};

Exclusion.propTypes = {
  list: PropTypes.array
};

Exclusion.defaultProps = {
  list: []
};

export default Exclusion;
