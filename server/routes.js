/* eslint-disable */
import React from 'react';
import {BrowserRouter as Router,
  Route, Redirect } from 'react-router-dom';

import { load as loadUserDetails } from 'app/actions/auth';
import {
  isLoaded as isAuthLoaded,
  isLoggedIn as isAuthenticated,
} from 'app/reducers/auth';
import config from 'appConfig';
import NotFound from 'app/components/Generic/NotFound';
import {
  App,
  Listing,
  PackageDetails,
  DestinationListing,
  LoginForms,
  RequestCallBack,
  FormOneLead,
  FormTwoLead,
  DestinationDetail,
  ForgotPassword,
  ComparePackagesMain,
} from 'app/containers/index';

import {
  CityBlock,
  Overview,
  BestTimeToVisit,
  ThingsToDo,
  HowToReach,
  PlacesToVisit,
  EssentialInfo,
  Tips,
  Timings,
  EntryFees,
  HowToReachFrom,
  HotelListing,
  HotelDetail,
  HotelSelectRoom,
  HotelReviewBooking,
  HotelGuestDetails,
  BookingDetails,
  HotelSoldOut,
  Search,
  AboutUs,
  Team,
  TnC,
  Privacy,
  Cancellation,
  ContactUs,
  Career,
  Qdp,
  Itinerary,
  QdpWebView,
  WebView,
  Rlp,
  Preferences,
  AllTrips,
  Testimonials,
  CompareQuotes,
  PostBookingFeedback,
  PostTripFeedback,
  Mkt,
  Nlp,
  HomeV2,
  PackageTnC
} from 'app-v2/screens';

import WvChatBot from '../app/components/WvChatBot';
import Loadable from "react-loadable";

Loadable({
  loader: () => import(/* webpackChunkName: 'amp-routes' */ '../amp/routes.js'),
  loading: () => null,
});

/* eslint-disable react/display-name */
// export default (store) => {
  const denyOnLogin = (matchProps) => {
    const { isAuthenticated, history: { replace } } = matchProps;
    if (isAuthenticated) {
      replace('/');
      return false;
    }
    return true;
  };

  const checkAuthenticated = (matchProps) => {
    const { isAuthenticated, history: { replace } } = matchProps;
    if (!isAuthenticated) {
      replace('/users/sign_in');
      return false;
    }
    return true;
  };
  //
