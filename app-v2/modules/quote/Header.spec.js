import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Header from './Header';

configure({ adapter: new Adapter() });
let component;

const DEFAULT_PROPS = {
  tripId: 3918699
};

const shallowWrapperHeader = (props) => {
  return (<Header {...props} />);
};

describe('Quote Header: Render Correctly ', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrapperHeader(props);

    expect(wrapper).toMatchSnapshot();
  });
});
