import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Dropdown from './Dropdown';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  trips: {
    allIds: [],
    byId: {
      '1111': {
        id: '1111',
        firstDestinationName: 'Kerala',
        toLoc: 'Kerala'
      },
      '2222': {
        id: '2222',
        firstDestinationName: 'Himachal',
        toLoc: 'Kerala'
      },
      '3333': {
        id: '3333',
        firstDestinationName: null,
        toLoc: 'pakistan'
      }
    }
  },
  currentTripId: '2222',
  trackSegment: jest.fn,
  push: jest.fn
};

const shallowWrapperTripList = (props) => {
  return shallow(<Dropdown {...props}/>);
};

describe('Trip List: Render Correctly ', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrapperTripList(props);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show toLoc when firstDestinationName is null', () => {
    props.currentTripId = '3333';
    const wrapper = shallowWrapperTripList(props);

    expect(wrapper.find('.at_destinationname').text()).toEqual('pakistan');
  });
});
