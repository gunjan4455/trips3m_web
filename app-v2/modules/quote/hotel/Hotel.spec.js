import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Hotel from './Hotel';
import HotelCard from './components/HotelCard';
import { hotels, hotel } from "./testData";

configure({ adapter: new Adapter() });

const shallowWrappperHotelComponent = (props) => {
  return shallow(<Hotel {...props} />);
};

const DEFAULT_PROPS = {
  hotels,
  hotelText: ''
};

describe('Hotels: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperHotelComponent(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show only 1 Hotel card', () => {
    const wrapper = shallowWrappperHotelComponent(props);
    expect(wrapper.find(HotelCard)).toHaveLength(1);
  });

  it('should not render "View All Hotels" button', () => {
    const wrapper = shallowWrappperHotelComponent(props);
    expect(wrapper.find("View All Hotels").exists()).toBeFalsy();
  });
});

describe('Multiple hotels: Render Correctly ', () => {
  const props = { ...DEFAULT_PROPS };

  beforeAll(() => {
    props.hotels.push(hotel);
  });

  it('should show "View All Hotels" button with multiple hotels', () => {
    const wrapper = shallowWrappperHotelComponent(props);
    expect(wrapper.find(".at_viewallhotel").text()).toEqual("View All Hotels");
  });

  it('should show multiple hotels on View All Hotels click', () => {
    const wrapper = shallowWrappperHotelComponent(props);
    wrapper.find('.at_viewallhotelclick').simulate('click');
    expect(wrapper.find(HotelCard)).toHaveLength(2);
  });

  it('should now show View All Hotels when hotels is there', () => {
    props.hotels = [];
    const wrapper = shallowWrappperHotelComponent(props);
    expect(wrapper.find('.at_viewallhotel')).toHaveLength(0);
  });

  it('should show Hotel Text when hotel is not there', () => {
    props.hotels = [];
    props.hotelText = 'some text';
    const wrapper = shallowWrappperHotelComponent(props);
    expect(wrapper.find('.at_hoteltext').text()).toEqual('some text');
  });
});
