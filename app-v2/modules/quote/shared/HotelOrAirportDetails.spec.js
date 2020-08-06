import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import HotelOrAirportDetails from './HotelOrAirportDetails';
import { hotelInfo } from '../hotel/testData';

configure({ adapter: new Adapter() });

const shallowWrappperHotelDetailsPopup = (props) => {
  return shallow(<HotelOrAirportDetails {...props} />);
};

const DEFAULT_PROPS = {
  info: hotelInfo,
  closeModal: jest.fn
};

describe('HotelDetailsPopup: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperHotelDetailsPopup(props);
    expect(wrapper).toMatchSnapshot();
  });

 /* it('should show ShowMore component when comments is there', () => {
    props.hotelDetail.comments = `<br/>INCLUDES<br/>ACCOMMODATION<br/>TRANSFERS<br/>BREAKFAST AND DINNER<br/>1 DAY S/S OF NORTH GOA BY AC COACH<br/>`;
    const wrapper = shallowWrappperHotelDetailsPopup(props);
    expect(wrapper.find(ShowMore)).toHaveLength(1);
  });*/

});
