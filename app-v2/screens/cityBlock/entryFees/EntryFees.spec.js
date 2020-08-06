import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import EntryFees from './EntryFees';

configure({ adapter: new Adapter() });

const props = {
  // canonicals: 'All',
  // handleFilterChange: jest.fn,
  // appliedFilters: { price_ranges: { '0-2000': true } },
  // trackCategoryClicked: jest.fn,
  // trackDestinationListClicked: jest.fn,
  // clearFilters: jest.fn,
  data: {},
  exitIntent: {},
  // cityBlock: {},
  // pageType: 'weekendDestination',
  // weekendDestination: '',
  // noOfPackages: 1
};

const wrapper = shallow(<EntryFees {...props} />);

describe('EntryFees screen test suit', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


