import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import FiltersView from './FiltersView';

configure({ adapter: new Adapter() });

const mockUpdateUrl = jest.fn();

const filterToggleMock = jest.fn();

const DEFAULT_PROPS = {
  ratingFilters: [
    { value: '1', checked: false },
    { value: '2', checked: false },
    { value: '3', checked: false },
    { value: '4', checked: false },
    { value: '5', checked: false },
  ],
  location: { pathname: '/testimonials' },
  updateUrl: mockUpdateUrl,
  initialFilters: [],
  filterToggle: filterToggleMock,
};

const shallowWrapperFilterView = props => {
  return shallow(<FiltersView {...props} />);
};

describe('Testimonials module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS , initialFilters:[...DEFAULT_PROPS.initialFilters]};
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperFilterView(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handlesubmit when inititalFilter is empty', () => {
    mockUpdateUrl.mockClear();
    const wrapper = shallowWrapperFilterView(props);
    expect(wrapper.find('.at_handleSubmit').simulate('click'));
    expect(mockUpdateUrl).toHaveBeenCalledWith('/testimonials');
  });

  it('should call handlesubmit when initialFilter is not empty ', () => {
    mockUpdateUrl.mockClear();
    props.initialFilters.push(4);
    const wrapper = shallowWrapperFilterView(props);
    expect(wrapper.find('.at_handleSubmit').simulate('click'));
    expect(mockUpdateUrl).toHaveBeenCalledWith('/testimonials?ratings[]=4');
  });

  it('should call handlesubmit when initialFilter is not empty ', () => {
    mockUpdateUrl.mockClear();
    props.initialFilters.push(4,5);
    const wrapper = shallowWrapperFilterView(props);
    expect(wrapper.find('.at_handleSubmit').simulate('click'));
    expect(mockUpdateUrl).toHaveBeenCalledWith('/testimonials?ratings[]=4&ratings[]=5');
  });

  it('should call reset', () => {
    const wrapper = shallowWrapperFilterView(props);
    expect(wrapper.find('.at_reset').simulate('click'));
  });

  it('should call filterToggle', () => {
    const wrapper = shallowWrapperFilterView(props);
    expect(wrapper.find('.at_close').simulate('click'));
  });

  it('should checkstatus call', () => {
    const e = { target: { checked: true } };
    const option = 3;
    const i = 2;
    const wrapper = shallowWrapperFilterView(props);
    expect(wrapper.find('input[type="checkbox"]').at(0).simulate('change', { target: { checked: true } }))
  });

  it('should checkstatus call', () => {
    const e = { target: { checked: true } };
    const option = 4;
    const i = 3;
    const wrapper = shallowWrapperFilterView(props);
    wrapper.instance().checkStatus(e, option, i);
    expect(wrapper.state().selectedFilters).toEqual([4]);
  });

  it('should call checksattus ', () => {
    props.initialFilters.push(4);
    const e = { target: { checked: false } };
    const option = 4;
    const i = 3;
    const wrapper = shallowWrapperFilterView(props);
    wrapper.instance().checkStatus(e, option, i);
    expect(wrapper.state().selectedFilters).toEqual([]);
  });

});
