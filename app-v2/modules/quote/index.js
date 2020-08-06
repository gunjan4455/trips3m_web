import React from 'react';

import {
  getQuotesList,
} from 'modules/quote/reducers/quoteList';
import Header from 'modules/quote/Header';
import QuoteDetailHeader from 'modules/quote/QuoteDetailHeader';
import QuoteStickyFooter from 'modules/quote/footer';
import NavBar from "./navBar";
import PostTripInfo from "./postTripInfo";
import AgentCard from 'modules/quote/agentCard';
import Itinerary from 'modules/quote/itinerary/Itinerary';
import TravelInformation from 'modules/quote/travelInformation';
import Hotel from 'modules/quote/hotel';
import HotelOrAirportDetails from 'modules/quote/shared/HotelOrAirportDetails';
import Cabs from 'modules/quote/cabs';
import Inclusion from 'modules/quote/inclusionExclusion/inclusion';
import Exclusion from 'modules/quote/inclusionExclusion/exclusion';
import AdditionalInfo from "modules/quote/additionalInfo";
import PropTypes from "prop-types";
import Notifications from 'modules/quote/shared/Notifications';


const Qdp = ({ currentQuote, quotes, currentQuoteId, tripId }) => {
  const PostTripInfoContainer = PostTripInfo.container;
  const NavBarContainer = NavBar.container;
  const TravelInformationContainer = TravelInformation.container;
  const HotelContainer = Hotel.container;
  const InclusionContainer = Inclusion.container;
  const ExclusionContainer = Exclusion.container;
  const AgentCardContainer = AgentCard.container;
  const AdditionalInfoContainer = AdditionalInfo.container;
  const CabsContainer = Cabs.container;
  const QuoteStickyFooterContainer = QuoteStickyFooter.container;

  return (
    <div className="pb48">
      <Header tripId={tripId} />
      <QuoteDetailHeader quotesList={getQuotesList(quotes)} currentQuoteId={currentQuoteId} tripId={tripId}
                         currentQuote={currentQuote} />
      {/*<Notifications />*/}
      <AgentCardContainer />

      <div className="mb8"><PostTripInfoContainer /></div>
      <NavBarContainer />
      <Itinerary />
      <div className="mb8"><TravelInformationContainer /></div>
      <HotelContainer />
      <CabsContainer />
      <InclusionContainer />
      <ExclusionContainer />

      <AdditionalInfoContainer />
      <QuoteStickyFooterContainer />
    </div>
  );
};

Qdp.propTypes = {
  currentQuote: PropTypes.object.isRequired,
  quotes: PropTypes.object.isRequired,
  currentQuoteId: PropTypes.number.isRequired,
  tripId: PropTypes.number.isRequired,
  trackSegment: PropTypes.func.isRequired
};

Qdp.defaultProps = {};


export default Qdp;