// /
//
//   return (




      {/*  <Route path="/(:destination)-tourism" component={CityBlock} chatBot>*/}
      {/*    <IndexRoute component={Overview} tab="overview" chatBot />*/}
      {/*    <Route path="places-to-visit">*/}
      {/*      <IndexRoute component={PlacesToVisit} tab="places_to_visit" />*/}
      {/*      <Route path="(:scheme)" chatBot>*/}
      {/*        <IndexRoute component={Overview} tab="overview" schemeType="PlacesToSee" chatBot />*/}
      {/*        <Route path="timings" component={Timings} tab="timings" schemeType="PlacesToSee" chatBot />*/}
      {/*        <Route path="tips" component={Tips} tab="tips" schemeType="PlacesToSee" chatBot />*/}
      {/*        <Route path="entry-fees" component={EntryFees} tab="entry_fees" schemeType="PlacesToSee" chatBot />*/}
      {/*        <Route path="how-to-reach" component={HowToReach} tab="how_to_reach" schemeType="PlacesToSee" chatBot />*/}
      {/*      </Route>*/}
      {/*    </Route>*/}
      {/*    <Route path="things-to-do">*/}
      {/*      <IndexRoute component={ThingsToDo} tab="things_to_do" />*/}
      {/*      <Route path="(:scheme)">*/}
      {/*        <IndexRoute component={Overview} tab="overview" schemeType="ThingsToDo" chatBot />*/}
      {/*        <Route path="timings" component={Timings} tab="timings" schemeType="ThingsToDo" chatBot />*/}
      {/*        <Route path="tips" component={Tips} tab="tips" schemeType="ThingsToDo" chatBot />*/}
      {/*        <Route path="entry-fees" component={EntryFees} tab="entry_fees" schemeType="ThingsToDo" chatBot />*/}
      {/*        <Route path="how-to-reach" component={HowToReach} tab="how_to_reach" schemeType="ThingsToDo" chatBot />*/}
      {/*      </Route>*/}
      {/*    </Route>*/}
      {/*    <Route path="essential-info" component={EssentialInfo} tab="essential_info" chatBot />*/}
      {/*    <Route path="how-to-reach" component={HowToReach} tab="how_to_reach" chatBot />*/}
      {/*    <Route path="best-time-to-visit" component={BestTimeToVisit} tab="best_time_to_visit" chatBot />*/}

      {/*    <Route path="how-to-reach-from-(:from)" component={HowToReachFrom} tab="how_to_reach" chatBot />*/}

      {/*    <Route path="experience/:category" schemeType="ActivityType" experience={true} component={(props) => {*/}
      {/*      if(props.location.query.t && props.location.query.t === 'ptv') {*/}
      {/*        return <PlacesToVisit/>;*/}
      {/*      }*/}
      {/*      else*/}
      {/*        return <ThingsToDo />;*/}
      {/*    }} />*/}

      {/*    <Route path="(:city)">*/}
      {/*      <IndexRoute component={Overview} tab="overview" chatBot />*/}
      {/*      <Route path="places-to-visit">*/}
      {/*        <IndexRoute component={PlacesToVisit} tab="places_to_visit" />*/}
      {/*        <Route path="(:scheme)">*/}
      {/*          <IndexRoute component={Overview} tab="overview" schemeType="PlacesToSee" />*/}
      {/*          <Route path="timings" component={Timings} tab="timings" schemeType="PlacesToSee" />*/}
      {/*          <Route path="tips" component={Tips} tab="tips" schemeType="PlacesToSee" />*/}
      {/*          <Route path="entry-fees" component={EntryFees} tab="entry_fees" schemeType="PlacesToSee" />*/}
      {/*          <Route path="how-to-reach" component={HowToReach} tab="how_to_reach" schemeType="PlacesToSee" />*/}
      {/*        </Route>*/}
      {/*      </Route>*/}
      {/*      <Route path="things-to-do">*/}
      {/*        <IndexRoute component={ThingsToDo} tab="things_to_do" />*/}
      {/*        <Route path="(:scheme)">*/}
      {/*          <IndexRoute component={Overview} tab="overview" schemeType="ThingsToDo" />*/}
      {/*          <Route path="timings" component={Timings} tab="timings" schemeType="ThingsToDo" />*/}
      {/*          <Route path="tips" component={Tips} tab="tips" schemeType="ThingsToDo" />*/}
      {/*          <Route path="entry-fees" component={EntryFees} tab="entry_fees" schemeType="ThingsToDo" />*/}
      {/*          <Route path="how-to-reach" component={HowToReach} tab="how_to_reach" schemeType="ThingsToDo" />*/}
      {/*        </Route>*/}
      {/*      </Route>*/}
      {/*      <Route path="essential-info" component={EssentialInfo} tab="essential_info" chatBot />*/}
      {/*      <Route path="how-to-reach" component={HowToReach} tab="how_to_reach" chatBot />*/}
      {/*      <Route path="best-time-to-visit" component={BestTimeToVisit} tab="best_time_to_visit" chatBot />*/}
      {/*      <Route path="how-to-reach-from-(:from)" component={HowToReachFrom} tab="how_to_reach" chatBot />*/}

      {/*      <Route path="experience/:category" experience={true} schemeType="ActivityType"  component={(props) => {*/}
      {/*        if(props.location.query.t && props.location.query.t === 'ptv') {*/}
      {/*          return <PlacesToVisit/>;*/}
      {/*        }*/}
      {/*        else*/}
      {/*          return <ThingsToDo/>;*/}
      {/*      }} chatBot />*/}
      {/*    </Route>*/}
      {/*    <Redirect from='*' to='/(:destination)-tourism' chatBot />*/}
      {/*  </Route>*/}

      {/*<Route path="/hotels" component={HotelListing} hotelType="hotels" chatBot />*/}
      {/*<Route path="hotel/:hotelId/select-room" component={HotelSelectRoom} noChatBotPopup />*/}
      {/*<Route path="hotel/:hotelId/review-booking" component={HotelReviewBooking} noChatBotPopup />*/}
      {/*<Route path="hotel/:hotelId/guest-details" component={HotelGuestDetails} noChatBotPopup />*/}
      {/*<Route path="payments/response" component={BookingDetails} noChatBotPopup />*/}


      {/*  <Route onEnter={hitTheServer}>*/}
      {/*    <Redirect from="*" to={config.errorPage} />*/}
      {/*  </Route>*/}
      {/*</Route>*/}
