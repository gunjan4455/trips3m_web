import Loadable from 'react-loadable';

const getDefault = (module) => module.default;

/**
 * Function to load component with container, action and default action to be executed by a Page
 * @param name
 * @returns {Promise<T | never>}
 */
function loadComponentAsync(name) {
  switch (name) {
    case 'QuoteAgentCard': {
      return import(/*webpackChunkName: 'quote-agent-card'*/'./modules/quote/agentCard').then(getDefault);
    }
    case 'QuotePostTripInfo': {
      return import(/*webpackChunkName: 'quote-post-trip-info'*/'./modules/quote/postTripInfo').then(getDefault);
    }
    case 'QuoteNavBar': {
      return import(/*webpackChunkName: 'quote-nav-bar'*/'./modules/quote/navBar').then(getDefault);
    }
    case 'ItineraryList': {
      return import(/*webpackChunkName: 'quote-itinerary-list'*/'./modules/quote/itinerary/list/index').then(getDefault);
    }
    case 'TravelInfo': {
      return import(/*webpackChunkName: 'quote-travel-information'*/'./modules/quote/travelInformation').then(getDefault);
    }
    case 'Hotel': {
      return import(/*webpackChunkName: 'quote-hotel'*/'./modules/quote/hotel').then(getDefault);
    }
    case 'Cabs': {
      return import(/*webpackChunkName: 'quote-cabs'*/'./modules/quote/cabs').then(getDefault);
    }
    case 'Inclusions': {
      return import(/*webpackChunkName: 'quote-inclusions'*/'./modules/quote/inclusionExclusion/inclusion').then(getDefault);
    }
    case 'Exclusions': {
      return import(/*webpackChunkName: 'quote-exclusions'*/'./modules/quote/inclusionExclusion/exclusion').then(getDefault);
    }
    case 'Flights': {
      return import(/*webpackChunkName: 'quote-flights'*/'./modules/quote/flights').then(getDefault);
    }
    case 'QuoteAdditionalInfo': {
      return import(/*webpackChunkName: 'quote-additional-info'*/'./modules/quote/additionalInfo').then(getDefault);
    }
    case 'TermsConditions': {
      return import(/*webpackChunkName: 'quote-terms-conditions'*/'./modules/quote/termsAndConditions').then(getDefault);
    }
    case 'TravellerChat': {
      return import(/*webpackChunkName: 'traveller-chat'*/'./modules/chat').then(getDefault);
    }
    case 'QuoteItinerary': {
      return import(/*webpackChunkName: 'quote-itinerary'*/'./modules/quote/itinerary/detail').then(getDefault);
    }
    case 'LeadSubmitted': {
      return import(/*webpackChunkName: 'quote-submitted'*/'./modules/rlp/leadSubmittedStage').then(getDefault);
    }
    case 'QuoteList': {
      return import(/*webpackChunkName: 'quote-list'*/'./modules/quote/list').then(getDefault);
    }
    case 'WhyTT': {
      return import(/*webpackChunkName: 'why-travel-triangle'*/'./modules/rlp/whyTT').then(getDefault);
    }
    case 'TripCancelled': {
      return import(/*webpackChunkName: 'cancelled-booking'*/'./modules/rlp/cancelledBookingCard').then(getDefault);
    }
    case 'DestinationBlogs': {
      return import(/*webpackChunkName: 'destination-blogs'*/'./modules/destinationBlog').then(getDefault);
    }
    case 'FlightsBannerAndForm': {
      return import(/*webpackChunkName: 'FlightsBannerAndForm'*/'./modules/flights').then(getDefault);
    }
    case 'ChangesRequested': {
      return import(/*webpackChunkName: 'ChangesRequested'*/ './modules/PostConversion').then(
        getDefault
      );
    }
  }
}

/* Loadable component to be used by dynamic components */
const getComponentContainer = (c) => c.default.container;

const QuoteAgentCard = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-agent-card'*/'./modules/quote/agentCard')
    .then(getComponentContainer),
  loading: () => null
});

const QuotePostTripInfo = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-post-trip-info'*/'./modules/quote/postTripInfo')
    .then(getComponentContainer),
  loading: () => null
});

const QuoteNavBar = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-nav-bar'*/'./modules/quote/navBar')
    .then(getComponentContainer),
  loading: () => null
});

const ItineraryList = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-itinerary-list'*/'./modules/quote/itinerary/list/index')
    .then(getComponentContainer),
  loading: () => null
});

const TravelInfo = Loadable({
  loader: () => import(/*webpackChunkName: 'trip-travel-information'*/'./modules/quote/travelInformation')
    .then(getComponentContainer),
  loading: () => null
});

const Hotel = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-hotel'*/'./modules/quote/hotel')
    .then(getComponentContainer),
  loading: () => null
});

const Cabs = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-cabs'*/'./modules/quote/cabs')
    .then(getComponentContainer),
  loading: () => null
});

const Inclusions = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-inclusions'*/'./modules/quote/inclusionExclusion/inclusion')
    .then(getComponentContainer),
  loading: () => null
});

const Exclusions = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-exclusions'*/'./modules/quote/inclusionExclusion/exclusion')
    .then(getComponentContainer),
  loading: () => null
});

