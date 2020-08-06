import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import PackageDetailsPrice from './PackageDetailsPrice';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  pkg: {
    hotels: [],
    covers: {
      days: 4,
      nights: 3
    },
    price: {
      total: 21650,
      discount: 15651,
      currency: 'Rupee',
      miniDesc: 'Per Person on twin sharing',
      from: null,
      to: null
    },
    package_options: {
      hotel_price_details: [],
    },

  },
  dealsInfo: false
};

const shallowWrapperPackageHeading = (props) => {
  return shallow(<PackageDetailsPrice {...props} />);
};

describe('HowItWorks test suit', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperPackageHeading(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render hotel star included text when dealsInfo is false and hotels in pkg is empty', () => {
    const wrapper = shallowWrapperPackageHeading(props);
    expect(wrapper.find('.at_hotelstar').exists()).toBeFalsy();
  });

  it('should not render hotel star included text when dealsInfo is true and hotels in pkg is empty', () => {
    props.dealsInfo = true;
    const wrapper = shallowWrapperPackageHeading(props);
    expect(wrapper.find('.at_hotelstar').exists()).toBeFalsy();
  });
  
  it('should render hotel star included text when deals or luxury is true and  hotels in pkg is not empty', () => {
    props.isDeal = true;
    props.pkg.hotels.push({
      overview: 'The Grand Hanthana is provides accommodation with a garden and free WiFi in Kandy',
      address: 'No.13/B/14/1 Housing Scheme Rd, Kandy 20000, Sri Lanka',
      trip_adviser_id: 14072451,
      city: 'Kandy',
      name: 'The Grand Hanthana',
      rating: 3,
      header: 'Days 1-2',
      id: 358346,
      facilities: [],
      pictures: []
    });
    const wrapper = shallowWrapperPackageHeading(props);
    expect(wrapper.find('.at_hotelstar').exists()).toBeTruthy();
    expect(wrapper.find('.at_hotelstar').text()).toEqual("Star Hotels Included");
  });

});
