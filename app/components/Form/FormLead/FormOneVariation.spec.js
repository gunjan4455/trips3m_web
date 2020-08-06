import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import  {genericCheckbox} from './FormOneVariation';

configure({ adapter: new Adapter() });

const shallowWrappergenericCheckbox = (props) => {
  return shallow(<genericCheckbox {...props} />);
};

const mockTrackFormOneInteracted = jest.fn();

const DEFAULT_PROPS = {
  type:"checkbox",
  label:"Send trip updates on WhatsApp",
  className:"checkbox-common sfcw",
	id:"whatsapp_opt_status",
	input:{},
	trackFormOneInteracted: mockTrackFormOneInteracted
};

describe('lead form Header module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrappergenericCheckbox(props);
    expect(wrapper).toMatchSnapshot();
	});
	
	it('should not render disable class when id is whatsapp_opt_status', () => {
		const wrapper = shallowWrappergenericCheckbox(props);
    expect(wrapper.find('.disable').exists()).toBeFalsy();
	});

});
