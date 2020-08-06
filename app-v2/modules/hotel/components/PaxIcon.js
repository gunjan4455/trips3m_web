import React from 'react';
import PropTypes from 'prop-types';

import { ProfileIcon } from 'helpers/Icon/Icon';

const PaxIcon = ({ pax }) => {

  const icons = [];
  if (!pax.adults && !pax.children) {
    return null;
  }

  for (let i = 0; i < (pax.adults + pax.children); i++) {
    icons.push(<li key={`pax_${i}`} className="mr2">< ProfileIcon /></li>);
  }
  return icons;
};

PaxIcon.propTypes = {
  pax: PropTypes.object.isRequired
};

export default PaxIcon;
