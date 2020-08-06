import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CheaperDealPopup from './CheaperDealPopup.js';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  "agent": {
    "id": 353152,
    "name": "Agent 353152",
    "imageUrl": "https://img.traveltriangle.com/stage/attachments/tr_a_profiles/1369/original/logo_we_care.jpg?tr=,w-300",
    "star": 4,
    "tripsSold": 393,
    "reviewsCount": 412,
    "reviewLink": "https://bookings-qa3.ttdev.in/agents/3335333135322d547261-Travel-Agency-1369",
    "email": "UserEmail_353152@gmail.com"
  },
  "currentQuoteId": 12742252,
  "tripId": 7304969,
  "userDetails": {
    "id": 1296977,
    "email": "UserEmail_1296977@gmail.com",
    "first_name": "",
    "last_name": "",
    "image": "https://img.traveltriangle.com/stage/attachments/users/1296977/original/photo.jpg",
    "latest_active_trip": {
      "destination_name": "Sikkim - Gangtok - Darjeeling",
      "trip_id": 7304969,
      "destination_image": "https://img.traveltriangle.com/stage/attachments/destinations/171/original/sgd.JPG?tr=,w-50,h-50",
      "status_txt": "Update on Quotes here",
      "trip_path": "/requested_trips/7304969-User-Email-"
    },
    "dashboard_url": "/requested_trips/7304969-User-Email-"
  },
  "trackSegment": () => {},
  "createComment": () => {},
  "addMessage": () => {},
  "closePopup": () => {},
  "afterSend": () => {}
}


const shallowWrapper = (props) => {
  return shallow(<CheaperDealPopup {...props} />);
}

describe('Should render correctly', () => {
  let props = { ...DEFAULT_PROPS };

  it('should render correctly', () => {
    const wrapper = shallowWrapper(props);
    expect(wrapper).toMatchSnapshot();
  })

  it('On Better Deal should click correctly', () => {
    const wrapper = shallowWrapper(props);
    const mockBetterDeal = jest.fn();
    wrapper.instance().onBetterDeal = mockBetterDeal;
    wrapper.find('.at_better').simulate('click');
    expect(mockBetterDeal).toHaveBeenCalled();
  });

  it('close Popup should work correctly', () => {
    const wrapper = shallowWrapper(props);
    const mockClose = jest.fn();
    wrapper.instance().closePopup = mockClose;
    wrapper.find('.at_close').simulate('click');
    expect(mockClose).toHaveBeenCalled();
  });
});
