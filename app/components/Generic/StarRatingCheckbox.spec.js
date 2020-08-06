import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import StarRatingCheckbox from './StarRatingCheckbox';

configure({ adapter: new Adapter() });

const MockHandleOnChange = jest.fn();

const DEFAULT_PROPS = {
  id:2,
  isChecked:false,
  name:"hotel_ratings[]",
  title:"3 Star",
  value:"3",
  disabled:false,
  filterCountKey:"hotel_ratings_3",
  handleOnChange: MockHandleOnChange
};

const shallowWrapperStarRatingCheckbox = (props) => {
  return shallow(<StarRatingCheckbox {...props} />);
};

describe('StarRatingCheckbox module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperStarRatingCheckbox(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handleOnChange call properly', () => {
    const wrapper = shallowWrapperStarRatingCheckbox(props);
    wrapper.instance().toggleCheckboxChange();
    expect(MockHandleOnChange).toHaveBeenCalledWith(2);
  });

  it('should not render packages count when count in props is not defined', () => {
    const wrapper = shallowWrapperStarRatingCheckbox(props);  
    expect(wrapper.find('.at_count')).toHaveLength(0);
  });

  it('should render packages count when count in props is defined', () => {
    props.count = 101;
    const wrapper = shallowWrapperStarRatingCheckbox(props);  
    expect(wrapper.find('.at_count')).toHaveLength(1);
  });

});
