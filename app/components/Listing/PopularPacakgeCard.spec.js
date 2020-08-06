import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import PopularPackageCard from './PopularPackageCard';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  card: {
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
  }
};

const shallowPopularPackageCard = (props) => {
  return shallow(<PopularPackageCard {...props} />);
};

describe('PopularPackageCard test suit', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowPopularPackageCard(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render more-than-three-stars class', () => {
    const wrapper = shallowPopularPackageCard(props);
    expect(wrapper.find('.more-than-three-stars')).toHaveLength(0);
  });

  it('should render more-than-three-stars class', () => {
    props.card.familyPackages = {
      '30':[3, 46000, 50600],
      '31':[3, 46000, 50600],
      '32':[3, 46000, 50600],
      '33':[3, 46000, 50600]
    };
    const wrapper = shallowPopularPackageCard(props);
    expect(wrapper.find('.more-than-three-stars')).toHaveLength(1);
  });

  it('should call proper handle change function', () => {
    const wrapper = shallowPopularPackageCard(props);
    wrapper.instance().handleChange(76);
    expect(wrapper.state().hotelId).toBe(76);
  });

});
