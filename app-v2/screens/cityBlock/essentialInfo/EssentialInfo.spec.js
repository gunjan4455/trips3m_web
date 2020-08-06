import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import EssentialInfo from './EssentialInfo';

configure({ adapter: new Adapter() });

const props = {
  canonicals: 'All',
  handleFilterChange: jest.fn,
  appliedFilters: { price_ranges: { '0-2000': true } },
  trackCategoryClicked: jest.fn,
  trackDestinationListClicked: jest.fn,
  clearFilters: jest.fn,
  location: {},
  cityBlock: {},
  pageType: 'weekendDestination',
  weekendDestination: '',
  noOfPackages: 1,
  data: {},

};

const wrapper = shallow(<EssentialInfo {...props} />);

describe('EssentialInfo screen test suit', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


