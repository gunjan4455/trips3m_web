import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import QdpAsync from './QdpAsync';
import Layout from './Layout';

configure({ adapter: new Adapter() });

const props = {
  layout: {
    'meta_info': {
      'destination': 'Andaman',
      'trip_status': 'Active'
    },
    'name': 'RLP-IR-11-07-2018',
    'stage': 'INVOICE_RECIEVED',
    'module_name': 'rlp',
    'components': [{
      'id': 1,
      'name': 'educateTraveller',
      'order': 1,
      'row_no': 1,
      'block_no': 1,
      'variant': 'FULL',
      'total_block_in_row': 1
    }, {
      'id': 2,
      'name': 'aboutDestination',
      'order': 2,
      'row_no': 2,
      'block_no': 1,
      'variant': 'FULL',
      'total_block_in_row': 1,
      'lookupParent': true
    }],
    'actions': [],
    'version': 1
  },
  params: {},
  location: { query: {} },
  updateQuoteStats: jest.fn,
  quotes: {
    12345: {
      id: 12345
    }
  },
  currentQuoteId: 12345
};

describe('RLP page', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<QdpAsync {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Layout1', () => {
    expect(wrapper.find(Layout)).toHaveLength(1);
  });
});


