import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sensor from 'react-visibility-sensor';

import ItineraryTags from '../Itinerary/ItineraryTags';
import './DestinationListingCard.scss';
import * as DateUtils from '../../helpers/DateTime';
import { VactionIcon, TestimonailsIcon } from 'helpers/Icon/Icon';
import { destinationDetailPath, packageListingPath, destinationTestimonialPath } from '../../helpers/urlHelpers';
import { numberWithCommas } from '../../utils/parsers';
import Img from 'components/Common/Img';
import { trackSegment, PACKAGE_LIST_CLICK, DESTINATION_CLICK, WEEKEND_CLICK,
  DFEAULT_VALUE, DESTINATION_VIEWED } from '../../actions/segmentEvents';


const DestinationListingCard = ({ destination, category, pageType, numPackages }) => {
  const startRange = DateUtils.numberToMonth(destination.bestTimeToVisit[0] - 1);
  const endRange = DateUtils.numberToMonth(destination.bestTimeToVisit[1] - 1);
  const months = `${startRange}-${endRange}`;

  const destinationUrl = () => {
    if (destination.numberOfPackages && category) {
      if (category === 'Honeymoon' || category === 'Family' || category === 'Friends') {
        return {
          url: packageListingPath(category, destination.name),
          target: '_self'
        };
      }

      return {
        url: packageListingPath('tour', destination.name),
        target: '_self'
      };
    }

    return {
      url: destinationDetailPath(destination.id, destination.name),
      target: '_blank'
    };
  };

  const callSegment = (type) => {
    let section = '';
    let event = '';
    const category = `Destination:${destination.name}`;
    const object = `Destination/${destination.id}`;
    const cta = '';
    const destination_id = destination.id;
    const destination_list = destination.name;
    const label = `Package Type: ${category}`;
    const value = DFEAULT_VALUE;
    if (type === 'category') {
      section = 'Destination List/Main';
      event = PACKAGE_LIST_CLICK;
      trackSegmentEvent({
        event,
        category,
        section,
        object,
        cta,
        destination_id,
        destination_list,
        label,
        value
      });
    } else if (type === 'destination') {
      section = 'Destination List/Main';
      event = DESTINATION_CLICK;
      trackSegmentEvent({
        event,
        category,
        section,
        object,
        cta,
        destination_id,
        destination_list,
        label,
        value
      });
    } else if (type === DESTINATION_VIEWED) {
      section = 'Destination List/Main';
      event = DESTINATION_VIEWED;
      trackSegmentEvent({
        event,
        category,
        section,
        object,
        cta,
        destination_id,
        destination_list,
        label,
        value
      });
    } else {
      section = 'Weekend List/Main';
      event = WEEKEND_CLICK;
      trackSegmentEvent({
        event,
        category,
        section,
        object,
        cta,
        destination_id,
        destination_list,
        label,
        value
      });
    }
  };

  const trackDestinationClick = () => {
    if (numPackages > 0) {
      callSegment('category');
    } else {
      if (pageType === 'weekend') {
        callSegment('Weekend Clicked');
      }
      callSegment('destination');
    }
    return true;
  };

  const trackSegmentEvent = (details) => {
    trackSegment({
      event : details.event,
      category : details.category,
      section : details.section,
      object : details.object,
      cta : details.cta,
      destination_list : details.destination_list,
      destination_id : details.destination_list,
      label : details.label,
      value : details.value
    });
  };

  let sensorVisibility = false;
  const onSensorChange = (isVisible) => {
    if (!sensorVisibility && isVisible) {
      sensorVisibility = isVisible;
      callSegment(DESTINATION_VIEWED);
    }
  };

  const toUrlInfo = destinationUrl();

  return (
    <div className='row row- sbc5 pl8 pr8'>
      <Link onClick={trackDestinationClick} to={toUrlInfo.url} target={toUrlInfo.target} className='pfc3'>
        <div className='row row- p0 relative'>
          <div className='col-xs-12 p0 image-container-span' >
            <Img width={395} height={120}
                 src={destination.imagePath} ikSrc={destination.imagekitUrl} alt="destination" />
          </div>
          <div className='wfull p0 absolute-center-h t8 z2'>
            <div className='col-xs-9 p0 pl8'>
              <p className='f12 fw3 sfcw text-left'>Best time:</p>
              <p className='f14 fw3 text-left text-uppercase sfcw'>{months}</p>
            </div>
            <div className='col-xs-12 p0'>
              <h4 className='text-center f24 sfcw fw4 p8 ellipsis'>
                {destination.name}
              </h4>
              <div className='text-center sfcw text-capitalize'>
                { (destination.numberOfPackages) ?
                  <p>personalize {destination.numberOfPackages}+ packages</p> : ''
                }
              </div>
            </div>
          </div>
        </div>
        <Sensor onChange={onSensorChange} intervalDelay={3000} />
        <div className='row row- sbcw pt15 pl8 pr8 pb8'>
          <div className='col-xs-7 p0 text-left'>
            <p className='f12 fw4 pfc4'>Starting from:</p>
            <h3 className='sfc3 f18 fw7'>₹ {destination.budget}/-</h3>
            <p className='f12 fw4 pfc3'>per person
              <span className='f12 fw4 pfc4 pt4 text-capitalize'>
                    (Flight {(destination.flightsIncluded) ? 'Included' : 'Excluded'} )
                  </span></p>
          </div>
          <div className='col-xs-5 p0 text-right'>
            <h2 className='f12 fw7 pfc3 pt5'>
              {destination.minDays} - {destination.maxDays} Days
            </h2>
          </div>
          <div className='col-xs-12 p0'>
            <ItineraryTags
              list={destination.activityLabels.map(act => (act.name))}
              itineraryId={12}
              tagId={12}
            />
          </div>
        </div>
      </Link>
      <div className='row row- sbcw pl8 pr8 mb8 pb8'>
        <div className='col-xs-12 p0 pt8 pb8'>
          <div className='col-xs-6 pl15 pr0'>
            <h2 className='f12 fw4 pfc3 text-left relative pl15'>
              <span className='absolute vacation-span-con'>
                <VactionIcon />
              </span>{numberWithCommas(destination.numberOfTravelers)}+ Travelers</h2>
          </div>
          <div className='col-xs-6 pl24 pr0'>
            <h2 className='f12 pfc3 fw4 text-left'>
              <a
                href={destinationTestimonialPath(destination.name)}
                className='pfc3 relative pl24'
              ><span className='absolute vacation-span-con-1'>
                <TestimonailsIcon /></span>
                {numberWithCommas(destination.numberOfReviews)} Reviews
                </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
DestinationListingCard.propTypes = {
  destination: PropTypes.object.isRequired,
  pageType: PropTypes.string.isRequired,
  category: PropTypes.string,
  numPackages: PropTypes.number.isRequired,
};
DestinationListingCard.defaultProps = {
  category: undefined,
  numPackages: 0
};
export default DestinationListingCard;
