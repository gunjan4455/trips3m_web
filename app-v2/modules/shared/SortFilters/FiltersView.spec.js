import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { FiltersView } from './FiltersView';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  initialValues:{},
  filterList: []
};

const shallowWrappperFiltersView = (props) => {
  return shallow(<FiltersView {...props} />);
};

describe('Pdm: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperFiltersView(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render filter list when filterlist is not empty', () => {
    const wrapper = shallowWrappperFiltersView(props);
    expect(wrapper.find('.at_filtersrow')).toHaveLength(0);
  });

  it('should render only one filter from list when options in empty', () => {
    props.filterList.push({
      id:8137,
      multiSelect: true,
      operation: 'OR',
      options: [{
        count:177,
        enabled: true,
        id:8138,
        selected: false,
        title:'5 Star',
        value: '5'
      }],
      paramName: 'star_ratings',
      title: 'Star Rating'
    })
    const wrapper = shallowWrappperFiltersView(props);
    expect(wrapper.find('.at_filtersrow')).toHaveLength(1);
  });

  it('should render filter list when filterlist is not empty', () => {
    props.filterList.push({
      id: 8138,
      multiSelect: true,
      operation: 'OR',
      options: [],
      paramName: 'star_ratings',
      title: 'Star Rating'
    })
    const wrapper = shallowWrappperFiltersView(props);
    expect(wrapper.find('.at_filtersrow')).toHaveLength(1);
  });

});
