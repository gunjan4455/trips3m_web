import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Heading.scss';

const Heading = ({ data, type, showViewAll }) => (
  <div className="clearfix mb15 relative">
    {
      (data.heading && data.subHeading) ?
        <span className="wfull block">
        {
          type=='main-heading' ?
            <h2 className="mainHeading ellipsis f16 m0 mb8 pfc1">{data.heading}</h2>
            : <h2 className="mainHeading ellipsis f16 m0 mb8 pfc3">{data.heading}</h2>
        }
          <p className="m0 f14 pfc4">{data.subHeading}</p>
      </span>
        : <h2 className="mainHeading ellipsis f16 m0 pfc1">{data.heading}</h2>
    }
    {
      showViewAll ?
        <Link to={data.url} className="f12 absolute r0 t4">View All</Link>
        : null
    }
  </div>
);

Heading.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
  showViewAll: PropTypes.bool,
};

Heading.defaultProps = {
  data: {
    heading: '',
    subHeading: '',
    url: '#',
  },
  type: '',
  showViewAll: false
};

export default Heading;
