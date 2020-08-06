import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Element } from 'react-scroll';

import { TravelInfoIcon } from 'helpers/Icon/Icon';
import { editTravelInfoPath } from "helpers/urlHelpers";
import QuoteCardHeader from "modules/quote/shared/QuoteCardHeader";
import { format } from 'helpers/DateTime';

const GTravelInformationDiv = styled.div({
  width: '50%',
  padding: '0 15px 15px',
  '& > p': {
    fontSize: '14px',
    lineHeight: '20px'
  }
});

const TravelInformation = ({ tripId, days, nights, departureCity, adults, children, tripStartDate, tripEndDate }) => {
  const formattedStartDate = format(tripStartDate, "DD MMM 'YY");
  const formattedEndDate = format(tripEndDate, "DD MMM 'YY");

  return (<Element name="travel-info-sec">
      <div className="sbcw mt8">
        <div className="pfc3 f14 pt15 pl15 pb15 pr15 flex alignCenter">
          <span className="input-24 mr8"><TravelInfoIcon /></span>
          <span className="flexFull f16a fw9">Travel Information</span>
          <a className="f14 fw7 sfc1" href={editTravelInfoPath(tripId)}>Edit</a>
        </div>
        <div className="flex flexWrap sbcw">
          <GTravelInformationDiv>
            <p className="pfc4">Departure City</p>
            <p>{departureCity}</p>
          </GTravelInformationDiv>
          <GTravelInformationDiv>
            <p className="pfc4">Duration</p>
            <p>{`${days} days & ${nights} nights`}</p>
          </GTravelInformationDiv>
          <GTravelInformationDiv>
            <p className="pfc4">Travelers</p>
            <p>{`${adults} adults & ${children} children`}</p>
          </GTravelInformationDiv>
          <GTravelInformationDiv>
            <p className="pfc4">Dates</p>
            <p>{`${formattedStartDate} - ${formattedEndDate}`}</p>
          </GTravelInformationDiv>
        </div>
      </div>
    </Element>
  );
};

TravelInformation.propTypes = {
  tripId: PropTypes.number.isRequired,
  days: PropTypes.number.isRequired,
  nights: PropTypes.number.isRequired,
  departureCity: PropTypes.string.isRequired,
  adults: PropTypes.number.isRequired,
  children: PropTypes.number.isRequired,
  tripStartDate: PropTypes.string.isRequired,
  tripEndDate: PropTypes.string.isRequired
};

TravelInformation.defaultProps = {};

export default TravelInformation;
