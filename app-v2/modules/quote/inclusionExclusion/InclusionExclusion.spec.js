import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';

import InclusionExclusion from './InclusionExclusion';
import ShowMore from 'modules/shared/ShowMore';

configure({ adapter: new Adapter() });
let component;

const DEFAULT_PROPS = {
  title: 'Inclusions',
  item: 'Inclusion dummy text',
  classNames: '',
  sectionName: 'inclusions-sec',
};

const shallowWrappperInclusionComponent = (props) => {
  return shallow(<InclusionExclusion {...props} />);
};

describe('Inclusions: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperInclusionComponent(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with inclusions array', () => {
    props.item = [
      {
        id: 272,
        name: 'Double',
        category: 'Accomodation',
        comments: null
      },
      {
        id: 274,
        name: 'Breakfast',
        category: 'Meal plan',
        comments: null
      },
      {
        id: 276,
        name: 'Dinner',
        category: 'Meal plan',
        comments: null
      },
      {
        id: 279,
        name: 'Welcome Drink',
        category: '',
        comments: null
      },
      {
        id: 281,
        name: 'Wifi Connection',
        category: '',
        comments: null
      },
      {
        id: 284,
        name: 'Transfers (Railway/Airport)',
        category: '',
        comments: null
      },
      {
        id: 286,
        name: 'Tv with cable connection',
        category: '',
        comments: null
      },
      {
        id: 289,
        name: 'English Speaking Driver',
        category: '',
        comments: null
      },
      {
        id: 277,
        name: 'Arrival',
        category: 'Transfers (Railway/Airport)',
        comments: ''
      },
      {
        id: 278,
        name: 'Departure',
        category: 'Transfers (Railway/Airport)',
        comments: ''
      }
    ];

    const wrapper = shallowWrappperInclusionComponent(props);
    expect(wrapper.find(ShowMore)).toHaveLength(1);
  });
});
