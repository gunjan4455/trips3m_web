import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ImageSlider from './ImageSlider';

configure({ adapter: new Adapter() });

const shallowWrappperImageSlider = (props) => {
  return shallow(<ImageSlider {...props} />);
};

const DEFAULT_PROPS = {
  images: []
};

describe('ImageSlider: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperImageSlider(props);
    expect(wrapper).toMatchSnapshot();
  });

});
