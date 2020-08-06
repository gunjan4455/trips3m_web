import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Packages from './Packages';
import PopularPackageCard from 'components/Listing/PopularPackageCard';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  packages: [{
    currency: 'Rupee',
    days: 6,
    nights: 5,
    destinations: 'kerala',
    discount: 3648,
    id: 547,
    imageUrl: 'https://img.traveltriangle.com/stage/attachments/pictures/842065/original/Thekkady_River.jpg?tr=,w-630',
    imagekitUrl: 'https://img.traveltriangle.com/stage/attachments/pictures/842065/original/Thekkady_River.jpg',
    inclusions:[],
    mini_desc: 'per person',
    name: 'Amazing Kerala Trip: Hills, Backwaters & Safari',
    price: 20065,
    packageUrl: '/packages/2nights-3days-kerala-munnar-tour?id=597',
    discounted_price:19717 ,
  }]
};

const shallowWrapperPackages = (props) => {
  return shallow(<Packages {...props} />);
};


describe('Package card module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperPackages(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render popularpackagecard', () => {
    const wrapper = shallowWrapperPackages(props);
    expect(wrapper.find(PopularPackageCard)).toHaveLength(1);
  });

});
