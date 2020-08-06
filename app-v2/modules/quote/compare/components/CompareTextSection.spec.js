import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CompareTextSection from './CompareTextSection';

configure({ adapter: new Adapter() });

const shallowWrappperCompareTextSection = (props) => {
  return shallow(<CompareTextSection {...props} />);
};

const DEFAULT_PROPS = {};

describe('Compare Module ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperCompareTextSection(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render proper text when text is not defined in props', () => {
    const wrapper = shallowWrappperCompareTextSection(props);
    expect(wrapper.find('.at_text').text()).toEqual('Not Included');
  });

  it('should render proper text when text is defined in props', () => {
    props.text = 'testing'
    const wrapper = shallowWrappperCompareTextSection(props);
    expect(wrapper.find('.at_text').text()).toEqual('testing');
  });

});
