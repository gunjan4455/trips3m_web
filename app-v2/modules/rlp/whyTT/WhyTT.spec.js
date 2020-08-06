import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import WhyTT from './WhyTT';

configure({ adapter: new Adapter() });
let component;

const createWhyTT = () => {
  return (<WhyTT />);
};

describe('Agent Card: Render Correctly ', () => {

  beforeAll(() => {
    const whyTTComponent = createWhyTT();
    component = shallow(whyTTComponent);
  });

  it('should match with the previous snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
