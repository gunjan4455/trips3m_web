import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CompareItinerary from './CompareItinerary';
import { quote1, quote2 } from 'modules/quote/reducers/testData';

configure({ adapter: new Adapter() });

const shallowWrappperCompareItinerary = (props) => {
  return shallow(<CompareItinerary {...props} />);
};

const newFormatTripDays = [
  {
    '0': {
      sectionType: 'itinerary',
      title: '09 November 2019:- Delhi to Dharmshala By Cab'
    }
  },
  {
    '0': {
      sectionType: 'itinerary',
      title: '09 November 2019:- Delhi to Dharmshala By Cab'
    }
  }
];

const DEFAULT_PROPS = {
  quotes: {
    7124216: { ...quote1, newFormatTripDays: newFormatTripDays },
    7124252: { ...quote2, newFormatTripDays: newFormatTripDays }
  },
  trackSegment: jest.fn
};

describe('Compare Module ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperCompareItinerary(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set proper state', () => {
    const wrapper = shallowWrappperCompareItinerary(props);
    wrapper.instance().showAndHideItinerary();
    expect(wrapper.state().showMore).toBe(true);
    expect(wrapper.state().text).toBe('View Less');
  });

  it('should set proper state', () => {
    const wrapper = shallowWrappperCompareItinerary(props);
    wrapper.state().showMore = true;
    wrapper.instance().showAndHideItinerary();
    expect(wrapper.state().showMore).toBe(false);
    expect(wrapper.state().text).toBe('View More');
  });

  it('should not render button when newFormatTripDays length less than 5', () => {
    const wrapper = shallowWrappperCompareItinerary(props);
    expect(wrapper.find('button').exists()).toBeFalsy();
  });

  it('should render button when newFormatTripDays length more than 5', () => {
    props.quotes[7124216].newFormatTripDays.push(...newFormatTripDays);
    props.quotes[7124216].newFormatTripDays.push(...newFormatTripDays);
    const wrapper = shallowWrappperCompareItinerary(props);
    expect(wrapper.find('button').exists()).toBeTruthy();
    wrapper.setState({ showMore: true });
    expect(wrapper.find('.cardViewLess').exists()).toBeTruthy();
  });
});
