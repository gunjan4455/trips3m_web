import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';

import ItinerarySlider from './ItinerarySlider';
import { itineraryInfo } from '../../testData';

configure({ adapter: new Adapter() });

const mockTrackSegment = jest.fn();
const DEFAULT_PROPS = {
  images: [{ url: 'https://img.traveltriangle.com/stage/attachments/pictures/840055/original/564c92d22e2dbo.jpg?tr=w-316,h-140' },
    { url: 'https://img.traveltriangle.com/stage/attachments/pictures/840055/original/564c92d22e2dbo.jpg?tr=w-316,h-140' }],
  imgSrc: 'https://img.traveltriangle.com/stage/attachments/pictures/840055/original/564c92d22e2dbo.jpg?tr=w-316,h-140'
};

const shallowWrappperItinerarySlider = props => {
  return shallow(<ItinerarySlider {...props} />);
};

describe('Itinerary Slider Render Correctly ', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperItinerarySlider(props);
    expect(wrapper).toMatchSnapshot();
  });

});
