import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import NotFound from './NotFound';
import Img from 'components/Common/Img';

configure({ adapter: new Adapter() });

const shallowWrapperNotFound = () => {
  return shallow(<NotFound />);
};

describe('Not found module', () => {

  it('should not null in image ', () => {
    const wrapper = shallowWrapperNotFound();
    expect(wrapper.find(Img).props('src')).not.toBeNull();
  });
});
