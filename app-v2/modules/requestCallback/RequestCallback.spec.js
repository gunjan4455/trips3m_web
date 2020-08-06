import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import RequestCallback from './RequestCallback';

configure({ adapter: new Adapter() });

const mockRequestCallback = jest.fn();
const showRosterCallback = jest.fn();
const DEFAULT_PROPS = {
  tripId: 111111,
  quoteId: 222222,
  successMessage: '',
  requestCallbackReasons: {},
  requestCallbackConfirm: mockRequestCallback,
  trackSegment: jest.fn,
  showRoster: showRosterCallback
};

const shallowWrappperRoster = (props) => {
  return shallow(<RequestCallback {...props} />);
};

describe('RequestCallback: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperRoster(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call requestCallbackConfirm with expected data', () => {
    const wrapper = shallowWrappperRoster(props);
    wrapper.instance().handleRequestCallback();
    expect(mockRequestCallback).toBeCalledWith({ tripId: props.tripId, quoteId: props.quoteId });
  });

  it('should call showRoster on popup close', () => {
    const wrapper = shallowWrappperRoster(props);
    wrapper.instance().closePopup();
    expect(mockRequestCallback).toHaveBeenCalled();
  });
});
