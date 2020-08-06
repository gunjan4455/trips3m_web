import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import HotelCard from './HotelCard';
import ORComp from './ORComp';
import { hotel, hotelInfo } from '../testData';

configure({ adapter: new Adapter() });

const shallowWrappperHotelCard = (props) => {
  return shallow(<HotelCard {...props} />);
};

const DEFAULT_PROPS = {
  hotels: hotel
};

describe('HotelCards: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS, viewAllHotels: true};

  afterEach(() => {
    props = { ...DEFAULT_PROPS, viewAllHotels: true };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperHotelCard(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not show OR component and have 1 HotelCardDetails', () => {
    const wrapper = shallowWrappperHotelCard(props);
    expect(wrapper.find(ORComp)).toHaveLength(0);
  });

  it('should show OR component with multiple hotels', () => {
    props.hotels.hotelInfos.push(hotelInfo);
    const wrapper = shallowWrappperHotelCard(props);
    expect(wrapper.find(ORComp)).toHaveLength(1);
  });
});
