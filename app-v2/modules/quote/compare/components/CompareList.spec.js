import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CompareList from './CompareList';
import { GreenTickInclusion } from 'app/helpers/Icon/Icon';
import { quote1 } from 'modules/quote/reducers/testData';

configure({ adapter: new Adapter() });

const shallowWrappperCompareList = (props) => {
  return shallow(<CompareList {...props} />);
};

const DEFAULT_PROPS = {
  isExclusion: false,
  inclusions: quote1.inclusions[0],
};

describe('Compare Module ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperCompareList(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render GreenTick icon when isExclusion is false in props', () => {
    const wrapper = shallowWrappperCompareList(props);
    expect(wrapper.find(GreenTickInclusion)).toHaveLength(2);
  });

  it('should not render GreenTick icon when isExclusion is true in props', () => {
    props.isExclusion = true;
    const wrapper = shallowWrappperCompareList(props);
    expect(wrapper.find(GreenTickInclusion)).toHaveLength(0);
  });

});
