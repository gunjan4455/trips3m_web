import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import BookNowPopup from './index';
import WaitForInvoice from '../../ctas/WaitForInvoice';
import CallTripAdvisor from '../../ctas/CallTripAdvisor';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  opsDetail: {
    id: 2251659,
    name: 'Damini Oberoi',
    phoneNo: '1800123WaitForInvoice5555',
    email: 'damini.oberoi@traveltriangle.com',
    image: '/pics/original/missing.png',
    initials: 'D'
  },
  closeModal: jest.fn,
  trackSegment: jest.fn,
};

const shallowWrappperBookNowPopup = (props) => {
  return shallow(<BookNowPopup {...props} />);
};

describe('Book Now Popup: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperBookNowPopup(props);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Wait For Invoice and Call Trip Guide cta's", () => {
    const wrapper = shallowWrappperBookNowPopup(props);
    expect(wrapper.find(WaitForInvoice)).toBeTruthy();
    expect(wrapper.find(CallTripAdvisor)).toBeTruthy();
  });

});
