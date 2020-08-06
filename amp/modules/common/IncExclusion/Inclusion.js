import React from 'react';
import PropTypes from 'prop-types';
import './Inclusion.scss';

const Inclusion = ({ list }) => {
  const elements = list.map((item, i) => (
    <li key={i} id={i === 1 ? 'incexclusion_box-triggerlink': ''}>{ item }</li>
  ));

  return (
    <ul className="p0 m0 incl-excl-list">
      {elements}
    </ul>
  );
};

Inclusion.propTypes = {
  list: PropTypes.array
};

Inclusion.defaultProps = {
  list: []
};

export default Inclusion;
