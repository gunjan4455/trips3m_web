import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import SlideItem from '../SlideItem';
import { slideItem } from './testData';

configure({ adapter: new Adapter() });

const shallowWrappperSlideItem = (props) => {
  return shallow(<SlideItem {...props} />);
};

const DEFAULT_PROPS = {
  ...slideItem
};

describe('SlideItem: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperSlideItem(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not have wMaxFull class when packageCount is 0', () => {
    props.packageCount = 0;
    const wrapper = shallowWrappperSlideItem(props);

    expect(wrapper.find('.at_budgetlistbox')).toHaveLength(0);
  });

});
