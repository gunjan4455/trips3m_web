import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import DestinationAndFilters from './DestinationAndFilters';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  filters: {
    ratings: [
      { value: '1', checked: false },
      { value: '2', checked: false },
      { value: '3', checked: false },
      { value: '4', checked: false },
      { value: '5', checked: false },
    ],
    india: {
      popularDestination: ['Kerala'],
      allDestinations: ['Ahmedabad', 'Alleppey', 'Andaman', 'Vrindavan'],
    },
    international: {
      popularDestination: ['Bali'],
      allDestinations: [
        'Africa',
        'Asia',
        'Australia',
        'Austria',
        'Bali',
        'Belgium',
      ],
    },
  },
  location: { query: {} },
  params: {},
  destinationDetail: {},
  totalRating: 20
};

const shallowWrapperDestinationFilter = props => {
  return shallow(<DestinationAndFilters {...props} />);
};

describe('Testimonials module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperDestinationFilter(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call destinationToggle', () => {
    const wrapper = shallowWrapperDestinationFilter(props);
    expect(wrapper.find('.at_destination').simulate('click'));
  });

  it('should call filterToggle', () => {
    const wrapper = shallowWrapperDestinationFilter(props);
    expect(wrapper.find('.at_filter').simulate('click'));
  });
  
});

