import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import HotelCardDetails from './HotelCardDetails';
import { hotelInfo } from '../testData';
import ShowMore from 'modules/shared/ShowMore';

configure({ adapter: new Adapter() });

const shallowWrappperHotelCardDetails = (props) => {
  return shallow(<HotelCardDetails {...props} />);
};

const DEFAULT_PROPS = {
  hotelDetail: hotelInfo
};

describe('HotelCardDetailss: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperHotelCardDetails(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show ShowMore component when comments is there', () => {
    props.hotelDetail.comments = `<br/>INCLUDES<br/>ACCOMMODATION<br/>TRANSFERS<br/>BREAKFAST AND DINNER<br/>1 DAY S/S OF NORTH GOA BY AC COACH<br/>`;
    const wrapper = shallowWrappperHotelCardDetails(props);
    expect(wrapper.find(ShowMore)).toHaveLength(1);
  });

});
