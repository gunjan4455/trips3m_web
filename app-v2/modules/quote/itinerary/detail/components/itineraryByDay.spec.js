import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ItineraryByDay from './ItineraryByDay';
import ItineraryHeading from './ItineraryHeading';
import { itineraryInfo } from '../../testData';

configure({ adapter: new Adapter() });
const DEFAULT_PROPS = {
  detail: itineraryInfo[0],
  day: 2,
  defaultOpen: false
};

const shallowWrappperItinerary = props => {
  return shallow(<ItineraryByDay {...props} />);
};

describe('Itinerary For Particular Day Render Correctly ', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('Should match with the previous snapshot', () => {
    const wrapper = shallowWrappperItinerary(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should default checked true for only day 1', () => {
    const wrapper = shallowWrappperItinerary(props);
    expect(wrapper.find('.itineraryday_checkbox').props().defaultChecked).toEqual(false);
  });

  it('Should default checked true for only day 1', () => {
    props.defaultOpen = true;
    const wrapper = shallowWrappperItinerary(props);
    expect(wrapper.find('.itineraryday_checkbox').props().defaultChecked).toEqual(true);
  });

  it('Should check proper itinerary details', () => {
    const wrapper = shallowWrappperItinerary(props);
    expect(wrapper.find(ItineraryHeading)).toHaveLength(1);
  });
});
