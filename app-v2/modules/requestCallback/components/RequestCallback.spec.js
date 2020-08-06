import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import RequestCallbackPopup from './RequestCallback';

configure({ adapter: new Adapter() });

const mockRequestCallbackConfirm = jest.fn();
const DEFAULT_PROPS = {
  tripId: 3918699,
  quoteId: 7124216,
  requestCallbackReasons: {
    request_cta_1: 'I need some changes in the quote',
    request_cta_2: 'I like this quote, need to finalize the price',
    request_cta_3: 'Help me to compare with other destination',
    request_cta_4: 'Other'
  },
  requestCallbackConfirm: mockRequestCallbackConfirm,
  closeModal: jest.fn
};

const shallowWrapperRequestCallbackPopup = (props) => {
  return shallow(<RequestCallbackPopup {...props} />);
};

describe('RequestCallBackPopup: Render Correctly', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrapperRequestCallbackPopup(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call requestCallbackConfirm on Submit', () => {
    const wrapper = shallowWrapperRequestCallbackPopup(props);
    wrapper.find('.at_requestCB-confirm').simulate('click');
    expect(mockRequestCallbackConfirm).toHaveBeenCalledTimes(1);
  });

});
