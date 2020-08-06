import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import AllTrips from './AllTrips';
import TripCard from './components/TripCard';
import NoTrips from './components/NoTrips';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  trips: {
    loaded: true,
    loading: false,
    allIds: [
      '5282142',
      '5282253',
      '5282255'
    ],
    byId: {
      '5282142': {
        id: 5282142,
        tripDays: 4,
        toLoc: 'Goa',
        firstDestinationName: 'Goa',
        startDate: '2019-12-04',
        quotesCount: 2,
        bookingStatusLabel: 'Incomplete',
        exclusivePreferencesValues: {
          cabs: 'Excluded',
          flights: 'Included',
          hotels: '5 Star'
        },
        budget: '21000..25000',
        fromLoc: 'Gurugram, Haryana, India',
        info: 'thyreyry',
        adult: 2,
        status: 'Cancelled',
        child: 1,
        tripStage: 3,
        currency: null,
        phoneNo: '+919876328752'
      },
      '5282253': {
        id: 5282253,
        tripDays: 3,
        toLoc: 'Goa',
        firstDestinationName: 'Goa',
        startDate: '2019-07-25',
        quotesCount: 0,
        bookingStatusLabel: 'Active',
        exclusivePreferencesValues: {
          cabs: 'Excluded',
          flights: 'Included',
          hotels: '5 Star'
        },
        budget: '17500..20500',
        fromLoc: 'Sarhol, Haryana 122022, India',
        info: 'uhoi',
        adult: 2,
        status: 'Active',
        child: 0,
        tripStage: 3,
        currency: null,
        phoneNo: '+917865876868'
      },
      '5282255': {
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
      }
    }
  },
  location: {},
  reactivateBooking: jest.fn,
  push: jest.fn,
  goBack: jest.fn
};

const shallowWrapperAllTrips = (props) => {
  return shallow(<AllTrips {...props} />);
};

describe('Traveller dashboard module', () => {
  let props = {
    ...DEFAULT_PROPS,
    trips: { ...DEFAULT_PROPS.trips, allIds: [...DEFAULT_PROPS.trips.allIds], byId: { ...DEFAULT_PROPS.trips.byId } }
  };
  afterEach(() => {
    props = {
      ...DEFAULT_PROPS,
      trips: { ...DEFAULT_PROPS.trips, allIds: [...DEFAULT_PROPS.trips.allIds], byId: { ...DEFAULT_PROPS.trips.byId } }
    };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperAllTrips(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('Incomplete Trips tab should have active class', () => {
    const wrapper = shallowWrapperAllTrips(props);
    wrapper.find('.at_incompleteReq').simulate('click');
    expect(wrapper.find('.at_incomplete').hasClass('active')).toEqual(true);
  });

  it('Should render 1 active trip and 2 incomplete trip', () => {
    const wrapper = shallowWrapperAllTrips(props);
    expect(wrapper.find(TripCard)).toHaveLength(1);

    wrapper.find('.at_incompleteReq').simulate('click');
    expect(wrapper.find(TripCard)).toHaveLength(2);
  });

  it('Should render NoTrips card when No trips is there', () => {
    props.trips.allIds = [];
    props.trips.byId = {};

    const wrapper = shallowWrapperAllTrips(props);
    expect(wrapper.find(NoTrips)).toHaveLength(1);
  });

  it('Should render NoTrips card when No active trips is there', () => {
    props.trips.allIds = [
      '5282142',
      '5282255'
    ];

    const wrapper = shallowWrapperAllTrips(props);
    expect(wrapper.find(NoTrips)).toHaveLength(1);

  });
});
