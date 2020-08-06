import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import RatingApp from './RatingApp';

configure({ adapter: new Adapter() });

const mockTrackSegmentEvent = jest.fn();

const DEFAULT_PROPS = {
  trackSegmentEvent: mockTrackSegmentEvent
};

const shallowWrapperRatingApp = (props) => {
  return shallow(<RatingApp {...props} />);
};

describe('Rating app popup', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperRatingApp(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call trackSegmentEvent function with proper data', () => {
    const wrapper = shallowWrapperRatingApp(props);
    wrapper.find('.rating-button').simulate('click');
    expect(mockTrackSegmentEvent).toHaveBeenCalled();
    expect(mockTrackSegmentEvent).toHaveBeenCalledWith({
      event: 'organism_clicked',
      section: 'App Review Popup',
      cta: 'Rate Now'
    });
  });
});
