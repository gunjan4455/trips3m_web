import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import NurturingOption from './NurturingOption'

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  "title": "I’m <span className=\"pfc5\">not okay</span> with this budget",
  "text": "Edit Preferences",
  "subText": "to match your budget",
  "hideBottomBorder": true,
  "disabled": false,
  "redirection": true,
  "trackSegmentEvent": () => {},
  "savePreferencesAndRedirect": () => {}
}

const shallowWrapper = (props) => {
  return shallow(<NurturingOption {...props} />);
}

describe('NurturingOption Module', () => {
  let props = { ...DEFAULT_PROPS };

  it('should render correctly', () => {
    const wrapper = shallowWrapper(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('Card click should work correctly', () => {
    const wrapper = shallowWrapper(props);
    jest.spyOn(wrapper.instance(), 'handleCardClick');
    wrapper.instance().forceUpdate();
    wrapper.find('.at_nlpCard').at(0).simulate('click');
    expect(wrapper.instance().handleCardClick).toHaveBeenCalled();
  });
});
