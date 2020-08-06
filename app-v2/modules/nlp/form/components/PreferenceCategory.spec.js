import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import PreferenceCategory from './PreferenceCategory';

configure({ adapter: new Adapter() });
let component;
const PROPS = {
  text: 'Hotel Category',
  subText: 'Reducing hotel category will affect to a high difference in budget.',
  keyValue: 'maxHotelRating',
  min: 0,
  max: 2,
  valueSuffix: 'Star',
  labels: { 0: '0', 1: '1', 2: '2'},
  value: 3
};

const createPrefereceCategoryComponent = (props) => {
  return (<PreferenceCategory {...props} />);
};

describe('Render Preference Category ', () => {

  it('should match with the previous snapshot', () => {
    const PrefereceCategoryComponent = createPrefereceCategoryComponent(PROPS);
    component = shallow(PrefereceCategoryComponent);
    expect(component).toMatchSnapshot();
  });

  it('should match with the previous snapshot when no props are passed', () => {
    const newProps = {
      keyValue: 'maxHotelRating',
      min: 0,
      max: 2,
      labels: { 0: '0', 1: '1', 2: '2'},
    };
    const PrefereceCategoryComponent = createPrefereceCategoryComponent(newProps);
    component = shallow(PrefereceCategoryComponent);
    expect(component).toMatchSnapshot();
  });

});
