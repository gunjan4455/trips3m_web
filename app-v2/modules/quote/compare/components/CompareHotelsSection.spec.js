import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CompareHotelsSection from './CompareHotelsSection';
import { StarIcon, } from 'app/helpers/Icon/Icon';
import { quote1 } from 'modules/quote/reducers/testData';


configure({ adapter: new Adapter() });

const shallowWrappperCompareHotelsSection = (props) => {
  return shallow(<CompareHotelsSection {...props} />);
};

const DEFAULT_PROPS = {
  hotels: quote1.hotelsDetail,
};

describe('Compare Module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperCompareHotelsSection(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render star icon', () => {
    const wrapper = shallowWrappperCompareHotelsSection(props);
    expect(wrapper.find(StarIcon)).toHaveLength(1);
  });

  it('should not render star icon', () => {
    props.hotels[0].hotelInfos[0].rating = 0;
    const wrapper = shallowWrappperCompareHotelsSection(props);
    expect(wrapper.find('.at_ratingText').text()).toBe('-');
  });

});
