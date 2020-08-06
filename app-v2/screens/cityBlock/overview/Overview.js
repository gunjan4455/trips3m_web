import PropTypes from 'prop-types';
import React from 'react';

import PlacesToVisit from 'modules/placesToVisit/index';
import Guide from 'modules/shared/Guide';
import SimilarDestination from 'modules/shared/similarDestination/index';
import ThingsToDo from 'modules/thingsToDo/index';
import HowToReach from '../howToReach/index';
import TopRegions from 'modules/cityBlock/TopRegions/TopRegions';
import { showPopUp } from 'helpers/exitIntent';

const Overview = (props) => {
  const { location, cityBlock, match: { params }} = props;
  const PlacesToVisitContainer = PlacesToVisit.container;
  const ThingsToDoContainer = ThingsToDo.container;
  const HowToReachContainer = HowToReach.templateContainer;
  const { tourismGuide, similarDestinations, destination } = cityBlock;
  return (
    <div className="clearfix">
      <div className="sbcw mt8 mb8 mt0">
        <Guide guide={tourismGuide} />
      </div>
      <div id="reactExitIntentImage" className="mkt-mob-exit-intent relative pl8 pr8 mb8" onClick={showPopUp} />
      <div className="mb8 mt0">
        {
          destination === 'India' ?
            <TopRegions topRegions={similarDestinations}/> :
            <SimilarDestination similarDestination={similarDestinations} destination={destination}
              location={location} routeParams={params || {}} ssrAnimation={{ width: 60, height: 60 }}/>
        }
      </div>
      <div className="mb8 mt0 p15 sbcw">
        <PlacesToVisitContainer />
      </div>
      <div className="mb8 mt0 p15 sbcw">
          <ThingsToDoContainer />
      </div>
      {
        destination === 'India' ?
          null :
          <div className="mb8 mt0 p15 sbcw">
            <HowToReachContainer {...props} />
          </div>
      }
    </div>
  );
};

export default Overview;

Overview.propTypes = {
  cityBlock: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  exitIntent: PropTypes.object.isRequired
};
