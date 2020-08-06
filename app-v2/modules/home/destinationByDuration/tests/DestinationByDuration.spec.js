import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import DestinationByDuration from '../DestinationByDuration';
import { data } from './testData';

configure({ adapter: new Adapter() });

const shallowWrappperDestinationByDuration = (props) => {
  return shallow(<DestinationByDuration {...props} />);
};

const DEFAULT_PROPS = {
  destinations: data
};

describe('DestinationByDuration: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperDestinationByDuration(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not select first BudgetListBox', () => {
    const wrapper = shallowWrappperDestinationByDuration(props);

    expect(wrapper.find('.at_budgetlistbox').at(0).props().isSelected).toEqual(false);
  });

});
