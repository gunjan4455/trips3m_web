import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ItineraryDetail from './ItineraryDetail';
import ItineraryByDay from './components/ItineraryByDay';
import { itineraryInfo } from '../testData';

configure({ adapter: new Adapter() });

const mockTrackSegment = jest.fn();

const DEFAULT_PROPS = {
  tripId: 111111,
  quoteId: 222222,
  location: { query: { day: 2 } },
  itineraryInfo: itineraryInfo,
  tracksegment: mockTrackSegment
};

const shallowWrappperItineraryComponent = props => {
  return shallow(<ItineraryDetail {...props} />);
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
    expect(wrapper.find(ItineraryByDay)).toHaveLength(1);
  });
});
