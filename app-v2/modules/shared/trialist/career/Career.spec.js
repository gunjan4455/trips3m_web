import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Career from './Career';
import { careerData } from './test/careerData';
import AccordionExpand from './AccordionExpand';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  careers: careerData
};

const shallowWrapperCareerMain = (props) => {
  return shallow(<Career {...props} />);
};

describe('career module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperCareerMain(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass proper name in Acccording Expand component', () => {
    const wrapper = shallowWrapperCareerMain(props);
    expect(wrapper.find(AccordionExpand).at(0).prop('name')).toEqual('Development');
  });

});
