import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import QuotesReceived from './QuotesReceived';
import QuoteBox from '../list/components/QuoteBox';

configure({ adapter: new Adapter() });

const MockfetchQuotes = jest.fn();
const MockfetchQuotesConstants = jest.fn();
const MockfetchQuotesComments = jest.fn();
const MockbookNow = jest.fn();
const MockrejectQuote = jest.fn();
const MockreactivateQuote = jest.fn();
const MockfetchDiscountOffers = jest.fn();
const MockpushState = jest.fn();
const MockrequestMoreQuotes = jest.fn();

const DEFAULT_PROPS = {
  currentTripId: '4582265',
  fetchQuotesComments: MockfetchQuotesComments,
  bookNow: MockbookNow,
  rejectQuote: MockrejectQuote,
  reactivateQuote: MockreactivateQuote,
  fetchDiscountOffers: MockfetchDiscountOffers,
  pushState: MockpushState,
  requestMoreQuotes: MockrequestMoreQuotes,
  fetchQuotes: MockfetchQuotes,
  fetchQuotesConstants: MockfetchQuotesConstants,
  quotes: {
    8355980: {
      adults: 2,
      agent: {
        agentsConvertedTrips: 1301,
        companyName: "Agent 128324",
        createdAt: "2015-02-13T10:45:32+05:30",
        description: "TripSailer.Com is now a pioneering Indian travel company, endorsing professional",
        displayName: "Agent 128324",
        displayRating: 3.5,
        email: "UserEmail128324@gmail.com",
        encryptedId: "3132383332342d547261-Travel-Agency-683",
        fullAddress: "Office No.229, 02nd Floor, Plot No.10, Vardhman Bahnhof Plaza,MLU Pocket-7, Sector-12 Dwarka, DWARKA, DELHI, India, 110078",
        id: 128324,
        landlineNumber: "47494404",
        mobileNumber: "09311834343",
        profilePicture:
          "https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_300/https://d2ly56lqom12n0.cloudfront.net/attachments/tr_a_profiles/683/original/Tripsailerlogo.png",

        revenueEarned: 91070000,
        reviewsCount: 1351,
        testimonialUrl: "https://bookings-qa2.ttdev.in/agents/3132383332342d547261-Travel-Agency-683",
        updatedAt: "2019-05-29T16:27:01+05:30",
        ratingStats: {
          fiveStar: 322,
          fiveStarPercentage: 23.83419689119171,
          fourStar: 569,
          fourStarPercentage: 42.11695040710585,
          oneStar: 3,
          oneStarPercentage: 0.22205773501110287,
          positiveRating: 891,
          positiveRatingPercentage: 66,
          ratingText: "Superb Reviews",
          threeStar: 442,
          threeStarPercentage: 32.716506291635824,
          totalPositiveRating: 1351,
          totalRating: 1351,
          twoStar: 15,
          twoStarPercentage: 1.1102886750555145
        }

      },
      cabsText: "All transfers and sightseeing by Swift AC Dezire  Ex. Kathgodam\r\n\r\n\r\n",
      childs: 0,
      days: 4,
      departureCity: "Delhi",
      exclusionsText: "Accomodation : Single\r\nAccomodation : Double\r\nMeal plan : Lunch\r\nUse of gymnasium\r\nEnglish Speaking Driver\r\nTrip suppliments\r\nCab : SIC",
      flightsText: "",
      hotelText: "Night 1,2,  Nainital Aamod Resort, Bhimtal, Executive Room \r\n\r\nNight 3,  Gajraj Trail Resort, Premium Room + 1 Extra Mattress ",
      id: 8355980,
      inclusionsText: "Accomodation : Triple\r\nMeal plan : Breakfast\r\nMeal plan : Dinner\r\nWelcome Drink\r\nWifi Connection\r\nTv with cable connection\r\nUse of Swimming Pool\r\nGovernment Taxes/VAT/ Service Charges\r\nToll Tax\r\nTrans…",
      invoiceShowUrl: "https://bookings-qa2.ttdev.in/invoice/download/219365",
      nights: 3,
      pricingInfo: {
        currency: "Rupee",
        discount: 0,
        flightCost: 0,
        perPersonBudget: 16250,
        perPersonText: "total",
        price: 31500,
        priceInRupee: 31500,
        totalPrice: 31500,
        visaCost: 0
      },
      status: "invoiced",
      statusUpdates: [],
      subAccountId: 2847,
      tripEndDate: "2019-06-17",
      tripStartDate: "2019-06-14",
      updatedAt: "2019-05-29T15:14:27+05:30",
      versionCount: 0
    }
  },
  quotesComments: {},
  userDetails: {},
  layout: {},
  constants: {
    request_more_quotes_options: {
      1: "Quotes are higher than my budget",
      2: "Not satisfied with the hotels",
      3: "Want a different itinerary",
      4: "Wish to customize my existing package",
      5: "Want to travel to some other destination",
      6: "Other reason"
    }
  },
  location: {},
  quoteRejectionReasons: {
    1: "Quotes are higher than my budget",
    2: "Want a different itinerary",
    3: "Wish to customize my existing package",
    4: "Want to travel to some other destination",
    5: "Others",
    6: "Not satisfied with the hotels"
  },
  sortOrder: [8355980]
};

const shallowWrapperQuotesReceived = (props) => {
  return shallow(<QuotesReceived {...props} />);
};

describe('Quote module', () => {
  let props = DEFAULT_PROPS;

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperQuotesReceived(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render QuoteBox component', () => {
    const wrapper = shallowWrapperQuotesReceived(props);
    expect(wrapper.find(QuoteBox)).toHaveLength(1);
  });

  it('should callbackHandler call for book now', () => {
    const wrapper = shallowWrapperQuotesReceived(props);
    wrapper.instance().callbackHandler('BOOK_NOW', {});
    expect(MockbookNow).toHaveBeenCalled();
  });

  it('should callbackHandler call for reject quote', () => {
    const wrapper = shallowWrapperQuotesReceived(props);
    wrapper.instance().callbackHandler('REJECT_QUOTE', {});
    expect(MockrejectQuote).toHaveBeenCalled();
  });

  it('should callbackHandler call for reactivate quote', () => {
    const wrapper = shallowWrapperQuotesReceived(props);
    wrapper.instance().callbackHandler('REACTIVATE_QUOTE', {});
    expect(MockreactivateQuote).toHaveBeenCalled();
  });

  it('should fetchQuotesComments call', () => {
    const wrapper = shallowWrapperQuotesReceived(props);
    wrapper.instance().fetchQuotesComments(props);
    expect(MockfetchQuotesComments).toHaveBeenCalled();
  });

});
