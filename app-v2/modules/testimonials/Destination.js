import React from 'react';
import PropTpes from 'prop-types';

import { LocationMarkerIcon } from 'helpers/Icon/Icon';

const Destination = ({ breadcrumbs }) => {
  return (
    <div>
      <div className="pl15 pb5 pt5 pr15 flex alignCenter">
        <span className="iblock input-24 verticalMiddle">
          <LocationMarkerIcon />
        </span>
        <div className="iblock pl15 verticalMiddle">
        <p className="iblock f14 fw4 pfc3 pb2">Destinations</p>
        {
          breadcrumbs.length === 4 ?
            <p className="at_destinationDetail fw4 pfc2 f10">
              {`${breadcrumbs[2].name}>${breadcrumbs[3].name}`}
            </p> : null
        }
        </div>
      </div>
    </div>
  );
};

Destination.propTypes = {
  breadcrumbs: PropTpes.array,
};

Destination.defaultProps = {
  breadcrumbs: []
};

export default Destination;

