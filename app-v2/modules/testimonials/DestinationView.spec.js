import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import DestinationView, { titleFormatting } from './DestinationView';

configure({ adapter: new Adapter() });


const DestinationToggleMock = jest.fn();

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
  breadcrumbs: [],
  destinationToggle: DestinationToggleMock,
  params: {},
};

const shallowWrapperDestinationView = props => {
  return shallow(<DestinationView {...props} />);
};

describe('Testimonials module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperDestinationView(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call DestinationToggle', () => {
    const wrapper = shallowWrapperDestinationView(props);
    expect(wrapper.find('.at_close').simulate('click'));
  });

  it('should titleFormatting call with all destination ', () => {
    expect(titleFormatting('allDestinations')).toEqual('All');
  });

  it('should titleFormatting call with popular destination', () => {
    expect(titleFormatting('popularDestination')).toEqual('Popular');
  });

  it('should titleFormatting call with title', () => {
    expect(titleFormatting('title')).toEqual('title');
  });

});
