import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import DaysItinerary from './DaysItinerary.js';
import PackageIncExc from '../Listing/PackageIncExc.js';
import { Back2Icon } from 'helpers/Icon/Icon';
import PackageSlider from './PackageSlider';
import ItineraryTags from '../Itinerary/ItineraryTags';

const htmlToReactParser = new Parser();

const PackageDetailDayItinerary = (
  {
    packageDetails,
    itinerary,
    day,
    resource,
    setItineraryDay,
    showSection
  }
) => {
  const spaceIndex = itinerary.title.indexOf(' ', itinerary.title.indexOf(' ') + 1) || 0;
  const title = itinerary.title.substr(spaceIndex + 1);

  const homeLink = `/packages/${resource.path}?id=${resource.id}`;
  const nextLink = (day < packageDetails.itinerary.length) ? `${homeLink}&day=${day + 1}` : null;
  const prevLink = (day > 1) ? `${homeLink}&day=${day - 1}` : null;

  // TODO: Scroll is breaking on this page
  return (
    <div className={showSection ? "overflowa sbcw itinerary-details-popup" : "hide"}>
      <div className="row row-">
        <div className="col-xs-12 sbcw pl0 pr0">
          <h2 className="f16 text-left fw4 pl48 pt15 pb15 relative pr15">
            <button
              className="absolute-center-v l15 cross-common"
              onClick={() => setItineraryDay(0)}
            >
              <Back2Icon />
            </button>
            Itinerary
          </h2>
        </div>
      </div>
      { /* Using packageDetials images. API Dependency */ }
      <div className="package-slider-img">
      <PackageSlider
        images={itinerary.pictures}
        name={packageDetails.name}
        covers={packageDetails.covers}
      />
      </div>
      <div className="row row- p15 sbcw">
        <div className="itinerary-days-flag mb15">Day {day}</div>
        <h3 className="f16 pfc3 text-left fw9">{title}</h3>
        <ItineraryTags list={itinerary.categories} itineraryId={packageDetails.id} tagId={day} />
        <div className="col-xs-12 p0 pb64">
          <div className="f14 pfc3 fw4 text-left pt15">
            {htmlToReactParser.parse(itinerary.description)}
          </div>
          <p className="text-left pfc3 fw7 f14 pt24">Other Benefites</p>
          <div className="row row- inclusion-height-box">
            <PackageIncExc inclusions={itinerary.inclusions} id={`daydetails_${packageDetails.id}`} />
          </div>
        </div>
      </div>
      <DaysItinerary
        day={day}
        nextLink={nextLink}
        prevLink={prevLink}
        setItineraryDay={setItineraryDay}
      />
    </div>
  );
};

PackageDetailDayItinerary.propTypes = {
  packageDetails: PropTypes.object.isRequired,
  day: PropTypes.number.isRequired,
  resource: PropTypes.object.isRequired,
  itinerary: PropTypes.object,
  setItineraryDay: PropTypes.func.isRequired,
  showSection: PropTypes.bool.isRequired
};

PackageDetailDayItinerary.defaultProps = {
  itinerary: {}
};

export default PackageDetailDayItinerary;

