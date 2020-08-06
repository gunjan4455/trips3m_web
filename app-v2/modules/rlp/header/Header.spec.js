import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Header from './Header';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  currentTrip: {
    id: '1111',
    quotesCount: 2,
    status: '',
  }
};

const shallowWrapperHeader = (props) => {
  return shallow(<Header {...props} />);
};

describe('Rlp Header: Render Correctly ', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrapperHeader(props);

    expect(wrapper).toMatchSnapshot();
  });

  it('compare quotes should be disabled for single quote', () => {
    props.currentTrip.quotesCount = 1;
    const wrapper = shallowWrapperHeader(props);

    expect(wrapper.find('.at_comparequotes').hasClass('disabled')).toEqual(true);
  });
});
