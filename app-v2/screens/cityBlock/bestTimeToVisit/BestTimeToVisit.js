import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import Weather from '../../../modules/cityBlock/Weather';
import BestTime from '../../../modules/cityBlock/BestTime';
import Climate from '../../../modules/cityBlock/Climate';
import { capitalizeAndReplaceDash } from 'helpers/parsers';
import { showPopUp } from 'helpers/exitIntent';

const BestTimeToVisit = ({ data, location, match: { params }, exitIntent }) => (
  <div className="clearfix">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Best Time To Visit {capitalizeAndReplaceDash(params)} | Best Season To Visit {capitalizeAndReplaceDash(params)}</title>
       <link rel="canonical" href={`https://traveltriangle.com${location.pathname}`} />
    </Helmet>
    {
      data && data.weather && data.weather.dates.length  ?
      <div className="m8 mt0 p15 sbcw">
          <Weather weatherInfo={data.weather} />
      </div> : null
    }
    <div className="m8 mt0 p15 sbcw">
        <BestTime {...data} />
    </div>
    <div id="reactExitIntentImage" className="mkt-mob-exit-intent relative pl8 pr8 mb8" onClick={showPopUp} />
    <div className="m8 mt0 p15 sbcw">
        <Climate data={data.climate} />
    </div>
  </div>
);

export default BestTimeToVisit;

BestTimeToVisit.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  exitIntent: PropTypes.object.isRequired
};
