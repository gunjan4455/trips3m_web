import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import QuoteBox from './QuoteBox';
import RejectQuote from '../../ctas/RejectQuote';
import ReactivateQuote from '../../ctas/ReactivateQuote';
import BookNow from "../../ctas/BookNow";

configure({ adapter: new Adapter() });

const MockcallbackHandler = jest.fn();
const MockbookNow = jest.fn();

const DEFAULT_PROPS = {
  tripId: '4582265',
  callbackHandler: MockcallbackHandler,
  bookNow: MockbookNow,
  quote: {
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
    versionCount: 0,
    tripStatus: 'invoiced'
  },
  comments: {},
  userDetails: {},
  quoteRejectionReasons: {
    1: "Quotes are higher than my budget",
    2: "Want a different itinerary",
    3: "Wish to customize my existing package",
    4: "Want to travel to some other destination",
    5: "Others",
    6: "Not satisfied with the hotels"
  },
  trackSegment: jest.fn,
  callbackHandler: MockcallbackHandler,
};

const shallowWrapperQuotesBox = (props) => {
  return shallow(<QuoteBox {...props} />);
};

describe('Quote module', () => {
  let props = DEFAULT_PROPS;

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperQuotesBox(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render chat message when no comments', () => {
    const wrapper = shallowWrapperQuotesBox(props);
    expect(wrapper.find('.at_messagesNew').exists()).toBeFalsy();
  });

  it('should render chat message when comments', () => {
    const wrapper = shallowWrapperQuotesBox({ ...props, comments: { commentsCount: 5}});
    expect(wrapper.find('.at_messagesNew').exists()).toBeTruthy();
    expect(wrapper.find('.at_messagesNew').text().includes('5 chat messages'));
  });

  it('should render proper quote cta with empty quote status', () => {
    const wrapper = shallowWrapperQuotesBox(props);
    wrapper.instance().renderQuoteCta({});
    expect(wrapper.find(RejectQuote).exists()).toBeTruthy();
    expect(wrapper.find(RejectQuote).props().callbackHandler).toEqual(MockcallbackHandler);
  });

  it('should render proper quote cta with quote status as declined', () => {
    props.quote.status = 'declined';
    const wrapper = shallowWrapperQuotesBox(props);
    wrapper.instance().renderQuoteCta({});
    expect(wrapper.find(ReactivateQuote).exists()).toBeTruthy();
    expect(wrapper.find(ReactivateQuote).props().callbackHandler).toEqual(MockcallbackHandler);
  });

  it('should render proper quote cta with quote status as chosen', () => {
    props.quote.status = 'chosen';
    const wrapper = shallowWrapperQuotesBox(props);
    wrapper.instance().renderQuoteCta({});
    expect(wrapper.find(RejectQuote).exists()).toBeTruthy();
    expect(wrapper.find(RejectQuote).props().callbackHandler).toEqual(MockcallbackHandler);
  });

  it('should render proper quote cta with quote status as active', () => {
    props.quote.status = 'active';
    const wrapper = shallowWrapperQuotesBox(props);
    wrapper.instance().renderQuoteCta({});
    expect(wrapper.find(BookNow).exists()).toBeTruthy();
    expect(wrapper.find(BookNow).props().callbackHandler).toEqual(wrapper.instance().openPopup);
  });

  it('should bookNow function call ', () => {
    const wrapper = shallowWrapperQuotesBox(props);
    wrapper.instance().handleBookNow();
    expect(MockcallbackHandler).toHaveBeenCalled();
  });

  it('should call openPopUp function', () => {
    const wrapper = shallowWrapperQuotesBox(props);
    wrapper.instance().openPopup();
    expect(wrapper.state().openModal).toEqual(true);
  });

  it('should call closePopup function', () => {
    const wrapper = shallowWrapperQuotesBox(props);
    wrapper.instance().closePopup();
    expect(wrapper.state().closeModal).toEqual(true);
  });
});
