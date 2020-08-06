import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ItineraryCard from './ItineraryCard';
import { itineraryInfo } from '../../testData';

configure({ adapter: new Adapter() });

const mockSegmentEvent = jest.fn();
const DEFAULT_PROPS = {
  item: itineraryInfo[0]["0"],
  day: 2,
  trackSegmentEvent: mockSegmentEvent
};

const shallowWrappperItineraryDetail = props => {
  return shallow(<ItineraryCard {...props} />);
};

describe('Itinerary Details Render Correctly', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('Should match with the previous snapshot', () => {
    const wrapper = shallowWrappperItineraryDetail(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should segment event function called', () => {
    const wrapper = shallowWrappperItineraryDetail(props);
    wrapper.find('.at_readMore').simulate('click');
    expect(mockSegmentEvent).toHaveBeenCalled();
  });

  it('should not render view details', () => {
    const wrapper = shallowWrappperItineraryDetail(props);
    expect(wrapper.find('ModalComponent').exists()).toBeFalsy();
  });

  it('should not render event time in itinerary', () => {
    props.item.eventTime = '';
    const wrapper = shallowWrappperItineraryDetail(props);
    expect(wrapper.find('.at_eventTime').exists()).toBeFalsy();
  });

  it('should not render images in itinerary', () => {
    props.item.imagesUrl = [];
    const wrapper = shallowWrappperItineraryDetail(props);
    expect(wrapper.find('Swiper').exists()).toBeFalsy();
  });

  it('should render view details', () => {
    props.item.otherDetails = 'hello'
    const wrapper = shallowWrappperItineraryDetail(props);
    expect(wrapper.find('ModalComponent').exists()).toBeTruthy();
  });

});
