import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../common/Heading';
import {DownArrow, Flights, Train, CabIconFront, Ship} from "app/helpers/Icon/Icon";
import './HowToReach.scss';

const IconMap = {
  'By Air': <Flights />,
  'By Train': <Train />,
  'By Road': <CabIconFront />,
  'By Sea': <Ship />,
};

const HowToReach = ({ byRoute }) => {
  const HowToReachByRoute = byRoute.map((byroute, i) =>
    <div key={i}>
      <input type="radio" name="byroute-radio" id={`byroute_${byroute.id}`} className='byroute-input'/>
      <label htmlFor={`byroute_${byroute.id}`}>
        <div className='byroute-title'>
          <span className='byroute-icon absolute l0 absolute-center-v iblock'>{IconMap[byroute.title]}</span>
          <h3 className='f14 fw9'>{byroute.title}</h3>
          <span className='arrow-down smooth absolute r0 absolute-center-v iblock'><DownArrow /></span>
        </div>
        <div className='byroute-description'>
          <p>
            {byroute.description}
          </p>
        </div>
      </label>
    </div>
  );

  return (
    <div className="clearfix radius2 sbcw p15 mb8 overflowh relative z1">
      <Heading data={{ heading: 'How To Reach Kerala', subHeading: 'Read about the best & quickest routes to save time & money, as suggested by our travelers' }} />
      <div className="clearfix">
        {HowToReachByRoute}
      </div>

    </div>
  );
};

HowToReach.propTypes = {
  byRoute: PropTypes.array,
};

HowToReach.defaultProps = {
  byRoute: []
};

export default HowToReach;