const Flights = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-flights'*/'./modules/quote/flights')
    .then(getComponentContainer),
  loading: () => null
});

const QuoteAdditionalInfo = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-additional-info'*/'./modules/quote/additionalInfo')
    .then(getComponentContainer),
  loading: () => null
});

const TermsConditions = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-terms-conditions'*/'./modules/quote/termsAndConditions')
    .then(getComponentContainer),
  loading: () => null
});

const TravellerChat = Loadable({
  loader: () => import(/*webpackChunkName: 'traveller-chat'*/'./modules/chat')
    .then(getComponentContainer),
  loading: () => null
});

const QuoteItinerary = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-itinerary'*/'./modules/quote/itinerary/detail')
    .then(getComponentContainer),
  loading: () => null
});

const LeadSubmitted = Loadable({
  loader: () => import(/*webpackChunkName: 'rlp-submitted'*/'./modules/rlp/leadSubmittedStage')
    .then(getComponentContainer),
  loading: () => null
});

const QuoteList = Loadable({
  loader: () => import(/*webpackChunkName: 'quote-list'*/'./modules/quote/list')
    .then(getComponentContainer),
  loading: () => null
});

const WhyTT = Loadable({
  loader: () => import(/*webpackChunkName: 'why-travel-triangle'*/'./modules/rlp/whyTT')
    .then(getComponentContainer),
  loading: () => null
});

const TripCancelled = Loadable({
  loader: () => import(/*webpackChunkName: 'cancelled-booking'*/'./modules/rlp/cancelledBookingCard')
    .then(getComponentContainer),
  loading: () => null
});

const DestinationBlogs = Loadable({
  loader: () => import(/*webpackChunkName: 'destination-blogs'*/'./modules/destinationBlog')
    .then(getComponentContainer),
  loading: () => null
});

const FlightsBannerAndForm = Loadable({
  loader: () => import(/*webpackChunkName: 'FlightsBannerAndForm'*/'./modules/flights')
    .then(getDefault),
  loading: () => null
});

const ChangesRequested = Loadable({
  loader: () =>
    import(/*webpackChunkName: 'ChangesRequested'*/ "./modules/PostConversion").then(
      getComponentContainer
    ),
  loading: () => null
});

const MktSection1 = Loadable({
  loader: () => import(/* webpackChunkName: 'mkt-section1' */ './modules/mkt/section1')
    .then(getComponentContainer),
  loading: () => null,
});

const MktSection2 = Loadable({
  loader: () => import(/* webpackChunkName: 'mkt-section2' */ './modules/mkt/section2')
    .then(getComponentContainer),
  loading: () => null,
});

const MktSection3 = Loadable({
  loader: () => import(/* webpackChunkName: 'mkt-section3' */ './modules/mkt/section3')
    .then(getComponentContainer),
  loading: () => null,
});

const MktSection4 = Loadable({
  loader: () => import(/* webpackChunkName: 'mkt-section4' */ './modules/mkt/section4')
    .then(getComponentContainer),
  loading: () => null,
});

const MktTestimonials = Loadable({
  loader: () => import(/* webpackChunkName: 'mkt-testimonials' */ './modules/mkt/testimonials')
    .then(getComponentContainer),
  loading: () => null,
});

const MktAgents = Loadable({
  loader: () => import(/* webpackChunkName: 'mkt-agents' */ './modules/mkt/agents')
    .then(getComponentContainer),
  loading: () => null,
});

const MktMarketplace = Loadable({
  loader: () => import(/* webpackChunkName: 'mkt-marketplace' */ './modules/mkt/marketplace')
    .then(getComponentContainer),
  loading: () => null,
});

const MktHowItWorks = Loadable({
  loader: () => import(/* webpackChunkName: 'mkt-how-it-works' */ './modules/mkt/howItWorks')
    .then(getComponentContainer),
  loading: () => null,
});

const MktFaq = Loadable({
  loader: () => import(/* webpackChunkName: 'mkt-faqs' */ './modules/mkt/faq')
    .then(getComponentContainer),
  loading: () => null,
});

const MktConclusion = Loadable({
  loader: () => import(/* webpackChunkName: 'mkt-conclusion' */ './modules/mkt/conclusion')
    .then(getComponentContainer),
  loading: () => null,
});

const MktFooter = Loadable({
  loader: () => import(/* webpackChunkName: 'mkt-footer' */ './modules/mkt/footer')
    .then(getComponentContainer),
  loading: () => null,
});

export default {
  loadComponentAsync,
  QuoteAgentCard,
  QuotePostTripInfo,
  QuoteNavBar,
  ItineraryList,
  TravelInfo,
  Hotel,
  Cabs,
  Inclusions,
  Exclusions,
  Flights,
  QuoteAdditionalInfo,
  TermsConditions,
  TravellerChat,
  QuoteItinerary,
  LeadSubmitted,
  QuoteList,
  WhyTT,
  TripCancelled,
  DestinationBlogs,
  FlightsBannerAndForm,
  MktSection1,
  MktSection2,
  MktSection3,
  MktSection4,
  MktTestimonials,
  MktAgents,
  MktConclusion,
  MktMarketplace,
  MktHowItWorks,
  MktFaq,
  MktFooter,
  ChangesRequested
};
