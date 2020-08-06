import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import AccordionExpand from './AccordionExpand';
import { careerData } from './test/careerData';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  list:[],
  name:''
};

const shallowWrapperAccordionExpand = (props) => {
  return shallow(<AccordionExpand {...props} />);
};

describe('career module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperAccordionExpand(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('component render length should be zero', () => {
    const wrapper = shallowWrapperAccordionExpand(props);
    expect(wrapper.find('.at_accordionExpand')).toHaveLength(0);
  });

  it('component render length should be 1', () => {
    props.list.push(careerData.salesAndOperations[0]);
    props.name = 'Sales & Operations';
    const wrapper = shallowWrapperAccordionExpand(props);
    expect(wrapper.find('.at_accordionExpand')).toHaveLength(1);
  });

});
