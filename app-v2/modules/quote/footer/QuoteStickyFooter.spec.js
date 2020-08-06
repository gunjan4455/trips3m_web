import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import QuoteStickyFooter from './QuoteStickyFooter';

import CancelBooking from 'modules/trip/ctas/CancelBooking';
import ReactivateTrip from 'modules/trip/ctas/ReactivateTrip';
import ReactivateQuote from '../ctas/ReactivateQuote';
import SocialShare from '../ctas/SocialShare';
import SwitchQuote from '../ctas/SwitchQuote';
import PayNow from '../ctas/PayNow';
import BookNow from '../ctas/BookNow';
import ViewInvoiceAndPay from '../ctas/ViewInvoiceAndPay';
import RejectQuote from '../ctas/RejectQuote';

import QUOTE_EVENTS_ENUMS from 'modules/quote/EventTypes';
import TRIP_EVENTS_ENUMS from 'modules/trip/ChildEventsType';

configure({ adapter: new Adapter() });

const BookNowMock = jest.fn();
const RejectQuoteMock = jest.fn();
const ReactivateQuoteMock = jest.fn();
const ReactivateBookingMock = jest.fn();
const CancelBookingMock = jest.fn();

const DEFAULT_PROPS = {
  tripId: 3918699,
  quoteId: 7124217,
  currentQuote: {
    installmentInfo: {
      isAllPaymentReceived: false,
      installmentsReceived: 0,
      nextScheduledDate: null,
    },
    invoiceShowUrl: '',
    opDetails: {
      id: 2251659,
      name: 'Damini Oberoi',
      phoneNo: '18001235555',
      email: 'damini.oberoi@traveltriangle.com',
      image: '/pics/original/missing.png',
      initials: 'D',
    },
  },
  convertedQuote: {
    id: 5,
  },
  quoteStatus: {
    isCancelled: false,
    isConverted: false,
    isInvoiceRequested: false,
    isInvoiced: false,
    isRejected: false,
    isRequestCancelled: false,
  },
  quoteRejectionReasons: {
    '1': 'Quotes are higher than my budget',
    '2': 'Want a different itinerary',
    '3': 'Wish to customize my existing package',
    '4': 'Want to travel to some other destination',
    '5': 'Others',
    '6': 'Not satisfied with the hotels',
  },
  userDetails: {
    first_name: 'Rahul',
    last_name: 'Jain',
  },
  bookNowSuccess: false,
  rejectQuoteSuccess: false,
  reactivateQuoteSuccess: false,
  bookNow: BookNowMock,
  rejectQuote: RejectQuoteMock,
  reactivateQuote: ReactivateQuoteMock,
  reactivateBooking: ReactivateBookingMock,
  cancelBooking: CancelBookingMock,
};

const shallowWrappperQuoteFooterComponent = (props) => {
  return shallow(<QuoteStickyFooter {...props} />);
};

