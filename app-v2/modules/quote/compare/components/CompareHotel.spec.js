import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CompareHotel from './CompareHotel';
import { quote1, quote2 } from 'modules/quote/reducers/testData';
import CompareHotelsSection from './CompareHotelsSection';
import CompareTextSection from './CompareTextSection';

configure({ adapter: new Adapter() });

const shallowWrappperCompareHotel = (props) => {
  return shallow(<CompareHotel {...props} />);
};

const DEFAULT_PROPS = {
  quotes: {
    7124216: quote1,
    7124252: quote2
  },
};

describe('Compare Module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperCompareHotel(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render CompareTextSection when hotelsDetail in quote is not blank', () => {
    const wrapper = shallowWrappperCompareHotel(props);
    expect(wrapper.find(CompareHotelsSection)).toHaveLength(2);
    expect(wrapper.find(CompareTextSection)).toHaveLength(0);
  });
  it('should render CompareTextSection when hotelsDetail in quote is blank', () => {
    props.quotes[7124216] = { ...quote1, hotelsDetail: [] }
    const wrapper = shallowWrappperCompareHotel(props);
    expect(wrapper.find(CompareHotelsSection)).toHaveLength(1);
    expect(wrapper.find(CompareTextSection)).toHaveLength(1);
  });

});
