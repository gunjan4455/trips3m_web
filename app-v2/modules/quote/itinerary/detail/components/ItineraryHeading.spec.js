import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';

import ItineraryHeading from './ItineraryHeading';
import { itineraryInfo } from '../../testData';

configure({ adapter: new Adapter() });

const mockTrackSegment = jest.fn();
const DEFAULT_PROPS = {
  item: itineraryInfo[0]["2"],
  days: 2,
  trackSegmentEvent: mockTrackSegment
};

const shallowWrappperItineraryHeading = props => {
  return shallow(<ItineraryHeading {...props} />);
};

describe('Itinerary Heading Render Correctly ', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperItineraryHeading(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render itinerary heading', () => {
    const wrapper = shallowWrappperItineraryHeading(props);
    expect(wrapper.find('.at_itineraryHeading').text()).toEqual('Day 2');
  });

  it('should segment event function called', () => {
    const wrapper = shallowWrappperItineraryHeading(props);
    wrapper.find('.itineraryDownArrow').simulate('click');
    expect(mockTrackSegment).toHaveBeenCalled();
  });

  it('should not render event time in itinerary', () => {
    props.item.eventTime = '';
    const wrapper = shallowWrappperItineraryHeading(props);
    expect(wrapper.find('.at_eventTime').exists()).toBeFalsy();
  });
});
