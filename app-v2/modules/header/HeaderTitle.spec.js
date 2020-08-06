import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount} from 'enzyme';

import { TripTypeList, HeaderTitle } from './HeaderTitle';

configure({ adapter: new Adapter() });

const toggleSelectionMocked = jest.fn();
const props = {
  category: "Water%20Activities",
  selectedItem: "waterActivities",
  selectionList : {
    adventure : {
      name : 'Adventure',
      url : '/Adventure-Places'
    },
    waterActivities : {
      name : 'Water Activities',
      url : '/Water%20Activities-Places'
    }
  },
  toggleSelection : toggleSelectionMocked,
  goBackState : jest.fn(),
  tripTypeListShown: true
};

describe ('TripTypeList Component', () => {

  it('should display list from props', () => {
    const wrapper = shallow(<TripTypeList {...props} />);
    expect(wrapper.find('Link').at(1).children().text()).toEqual('Water Activities');
  });

  it ('should call toggleSelection function on overlay click', () => {
    const wrapper = mount(<TripTypeList {...props} />);
    const overlay = wrapper.find('.fix-layer-suggestion');
    overlay.simulate('click');
    expect(toggleSelectionMocked.mock.calls.length).toBe(1);
  });

});

describe('Header Title Component', () => {

  it ('should hide list on first render', () => {
    const wrapper = mount(<HeaderTitle {...props} />);
    expect(wrapper.find('.hide')).toHaveLength(1);
  });

  it ('should call toggleSelection function on button click', () => {
    const wrapper = mount(<HeaderTitle {...props} />);
    const button = wrapper.find('.button-drop-category').find('button');
    button.simulate('click');
    expect(toggleSelectionMocked.mock.calls.length).toBe(2); //2 is because function is already called once before this
  });
});
