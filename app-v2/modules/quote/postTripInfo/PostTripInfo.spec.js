import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import PostTripInfo from './PostTripInfo';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  showVouchersUrl: false,
  vouchersUrl: '',
  travelerDetailUrl: 'http://some-url',
  currentQuote: {
    attachment: {}
  }
};

const shallowWrappperPostTripInfoComponent = (props) => {
  return shallow(<PostTripInfo {...props} />);
};

describe('Inclusions: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperPostTripInfoComponent(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have Fill Travelers Details text', () => {
    const wrapper = shallowWrappperPostTripInfoComponent(props);
    expect(wrapper.find('Fill Travelers Details')).toBeTruthy();
  });

  it('should have View Vouchers text when vouchers is there', () => {
    props.showVouchersUrl = true;
    props.vouchersUrl = 'http://some-url';
    const wrapper = shallowWrappperPostTripInfoComponent(props);
    expect(wrapper.find('View Vouchers')).toBeTruthy();
  });

  it('should have View Attachment text when attachment is there', () => {
    props.currentQuote.attachment.downloadUrl = 'http://some-url';
    const wrapper = shallowWrappperPostTripInfoComponent(props);
    expect(wrapper.find('View Attachment')).toBeTruthy();
  });

  it('should not render View Attachment when downloadUrl is blank', () => {
    props.currentQuote.attachment.downloadUrl = '';
    const wrapper = shallowWrappperPostTripInfoComponent(props);
    expect(wrapper.find('View Attachment')).toHaveLength(0);
  });
});
