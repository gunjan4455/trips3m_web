import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Roster from './Roster';
import { INFO_ROSTER } from 'constants/rosterTypes';

configure({ adapter: new Adapter() });

const hideRosterMock = jest.fn();
const DEFAULT_PROPS = {
  type: INFO_ROSTER,
  message: 'This is test message',
  timeout: 4000,
  isRosterOpen: true,
  hideRoster: hideRosterMock,
};

const shallowWrappperRoster = (props) => {
  return shallow(<Roster {...props} />);
};

describe('Roster: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperRoster(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call hideRoster on close button', () => {
    const wrapper = shallowWrappperRoster(props);
    wrapper.find('.rosterClose').simulate('click');
    expect(hideRosterMock).toHaveBeenCalled();
  });
});
