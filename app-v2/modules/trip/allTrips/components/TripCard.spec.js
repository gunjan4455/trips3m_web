import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import TripCard from './TripCard';

configure({ adapter: new Adapter() });

const mockReactivateBooking = jest.fn(() => Promise.resolve());
const mockTracksegment = jest.fn();

const DEFAULT_PROPS = {
  tripDetails: {
    id: 5282255,
    tripDays: 3,
    toLoc: 'Goa',
    firstDestinationName: 'Goa',
    startDate: '2019-07-25',
    quotesCount: 0,
    bookingStatusLabel: 'Incomplete',
    exclusivePreferencesValues: {
      cabs: 'Included',
      flights: 'Included',
      hotels: '5 Star'
    },
    budget: '18000..21000',
    fromLoc: 'Gurugram, Haryana, India',
    info: '',
    adult: 3,
    status: 'Dormant',
    child: 0,
    tripStage: 4,
    currency: null,
    phoneNo: '+918765432365'
  },
  reactivateBooking: mockReactivateBooking,
  trackSegment: mockTracksegment
};

const shallowWrapperTripCard = (props) => {
  return shallow(<TripCard {...props} />);
};

describe('TripCard component', () => {
  let props = {
    ...DEFAULT_PROPS,
  };
  afterEach(() => {
    props = {
      ...DEFAULT_PROPS,
    };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperTripCard(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show quotes count', () => {
    props.tripDetails.quotesCount = 3;
    const wrapper = shallowWrapperTripCard(props);
    expect(wrapper.find('.at_quoteReceivedStatus_text').text()).toEqual('3 Quotes Received');
  });

  it('should show Undo Cancel button for cancelled trip', () => {
    props.tripDetails.status = 'Cancelled';
    const wrapper = shallowWrapperTripCard(props);
    expect(wrapper.find('.at_undocancel').text()).toEqual('Undo Cancel');
  });

  it('should call reactivateBooking on Undo Cancel', () => {
    props.tripDetails.status = 'Cancelled';
    const wrapper = shallowWrapperTripCard(props);
    wrapper.find('.at_undocancel').simulate('click');
    expect(mockReactivateBooking).toHaveBeenCalledWith({ tripId: DEFAULT_PROPS.tripDetails.id });
  });
});
