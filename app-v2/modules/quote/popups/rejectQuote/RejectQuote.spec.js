import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import RejectQuotePopup from './index';

configure({ adapter: new Adapter() });

const mockRejectQuoteHandler = jest.fn();
const mockCloseModalHandler = jest.fn();
const DEFAULT_PROPS = {
  tripId: 3918699,
  quoteId: 7124216,
  rejectQuoteReasons: {
    '1': 'Quotes are higher than my budget',
    '2': 'Want a different itinerary',
    '3': 'Wish to customize my existing package',
    '4': 'Want to travel to some other destination',
    '5': 'Others',
    '6': 'Not satisfied with the hotels'
  },
  rejectQuoteHandler: mockRejectQuoteHandler,
  closeModal: mockCloseModalHandler
};

const shallowWrappperRejectQuotePopup = (props) => {
  return shallow(<RejectQuotePopup {...props} />);
};

describe('Reject Quote Popup: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperRejectQuotePopup(props);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Cancel and Reject Quote cta's", () => {
    const wrapper = shallowWrappperRejectQuotePopup(props);
    expect(wrapper.find('.at_rejectcancel').text()).toEqual('Cancel');
    expect(wrapper.find('.at_rejectconfirm').text()).toEqual('Reject Quote');
  });

  it("should show error on Reject Quote click without option select", () => {
    const wrapper = shallowWrappperRejectQuotePopup(props);
    wrapper.find('.at_rejectconfirm').simulate('click');
    expect(wrapper.find('.at_rejecterror').text()).toEqual('Please select a reason.');
  });


  it("should call rejectQuoteHandler on Reject Quote click", () => {
    const wrapper = shallowWrappperRejectQuotePopup(props);
    wrapper.instance().state.reason = "Quotes are higher than my budget"
    wrapper.find('.at_rejectconfirm').simulate('click');
    expect(mockRejectQuoteHandler).toHaveBeenCalledTimes(1);
  });

  it("should call closeModal on Cancel click", () => {
    const wrapper = shallowWrappperRejectQuotePopup(props);
    wrapper.find('.at_rejectcancel').simulate('click');
    expect(mockCloseModalHandler).toHaveBeenCalledTimes(1);
  });
});