describe('Sticky footer: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS, quoteStatus: { ...DEFAULT_PROPS.quoteStatus } };

  afterEach(() => {
    props = { ...DEFAULT_PROPS, quoteStatus: { ...DEFAULT_PROPS.quoteStatus } };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperQuoteFooterComponent(props);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Sticky footer: Should render correct cta\'s ', () => {
  let props = {
    ...DEFAULT_PROPS,
    quoteStatus: { ...DEFAULT_PROPS.quoteStatus },
    currentQuote: {
      ...DEFAULT_PROPS.currentQuote,
      installmentInfo: { ...DEFAULT_PROPS.currentQuote.installmentInfo }
    }
  };

  afterEach(() => {
    props = {
      ...DEFAULT_PROPS, quoteStatus: { ...DEFAULT_PROPS.quoteStatus },
      currentQuote: {
        ...DEFAULT_PROPS.currentQuote,
        installmentInfo: { ...DEFAULT_PROPS.currentQuote.installmentInfo }
      }
    };
  });

  it("Rejected Quote: should render Share, Reactivate Quote cta for 'Rejected Quote'", () => {
    props.quoteStatus.isRejected = true;
    const wrapper = shallowWrappperQuoteFooterComponent(props);

    expect(wrapper.find(SocialShare)).toHaveLength(1);
    expect(wrapper.find(ReactivateQuote)).toHaveLength(1);
  });

  it("Canceled Booking: should render Share, Reactivate Quote cta for Canceled Booking", () => {
    props.quoteStatus.isRequestCancelled = true;
    const wrapper = shallowWrappperQuoteFooterComponent(props);

    expect(wrapper.find(SocialShare)).toHaveLength(1);
    expect(wrapper.find(ReactivateTrip)).toHaveLength(1);
  });

  it("Quote cancelled: should render Share, Switch Quote for Quote cancelled, as another quote is confirmed", () => {
    props.quoteStatus.isCancelled = true;
    const wrapper = shallowWrappperQuoteFooterComponent(props);

    expect(wrapper.find(SocialShare)).toHaveLength(1);
    expect(wrapper.find(SwitchQuote)).toHaveLength(1);
  });

  it("Quote Converted: should render Share, ViewInvoiceAndPay for all installments paid", () => {
    props.quoteStatus.isConverted = true;
    props.currentQuote.installmentInfo.isAllPaymentReceived = true;
    props.currentQuote.invoiceShowUrl = 'test url';

    const wrapper = shallowWrappperQuoteFooterComponent(props);

    expect(wrapper.find(SocialShare)).toHaveLength(1);
    expect(wrapper.find(ViewInvoiceAndPay)).toHaveLength(1);
  });

  it("Quote Converted: should render Share, Cancel booking and ViewInvoiceAndPay for atlease one installments paid", () => {
    props.quoteStatus.isConverted = true;
    const wrapper = shallowWrappperQuoteFooterComponent(props);

    expect(wrapper.find(SocialShare)).toHaveLength(1);
    expect(wrapper.find(CancelBooking)).toHaveLength(1);
    expect(wrapper.find(ViewInvoiceAndPay)).toHaveLength(1);
  });

  it("Invoice Received: should render Share, Reject Quote and View Invoice and Pay cta", () => {
    props.quoteStatus.isInvoiced = true;
    const wrapper = shallowWrappperQuoteFooterComponent(props);

    expect(wrapper.find(SocialShare)).toHaveLength(1);
    expect(wrapper.find(RejectQuote)).toHaveLength(1);
    expect(wrapper.find(ViewInvoiceAndPay)).toHaveLength(1);
  });

  it("Invoice Requested: should render Share, Reject Quote and Proceed to pay cta for 'Invoice Requested'", () => {
    props.quoteStatus.isInvoiceRequested = true;
    const wrapper = shallowWrappperQuoteFooterComponent(props);

    expect(wrapper.find(SocialShare)).toHaveLength(1);
    expect(wrapper.find(RejectQuote)).toHaveLength(1);
    expect(wrapper.find(PayNow)).toHaveLength(1);
  });

  it("Book Now: should render Share, Book Now cta", () => {
    const wrapper = shallowWrappperQuoteFooterComponent(props);

    expect(wrapper.find(SocialShare)).toHaveLength(1);
    expect(wrapper.find(BookNow)).toHaveLength(1);
  });
});


describe('Sticky footer: callbackHandler ', () => {
  let props = { ...DEFAULT_PROPS, quoteStatus: { ...DEFAULT_PROPS.quoteStatus } };
  const wrapper = shallowWrappperQuoteFooterComponent(props);

  afterEach(() => {
    props = { ...DEFAULT_PROPS, quoteStatus: { ...DEFAULT_PROPS.quoteStatus } };
  });


  it("should call booknow props with correct data", () => {

    wrapper.instance().callbackHandler(QUOTE_EVENTS_ENUMS.BOOK_NOW, {});

    expect(BookNowMock).toHaveBeenCalledWith({
      tripId: 3918699,
      quoteId: 7124217
    });
  });

  it("should call rejectQuote with correct data'", () => {

    wrapper.instance().callbackHandler(QUOTE_EVENTS_ENUMS.REJECT_QUOTE, {});

    expect(BookNowMock).toHaveBeenCalledWith({
      tripId: 3918699,
      quoteId: 7124217
    });
  });

  it("should call reactivateQuote props with correct data'", () => {

    wrapper.instance().callbackHandler(QUOTE_EVENTS_ENUMS.REACTIVATE_QUOTE, {});

    expect(ReactivateQuoteMock).toHaveBeenCalledWith({
      tripId: 3918699,
      quoteId: 7124217
    });
  });

  it("should call reactivateBooking props with correct data'", () => {

    wrapper.instance().callbackHandler(TRIP_EVENTS_ENUMS.REACTIVATE_TRIP, {});

    expect(ReactivateBookingMock).toHaveBeenCalledWith({
      tripId: 3918699,
      quoteId: 7124217
    });
  });

  it("should call cancelBooking props with correct data'", () => {

    wrapper.instance().callbackHandler(TRIP_EVENTS_ENUMS.CANCEL_TRIP, {});

    expect(CancelBookingMock).toHaveBeenCalledWith({
      tripId: 3918699,
      quoteId: 7124217
    });
  });

});
