import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Layout from './Layout';
import Header from 'modules/rlp/header';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  params: {
    requestedTripId: '4982978'
  },
  trips: {
    loaded: true,
    loading: false,
    allIds: [
      '4809460',
      '4982568',
      '4982590',
      '4982978'
    ],
    byId: {
      '4809460': {
        id: 4809460,
        tripDays: 5,
        toLoc: 'Sri Lanka',
        firstDestinationName: 'Sri Lanka',
        startDate: '2019-07-04',
        quotesCount: 3,
        bookingStatusLabel: 'Incomplete',
        exclusivePreferencesValues: {
          cabs: 'Included',
          flights: 'Included',
          hotels: '4 Star'
        },
        budget: '38000..41000',
        fromLoc: 'Chennai, Tamil Nadu, India',
        info: '',
        adult: 2,
        status: 'Cancelled',
        child: 0,
        tripStage: 3,
        currency: 'Rupee',
        phoneNo: '+919480946000'
      },
      '4982568': {
        id: 4982568,
        tripDays: 9,
        toLoc: 'Singapore',
        firstDestinationName: 'Singapore',
        startDate: '2019-08-11',
        quotesCount: 0,
        bookingStatusLabel: 'Incomplete',
        exclusivePreferencesValues: {
          cabs: 'Included',
          flights: 'Included',
          hotels: '3 Star, 2 Star'
        },
        budget: null,
        fromLoc: 'Chennai, Tamil Nadu, India',
        info: '',
        adult: 2,
        status: 'Dormant',
        child: 0,
        tripStage: 2,
        currency: null,
        phoneNo: '+919498256800'
      },
      '4982590': {
        id: 4982590,
        tripDays: 7,
        toLoc: 'Singapore',
        firstDestinationName: 'Singapore',
        startDate: '2019-08-19',
        quotesCount: 0,
        bookingStatusLabel: 'Incomplete',
        exclusivePreferencesValues: {
          cabs: 'Included',
          flights: 'Excluded',
          hotels: '3 Star'
        },
        budget: '33500..33500',
        fromLoc: 'Chennai',
        info: '',
        adult: 4,
        status: 'Dormant',
        child: 0,
        tripStage: 3,
        currency: 'Rupee',
        phoneNo: '+919498259000'
      },
      '4982978': {
        id: 4982978,
        tripDays: 7,
        toLoc: 'Singapore',
        firstDestinationName: 'Singapore',
        startDate: '2019-08-19',
        quotesCount: 3,
        bookingStatusLabel: 'Active',
        exclusivePreferencesValues: {
          cabs: 'Included',
          flights: 'Excluded',
          hotels: '3 Star'
        },
        budget: '33500..33500',
        fromLoc: 'Chennai',
        info: '',
        adult: 4,
        status: 'Active',
        child: 0,
        tripStage: 3,
        currency: 'Rupee',
        phoneNo: '+919498297800'
      }
    }
  },
  currentTripId: 4982978,
  layout: {
    meta_info: {
      destination: 'Nainital',
      trip_status: 'Active',
      module_name: 'qdp',
      page_message: null
    },
    name: 'RLP',
    stage: 'QUOTE_RECIEVED',
    components: [
      {
        id: 1,
        name: 'QuoteList',
        order: 1,
        row_no: 1,
        block_no: 1,
        variant: 'FULL',
        total_block_in_row: 1,
        title: '',
        heading: ''
      },
      {
        id: 2,
        name: 'WhyTT',
        order: 2,
        row_no: 2,
        block_no: 1,
        variant: 'FULL',
        total_block_in_row: 1,
        title: '',
        heading: ''
      },
      {
        id: 3,
        name: 'LeadSubmitted',
        order: 3,
        row_no: 3,
        block_no: 1,
        variant: 'FULL',
        total_block_in_row: 1,
        title: '',
        heading: ''
      }
    ],
    actions: [],
    version: 1
  }
};

const ShallowWrapperLayout = props => {
  return shallow(<Layout {...props} />);
};

describe('RLP page', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = ShallowWrapperLayout(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Header', () => {
    const wrapper = ShallowWrapperLayout(props);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render lodable component', () => {
    const wrapper = ShallowWrapperLayout(props);
    expect(wrapper.find('LoadableComponent')).toHaveLength(props.layout.components.length);
  });

  it('should render proper LoadableComponent with default props', () => {
    const wrapper = ShallowWrapperLayout(props);
    expect(wrapper.find('LoadableComponent').at(1).props().config).toEqual(props.layout.components[1])
  });


});