//   );
// };

const routes = [
  {
    path: '/',
    component: App,
    default: true,
    routes: [
      {
        path: '/tour-packages/:destination?',
        category: 'tour',
        packageType: 'seo',
        component: Listing,
        chatbot: true,
        exact: true
      },
      {
        path: '/:listingType-tour-packages/:destination?',
        category: 'tour',
        packageType: 'seo',
        component: Listing,
        chatbot: true,
        exact: true
      },
      {
        path: '/honeymoon-packages/:destination?',
        category: 'honeymoon',
        packageType: 'seo',
        component: Listing,
        chatbot: true,
        exact: true
      },
      {
        path: '/:listingType-honeymoon-packages/:destination?',
        category: 'honeymoon',
        packageType: 'seo',
        component: Listing,
        chatbot: true,
        exact: true
      },
      {
        path: '/family-packages/:destination?',
        category: 'family',
        packageType: 'seo',
        component: Listing,
        chatbot: true,
        exact: true
      },
      {
        path: '/:listingType-family-packages/:destination?',
        category: 'family',
        packageType: 'seo',
        component: Listing,
        chatbot: true,
        exact: true
      },
      {
        path: '/friends-packages/:destination?',
        category: 'friends',
        packageType: 'seo',
        component: Listing,
        chatbot: true,
        exact: true
      },
      {
        path: '/:listingType-friends-packages/:destination?',
        category: 'friends',
        packageType: 'seo',
        component: Listing,
        chatbot: true,
        exact: true
      },
      {
        path: '/seasonal-packages/:destination?',
        category: 'seasonal',
        packageType: 'seasonal',
        displayCategory: 'Seasonal',
        component: Listing,
        chatbot: true,
        exact: true
      },
      {
        path: '/comparepackages',
        component: ComparePackagesMain,
        chatbot: true,
        exact: true
      },
      {
        path: '/search_results',
        component: Search,
        exact: true
      },
      {
        path: '/packages/:packageName',
        component: PackageDetails,
        chatbot: true,
        exact: true
      },
      {
        path: '/places-near/:destination',
        component: DestinationListing,
        pageType: 'weekend',
        chatbot: true,
        exact: true
      },
      {
        path: '*-places',
        component: DestinationListing,
        pageType: 'category',
        chatbot: true,
        exact: true
      },
      {
        path: '*-Places',
        component: DestinationListing,
        pageType: 'category',
        chatbot: true,
        exact: true
      },
      {
        path: '/travel-to/:destination',
        component: DestinationDetail,
        chatbot: true,
        exact: true
      },
      {
        path: '/requested_trips/new',
        component: FormOneLead,
        exact: true
      },
      {
        path: '/requested_trips/:tripId/customize_new',
        component: FormTwoLead,
        exact: true
      },
      {
        path: '/requested_trips/:uniqueKey/nurture/:secretKey',
        component: Nlp,
        exact: true
      },
      {
        path: '/requested_trips/:requestedTripId/postbooking_trip_feedbacks/new',
        component: PostBookingFeedback,
        exact: true,
        decisionFunction: checkAuthenticated
      },
      {
        path: '/requested_trips/:requestedTripId/trip_feedbacks/new',
        component: PostTripFeedback,
        exact: true,
        decisionFunction: checkAuthenticated
      },
      {
        path: '/requested_trips/:requestedTripId/quotes/:quoteid/webview',
        component: QdpWebView,
        topBarOnly: true,
        exact: true,
        decisionFunction: checkAuthenticated
      },
      {
        path: '/requested_trips/:requestedTripId/edit',
        component: Preferences,
        exact: true,
        decisionFunction: checkAuthenticated
      },
      {
        path: '/requested_trips/:requestedTripId/quotes/:quoteid/itinerary',
        component: Itinerary,
        topBarOnly: true,
        exact: true,
        decisionFunction: checkAuthenticated
      },
      {
        path: '/requested_trips/:requestedTripId/quotes/:quoteid',
        component: Qdp,
        topBarOnly: true,
        exact: true,
        decisionFunction: checkAuthenticated
      },
      {
        path: '/travellers/dashboard',
        component: AllTrips,
        topBarOnly: true,
        exact: true,
        decisionFunction: checkAuthenticated
      },
      {
        path: '/requested_trips/:requestedTripId/compare',
        component: CompareQuotes,
        topBarOnly: true,
        exact: true,
        decisionFunction: checkAuthenticated
      },
      {
        path: '/requested_trips/:requestedTripId',
        component: Rlp,
        exact: true,
        decisionFunction: checkAuthenticated
      },
      {
        path: '/hotel/sold-out',
        component: HotelSoldOut,
        chatbot: true,
        exact: true
      },
      {
        path: '/payments/response',
        component: BookingDetails,
        exact: true
      },
      {
        path: '/hotel/:hotelName/guest-details',
        component: HotelGuestDetails,
        exact: true
      },
      {
        path: '/hotel/:hotelName/review-booking',
        component: HotelReviewBooking,
        exact: true
      },
      {
        path: '/hotel/:hotelName/select-room',
        component: HotelSelectRoom,
        exact: true
      },
      {
        path: '/hotel/:hotelName',
        component: HotelDetail,
        chatbot: true,
        exact: true
      },
      {
        path: [
          '/hotels/:destination/near-:landmark?',
          '/:filterType-hotels/:destination/near-:landmark?',
          '/hotels/:destination/',
          '/:filterType-hotels/:destination'
        ],
        component: HotelListing,
        chatbot: true,
        hotelType: 'hotels',
        exact: true
      },
      {
        path: [
          '/guest-houses/:destination/near-:landmark?',
          '/:filterType-guest-houses/:destination/near-:landmark?',
          '/guest-houses/:destination/',
          '/:filterType-guest-houses/:destination'
        ],
        component: HotelListing,
        chatbot: true,
        hotelType: 'guest-houses',
        exact: true
      },
      {
        path: [
          '/hotels-and-resorts/:destination/near-:landmark?',
          '/:filterType-hotels-and-resorts/:destination/near-:landmark?',
          '/hotels-and-resorts/:destination/',
          '/:filterType-hotels-and-resorts/:destination'
        ],
        component: HotelListing,
        chatbot: true,
        hotelType: 'hotels-and-resorts',
        exact: true
      },
      {
        path: [
          '/home-stays/:destination/near-:landmark?',
          '/:filterType-home-stays/:destination/near-:landmark?',
          '/home-stays/:destination/',
          '/:filterType-home-stays/:destination'
        ],
        component: HotelListing,
        chatbot: true,
        hotelType: 'home-stays',
        exact: true
      },
      {
        path: [
          '/resorts/:destination/near-:landmark?',
          '/:filterType-resorts/:destination/near-:landmark?',
          '/resorts/:destination/',
          '/:filterType-resorts/:destination'
        ],
        component: HotelListing,
        chatbot: true,
        hotelType: 'resorts',
        exact: true
      },
      {
        path: [
          '/apartments/:destination/near-:landmark?',
          '/:filterType-apartments/:destination/near-:landmark?',
          '/apartments/:destination/',
          '/:filterType-apartments/:destination'
        ],
        component: HotelListing,
        chatbot: true,
        hotelType: 'apartments',
        exact: true
      },
      {
        path: [
          '/hostels/:destination/near-:landmark?',
          '/:filterType-hostels/:destination/near-:landmark?',
          '/hostels/:destination/',
          '/:filterType-hostels/:destination'
        ],
        component: HotelListing,
        chatbot: true,
        hotelType: 'hostels',
        exact: true
      },
      {
        path: [
          '/villas/:destination/near-:landmark?',
          '/:filterType-villas/:destination/near-:landmark?',
          '/villas/:destination/',
          '/:filterType-villas/:destination'
        ],
        component: HotelListing,
        chatbot: true,
        hotelType: 'villas',
        exact: true
      },
      {
        path: [
          '/cottages/:destination/near-:landmark?',
          '/:filterType-cottages/:destination/near-:landmark?',
          '/cottages/:destination/',
          '/:filterType-cottages/:destination'
        ],
        component: HotelListing,
        chatbot: true,
        hotelType: 'cottages',
        exact: true
      },
      {
        path: [
          '/:destination-tourism/:city?/places-to-visit/:scheme/:tab',
          '/:destination-tourism/:city?/places-to-visit/:scheme',
          '/:destination-tourism/:city?/places-to-visit'
        ],
        component: CityBlock,
        chatbot: true,
        schemeType: 'PlacesToSee',
        exact: true,
        indexTab: 'places_to_visit'
      },
      {
        path: [
          '/:destination-tourism/:city?/things-to-do/:scheme/:tab',
          '/:destination-tourism/:city?/things-to-do/:scheme',
          '/:destination-tourism/:city?/things-to-do'
        ],
        component: CityBlock,
        chatbot: true,
        schemeType: 'ThingsToDo',
        indexTab: 'things_to_do',
        exact: true
      },
      {
        path: '/:destination-tourism/:city?/experience/:category',
        component: CityBlock,
        chatbot: true,
        experience: true,
        schemeType: 'ActivityType',
        exact: true
      },
      {
        path: [
          '/:destination-tourism/:city?/how-to-reach-from-:from',
          '/:destination-tourism/:city/:tab',
        ],
        component: CityBlock,
        chatbot: true,
        exact: true
      },
      {
        path: '/:destination-tourism/how-to-reach',
        component: CityBlock,
        chatbot: true,
        indexTab: 'how-to-reach',
        exact: true
      },
      {
        path: '/:destination-tourism/essential-info',
        component: CityBlock,
        chatbot: true,
        indexTab: 'essential-info',
        exact: true
      },
      {
        path: '/:destination-tourism/best-time-to-visit',
        component: CityBlock,
        chatbot: true,
        indexTab: 'best-time-to-visit',
        exact: true
      },
      {
        path: ['/:destination-tourism', '/:destination-tourism/:city'],
        component: CityBlock,
        chatbot: true,
        indexTab: 'overview',
        exact: true,
      },
      {
        path: '/hotels',
        component: HotelListing,
        chatbot: true,
        hotelType: 'hotels',
        exact: true
      },
      {
        path: '/users/password/new',
        component: ForgotPassword,
        exact: true
      },
      {
        path: '/aboutus',
        component: AboutUs,
        exact: true
      },
      {
        path: '/team',
        component: Team,
        exact: true
      },
      {
        path: ['/tnc', '/webview/tnc'],
        component: TnC,
        exact: true
      },
      {
        path: '/privacy',
        component: Privacy,
        exact: true
      },
      {
        path: '/cancellation',
        component: Cancellation,
        exact: true
      },
      {
        path: '/career/:id?',
        component: Career,
        exact: true
      },
      {
        path: '/testimonials/:destination?',
        component: Testimonials,
        exact: true
      },
      {
        path: ['/contact_us', '/webview/contact_us'],
        component: ContactUs,
        exact: true
      },
      {
        path: '/mkt/:page',
        component: Mkt,
        chatbot: true,
        exact: true
      },
      {
        path: '/requestcallback',
        component: RequestCallBack,
        exact: true
      },
      {
        path: ['/wvchatbot', '/webview/chatbot'],
        component: WvChatBot,
        exact: true,
        defferChatbot: true
      },
      {
        path: '/auth-webview',
        component: WebView,
        topBarOnly: true
      },
      {
        path: '/webview',
        component: WebView,
        topBarOnly: true
      },
      {
        path: '/users/sign_in',
        component: LoginForms,
        type: 'login',
        exact: true,
        decisionFunction: denyOnLogin
      },
      {
        path: '/users/sign_up',
        component: LoginForms,
        type: 'signUp',
        exact: true,
        decisionFunction: denyOnLogin
      },
      {
        path: '/packages_tnc',
        component: PackageTnC,
        exact: true
      },
      {
        path: '/page-not-found',
        component: NotFound
      },
      {
        path: '/',
        exact: true,
        component: HomeV2,
        chatbot: true
      },
    ]
  }
];


export default routes;
