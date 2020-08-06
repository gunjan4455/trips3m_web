import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ChatInput from './ChatInput';
import Pdm from 'modules/pdm';

configure({ adapter: new Adapter() });

const sendMessageMock = jest.fn();

const DEFAULT_PROPS = {
  pdmsInformation: {
    showPdmView: true,
    pdms: {}
  },
  sendMessage: sendMessageMock,
  showHidePdmView: jest.fn,
};

const shallowWrappperChatInput = (props) => {
  return shallow(<ChatInput {...props} />);
};

describe('ChatInput: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
    jest.clearAllMocks();
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperChatInput(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render pdm component when showPdmView is false ', () => {
    props.pdmsInformation.showPdmView = false;
    const wrapper = shallowWrappperChatInput(props);
    expect(wrapper.find(Pdm)).toHaveLength(0);
  });

  it('should call messageOnChange on type', () => {
    props.pdmsInformation.showPdmView = false;

    const wrapper = shallowWrappperChatInput(props);

    const spy = jest.spyOn(wrapper.instance(), "messageOnChange");
    wrapper.instance().forceUpdate();

    const e = { target: { value: 'My new value' } };
    wrapper.find('.at_chatinput').simulate('change', e);

    expect(spy).toBeCalledWith(e);
  });


  it('should call handleKeyUp when enter key is pressed', () => {
    const wrapper = shallowWrappperChatInput(props);

    const spy = jest.spyOn(wrapper.instance(), "handleKeyUp");
    wrapper.instance().forceUpdate();

    wrapper.find('.at_chatinput').simulate('keyUp', { nativeEvent: { keyCode: 13 }, preventDefault: jest.fn });

    expect(spy).toHaveBeenCalled();
  });

  it('should call sendMessage when enter key is pressed with message', () => {
    const wrapper = shallowWrappperChatInput(props);

    const e = { target: { value: 'My new value' } };
    wrapper.find('.at_chatinput').simulate('change', e);
    wrapper.find('.at_chatsendbtn').simulate('click');

    expect(sendMessageMock).toHaveBeenCalledWith('My new value');
  });

});
