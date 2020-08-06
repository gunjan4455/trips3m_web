import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import ItineraryTags from '../Itinerary/ItineraryTags';
import {
  DownArrow,
  BlueDownArrow
} from 'helpers/Icon/Icon';
import { PACKAGE_INTERACTED } from 'actions/segmentEvents';
import ItineraryPictureSlider from './ItineraryPictureSlider';

import './../Itinerary/Itinerary.scss';

const DownSideArrow = styled.span({
  width: '10px',
  height: '6px',
  margin: '0 auto',
  display: 'inline-block',
  marginLeft: '5px',
});

const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

const dayDetailElements = (dayDetails = [], packageId, itineraryId) => {
  return dayDetails.slice(0, 5).map((value, key) => (
    <li key={`day_detail_${packageId}_${itineraryId}_${key}`} >{ htmlToReactParser.parse(value) }</li>
  ));
};

const renderItineraryElements = (itinerary, id, resource, trackSegment, setItineraryDay) => {
  return itinerary.map((value, key) => {
    const spaceIndex = value.title.indexOf(' ', value.title.indexOf(' ') + 1) || 0;
    const day = value.title.substr(0, spaceIndex);
    const title = value.title.substr(spaceIndex + 1);

    return (
      <div key={`itinerary_${id}_${key}`} className="itinerary-container-box">
        <div className="row row- relative itinerary-container">
          <div className="col-xs-12 itinerary-container-small">
            <input type="checkbox" className="iti-radio" id={`itinerary_radio_${id}_${key}`}
                   onChange={() => trackSegment(PACKAGE_INTERACTED, 'Itinerary', title) }/>
            <label htmlFor={`itinerary_radio_${id}_${key}`}>
              <div className="pl0 pr8 relative days-count pb8">
                <p className="f12 fw9 relative">{ day }</p>
              </div>
              <div className="row row-  relative">
                <h3 className="f14 fw9 mb8 relative pr48">{ title } <span className="arrow-down smooth absolute r0 absolute-center-v iblock"><DownArrow /></span></h3>
                <div className="row row- itinerary-tags-box">
                  <ItineraryTags list={value.labels} itineraryId={id} tagId={key} />
                </div>

              </div>
              <div className="row row- itinerary-list-box">
                <div className="row row- t0 l0 ">
                    <ul className="list-style-no itinerary-images-container mt24 mb24">
                      {
                        itinerary[key].pictures ? <ItineraryPictureSlider pictures={itinerary[key].pictures} heading={title}/>: null
                      }
                    </ul>
                </div>
                <ul className="list-style-no f12">
                  { dayDetailElements((Array.isArray(value.day_detail) ? value.day_detail : []), id, key) }
                </ul>
                <div className="row row- pt8 pb8">
                  <button
                    onClick={() => setItineraryDay(key + 1)}
                    className="f12 fright sfc1 fw7"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  });
};

const Itinerary = ({ itinerary, titleHead, id, resource, trackSegment, setItineraryDay }) => {
  if (!itinerary) {
    return null;
  }

  return (
    <div className="row row- sbcw p15">
      <h2 className="heading-common-center pb15 bottom-border">{titleHead}</h2>
      <div className="row row- itinerary-container">
        { renderItineraryElements(itinerary, id, resource, trackSegment, setItineraryDay) }
      </div>
    </div>
  );
};

Itinerary.propTypes = {
  itinerary: PropTypes.array.isRequired,
  titleHead: PropTypes.string,
  id: PropTypes.number.isRequired,
  resource: PropTypes.object.isRequired,
  trackSegment: PropTypes.func,
  setItineraryDay: PropTypes.func.isRequired
};
Itinerary.defaultProps = {
  titleHead: 'Itinerary',
  trackSegment: () => {}
};
export default Itinerary;
