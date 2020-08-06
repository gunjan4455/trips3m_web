import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ItineraryList from './ItineraryList';
import { itineraryInfo } from '../testData';

configure({ adapter: new Adapter() });

const mockTrackSegment = jest.fn();

const DEFAULT_PROPS = {
  tripId: 111111,
  quoteId: 222222,
  itineraryInfo: itineraryInfo,
  tracksegment: mockTrackSegment
};

const shallowWrappperItineraryComponent = props => {
  return shallow(<ItineraryList {...props} />);
};
describe('Itinerary: Render Correctly ', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperItineraryComponent(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show itinerary of one day', () => {
    const wrapper = shallowWrappperItineraryComponent(props);
    expect(wrapper.find('.at_itinerarylist')).toHaveLength(1);
  });

  it('should not render itinerary when sectionType not present in props', () => {
    props.itineraryInfo[0][1].sectionType = 'cab';
    const wrapper = shallowWrappperItineraryComponent(props);
    expect(wrapper.find('.at_itinerarylist')).toHaveLength(0);
  });
});
