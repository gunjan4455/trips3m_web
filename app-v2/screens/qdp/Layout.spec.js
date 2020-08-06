import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Layout from './Layout';
import Header from 'modules/quote/Header';


configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  layout: {
    meta_info: {
      destination: 'Goa',
      trip_status: 'Active',
      module_name: 'rlp',
      page_message: null,
    },
    name: 'QDP-11-07-2018',
    stage: 'QUOTE_RECIEVED',
    components: [
      {
        id: 1,
        name: 'QuoteAgentCard',
        order: 1,
        row_no: 1,
        block_no: 1,
        variant: 'FULL',
        total_block_in_row: 1,
        title: '',
        heading: '',
        section: 'Agent',
      },
      {
        id: 3,
        name: 'QuoteNavBar',
        order: 3,
        row_no: 3,
        block_no: 1,
        variant: 'FULL',
        total_block_in_row: 1,
        title: '',
        heading: '',
        section: 'Carousel',
      },
      {
        id: 4,
        name: 'ItineraryList',
        order: 4,
        row_no: 4,
        block_no: 1,
        variant: 'FULL',
        total_block_in_row: 1,
        title: '',
        heading: '',
        section: 'Itinerary block',
      },
    ]
  },
  quotes: {
    '4982590': {
      id: 4982590,
      tripStatus: 'Active'
    }
  },
  currentQuoteId: 4982590,
  // params: {},
  // addTimeout: jest.fn,
  // handleScroll: jest.fn
  currentQuote: {},
  tripId: 4161686,
  params: {},
};

const layoutShallowWrapper = props => {
  return shallow(<Layout {...props} />);
};

describe('RLP page', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = layoutShallowWrapper(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render header with default props', () => {
    const wrapper = layoutShallowWrapper(props);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render LoadableComponent with default props', () => {
    const wrapper = layoutShallowWrapper(props);
    expect(wrapper.find('LoadableComponent')).toHaveLength(3);
  });

  it('should render proper LoadableComponent with default props', () => {
    const wrapper = layoutShallowWrapper(props);
    expect(wrapper.find('LoadableComponent').at(1).props().config).toEqual(props.layout.components[1])
  });

});
