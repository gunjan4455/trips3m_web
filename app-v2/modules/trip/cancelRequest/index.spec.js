import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CancelRequestPopUp from './index';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  requestedTrip: {
    id: 2752484,
    to_loc: 'kashmir',
    op_details: {
      email: 'dipti.adhikari@traveltriangle.com',
      id: 1721270,
      image: 'https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco/https://d3f2x0iiypxal.cloudfront.net/attachments/users/1721270/original/photo.jpg',
      initials: 'D',
      name: 'Dipti Adhikari',
      phone_no: '+919599816420'
    },
    trip_status: 'Cancelled',
    trip_stage: 'Quote received'
  },
  handleSubmit: jest.fn,
  location: {},
  section: 'TripSummary',
  closeModal: jest.fn
};

const shallowWrapperCancelRequestPopUp = (props) => {
  return shallow(<CancelRequestPopUp {...props} />);
};

describe('RequestCallBackPopup module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperCancelRequestPopUp(props);
    expect(wrapper).toMatchSnapshot();
  });

});
