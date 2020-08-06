import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import SocialShareModal from './index';

configure({ adapter: new Adapter() });
let component;

const DEFAULT_PROPS = {
  sharedBy: 'Logged-in-user',
  shareLink: 'http://some-link',
  trackSegment: jest.fn
};

const shallowWrappperSocialShareModalComponent = (props) => {
  return shallow(<SocialShareModal {...props} />);
};

describe('Inclusions: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperSocialShareModalComponent(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have whatsapp://send?text= in anchor', () => {
    const wrapper = shallowWrappperSocialShareModalComponent(props);
    expect(wrapper.find({ href: `mailto:?subject=${props.shareLink}` })).toBeTruthy();
  });

  it('should have mailto:?subject= in anchor', () => {
    const wrapper = shallowWrappperSocialShareModalComponent(props);
    expect(wrapper.find({ href: `mailto:?subject=${props.shareLink}` })).toBeTruthy();
  });
});
