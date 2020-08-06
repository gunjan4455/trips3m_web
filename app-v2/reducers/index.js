import travelerReviews from 'modules/travelerReview/reducer';
import thingsToDo from 'modules/thingsToDo/reducer';
import placesToVisit from 'modules/placesToVisit/reducer';
import banner from 'modules/banner/reducer';
import mapInformation from 'modules/mapInformation/reducer';
import faqs from 'modules/faqs/reducer';
import recentPackages from '../modules/packages/recent/recentPackages';
import howToReach from '../screens/cityBlock/howToReach/reducer';
import bestTimeToVisit from '../screens/cityBlock/bestTimeToVisit/reducer';
import essentialInfo from '../screens/cityBlock/essentialInfo/reducer';
import cityBlock from '../screens/cityBlock/reducer';
import { travellerStories } from 'modules/travellerStory/reducer';
import destinationBlogs from 'modules/destinationBlog/reducer';
import { letsDiscover } from 'modules/letsDiscover/reducer';
import search from '../screens/search/reducer';
import tips from '../screens/cityBlock/tips/reducer';
import timings from '../screens/cityBlock/timings/reducer';
import entryFees from '../screens/cityBlock/entryFees/reducer';
import hlp from '../screens/hlp/reducer';
import hotelDetail from '../screens/hdp/reducer';
import career from '../modules/shared/trialist';
import layout from 'modules/layout/reducer';
import quote from 'modules/quote/reducers/index';
import discountOffers from 'modules/discountEngine/reducer';
import chat from 'modules/chat/reducer';
import notifications from 'modules/notifications/reducer';
import roster from 'modules/roster/reducer';
import requestCallback from 'modules/requestCallback/reducer';
import testimonials from '../screens/testimonials/reducer';
import flights from '../modules/flights/reducer';
import mkt from 'screens/mkt/reducer';
import topNavigation from 'modules/header/reducer';
import destinationByDuration from 'modules/home/destinationByDuration/reducer';
import bookingDetails from 'screens/bookingDetails/reducer';
import postConversion from 'modules/PostConversion/reducer';

export {
  travelerReviews,
  thingsToDo,
  placesToVisit,
  travellerStories,
  destinationBlogs,
  cityBlock,
  search,
  mapInformation,
  faqs,
  recentPackages,
  banner,
  howToReach,
  bestTimeToVisit,
  essentialInfo,
  tips,
  timings,
  entryFees,
  letsDiscover,
  hlp,
  hotelDetail,
  career,
  testimonials,
  layout,
  quote,
  discountOffers,
  chat,
  notifications,
  roster,
  requestCallback,
  flights,
  mkt,
  topNavigation,
  destinationByDuration,
  bookingDetails,
  postConversion
};
