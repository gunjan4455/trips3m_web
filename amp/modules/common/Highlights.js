import React from 'react';
import PropTypes from 'prop-types';

import './Highlights.scss';

const Highlights = ({ list }) => {
  if (!list.length) {
    return null;
  }

  return (
    <div className="clearfix mb8">
      <div className="clearfix p15 sbcw">
        <h2 className="f16 fw9 m0 mb24">Highlights</h2>
        <ul className="highlightsList">
          {
            list.map((l, i) => <li key={i}>
              <span className="block"></span>{l.text}
            </li>)
          }
        </ul>
      </div>
    </div>
  );
};

Highlights.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Highlights;
