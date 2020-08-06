import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import InclusionExclusion from './InclusionExclusion';
import { quote1, quote2 } from 'modules/quote/reducers/testData';
import CompareList from './CompareList';
import CompareTextSection from './CompareTextSection';

configure({ adapter: new Adapter() });

const shallowWrappperInclusionExclusion = (props) => {
  return shallow(<InclusionExclusion {...props} />);
};

const DEFAULT_PROPS = {
  quotes: {
    7124216: quote1,
    7124252: quote2
  },
  trackSegment: jest.fn,
  isExclusion: false
};

describe('Compare Module ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperInclusionExclusion(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render CompareTextSection when inclusion in quote is not blank', () => {
    const wrapper = shallowWrappperInclusionExclusion(props);
    expect(wrapper.find(CompareList)).toHaveLength(2);
    expect(wrapper.find(CompareTextSection)).toHaveLength(0);
  });
  it('should render CompareTextSection when inclusion in quote is blank', () => {
    props.quotes[7124216] = { ...quote1, inclusions: {} };
    const wrapper = shallowWrappperInclusionExclusion(props);
    expect(wrapper.find(CompareList)).toHaveLength(1);
    expect(wrapper.find(CompareTextSection)).toHaveLength(1);
  });

  it('should set proper state', () => {
    const wrapper = shallowWrappperInclusionExclusion(props);
    wrapper.instance().showAndHideSection();
    expect(wrapper.state().showMore).toBe(true);
    expect(wrapper.state().text).toBe('View Less');
  });

  it('should set proper state', () => {
    const wrapper = shallowWrappperInclusionExclusion(props);
    wrapper.state().showMore = true;
    wrapper.instance().showAndHideSection();
    expect(wrapper.state().showMore).toBe(false);
    expect(wrapper.state().text).toBe('View More');
  });

  it('should render button when inclusion[0] length in quote is more than 5', () => {
    props.quotes['7124216'].inclusions = {
      '1': Array(6).fill({
        category: 'Accomodation',
        commentsAdded: null,
        id: 272,
        isIncluded: true,
        name: 'Double'
      })
    };
    props.quotes['7124252'].inclusions = {
      '1': Array(6).fill({
        category: 'Accomodation',
        commentsAdded: null,
        id: 272,
        isIncluded: true,
        name: 'Double'
      })
    };
    const wrapper = shallowWrappperInclusionExclusion(props);
    expect(wrapper.find('button').exists()).toBeTruthy();
    wrapper.setState({ showMore: true });
    expect(wrapper.find('.cardViewLess').exists()).toBeTruthy();
  });

});
