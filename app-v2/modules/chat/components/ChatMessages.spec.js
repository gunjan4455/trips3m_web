import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import ChatMessages from './ChatMessages';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';

configure({ adapter: new Adapter() });

const mockFetchHistory = jest.fn();
const DEFAULT_PROPS = {
  messages: [],
  userId: 2544153,
  fetchHistory: mockFetchHistory,
  remainingMessages: 0,
  pdmsInformation: {}
};

const OUTGOING_MESSAGES = [
  {
    id: 11232124,
    title: 'Request Callback',
    comment: 'I need some changes in the quote. Please call me to discuss further.',
    email: 'palvi999@gmail.com',
    userId: 2544153,
    userRole: 'traveller',
    createdAt: '2019-02-12T15:42:46+05:30',
    updatedAt: '2019-02-12T15:42:46+05:30',
    uId: null,
    attachmentList: [],
    userName: 'Palvi',
    userPic: '/pics/original/missing.png'
  },
  {
    id: 11232134,
    title: 'h#Not_mobile',
    comment: 'tt1234',
    email: 'palvi999@gmail.com',
    userId: 2544153,
    userRole: 'traveller',
    createdAt: '2019-02-12T16:53:37+05:30',
    updatedAt: '2019-02-12T16:53:37+05:30',
    uId: '25441531549970617590e52f38cec6b7f1fa077c9269053b9369',
    attachmentList: [],
    userName: 'Palvi',
    userPic: '/pics/original/missing.png'
  },
  {
    id: 11232138,
    title: 'h#Not_mobile',
    comment: 'tttttttt',
    email: 'palvi999@gmail.com',
    userId: 2544153,
    userRole: 'traveller',
    createdAt: '2019-02-12T17:19:48+05:30',
    updatedAt: '2019-02-12T17:19:48+05:30',
    uId: '2544153154997218858345fcaeafd8ebec14bece68f7f00ca154',
    attachmentList: [],
    userName: 'Palvi',
    userPic: '/pics/original/missing.png'
  },
  {
    id: 11232185,
    title: 'Request Callback',
    comment: 'I need some changes in the quote. Please call me to discuss further.',
    email: 'palvi999@gmail.com',
    userId: 2544153,
    userRole: 'traveller',
    createdAt: '2019-02-13T12:11:59+05:30',
    updatedAt: '2019-02-13T12:11:59+05:30',
    uId: null,
    attachmentList: [],
    userName: 'Palvi',
    userPic: '/pics/original/missing.png'
  },
  {
    id: 11232200,
    title: 'h#Not_mobile',
    comment: 'wdsasdsd',
    email: 'palvi999@gmail.com',
    userId: 2544153,
    userRole: 'traveller',
    createdAt: '2019-02-13T17:11:11+05:30',
    updatedAt: '2019-02-13T17:11:11+05:30',
    uId: '2544153155005807141060d2f173018295cb20253b00bdcde441',
    attachmentList: [],
    userName: 'Palvi',
    userPic: '/pics/original/missing.png'
  },
  {
    id: 11232201,
    title: 'h#Not_mobile',
    comment: 'Hey! I need hotel in a better budget.',
    email: 'palvi999@gmail.com',
    userId: 2544153,
    userRole: 'traveller',
    createdAt: '2019-02-13T17:11:36+05:30',
    updatedAt: '2019-02-13T17:11:36+05:30',
    uId: '2544153155005809682849e61f5d9ec5251728f0358ed60d6884',
    attachmentList: [],
    userName: 'Palvi',
    userPic: '/pics/original/missing.png'
  },
  {
    id: 11232202,
    title: 'h#Not_mobile',
    comment: 'Hey! I need to get a few inclusions added. Please contact me to discuss further.',
    email: 'palvi999@gmail.com',
    userId: 2544153,
    userRole: 'traveller',
    createdAt: '2019-02-13T17:11:56+05:30',
    updatedAt: '2019-02-13T17:11:56+05:30',
    uId: '2544153155005811645759f691dc9d514c8e05377fbb557a70c2',
    attachmentList: [],
    userName: 'Palvi',
    userPic: '/pics/original/missing.png'
  },
  {
    id: 11232203,
    title: 'h#Not_mobile',
    comment: 'Hey! I need hotel in a better budget.',
    email: 'palvi999@gmail.com',
    userId: 2544153,
    userRole: 'traveller',
    createdAt: '2019-02-13T17:12:25+05:30',
    updatedAt: '2019-02-13T17:12:25+05:30',
    uId: '2544153155005814502449e61f5d9ec5251728f0358ed60d6884',
    attachmentList: [],
    userName: 'Palvi',
    userPic: '/pics/original/missing.png'
  },
  {
    id: 11232206,
    title: 'h#Not_mobile',
    comment: 'Hey! I need to get a few inclusions added. Please contact me to discuss further.',
    email: 'palvi999@gmail.com',
    userId: 2544153,
    userRole: 'traveller',
    createdAt: '2019-02-13T17:30:05+05:30',
    updatedAt: '2019-02-13T17:30:05+05:30',
    uId: '2544153155005920566659f691dc9d514c8e05377fbb557a70c2',
    attachmentList: [],
    userName: 'Palvi',
    userPic: '/pics/original/missing.png'
  },
  {
    id: 11232207,
    title: 'Request Callback',
    comment: 'I need some changes in the quote. Please call me to discuss further.',
    email: 'palvi999@gmail.com',
    userId: 2544153,
    userRole: 'traveller',
    createdAt: '2019-02-13T17:30:20+05:30',
    updatedAt: '2019-02-13T17:30:20+05:30',
    uId: null,
    attachmentList: [],
    userName: 'Palvi',
    userPic: '/pics/original/missing.png'
  }
];

const mountWrappperChatMessages = (props) => {
  return mount(<ChatMessages {...props} />);
};

describe('NotificationList: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = mountWrappperChatMessages(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show Default Message when no chat', () => {
    const wrapper = mountWrappperChatMessages(props);
    expect(wrapper.find('.at_chatmessage').text()).toEqual("Chat with our agent to customize your quote");
  });

  it('should show Load More Chat', () => {
    props.messages = OUTGOING_MESSAGES;
    props.remainingMessages = 5;

    const wrapper = mountWrappperChatMessages(props);
    expect(wrapper.find('.at_loadmore').at(0).text()).toEqual("Load More");
  });

  it('should show 10 Outgoing messages', () => {
    props.messages = OUTGOING_MESSAGES;
    props.remainingMessages = 5;

    const wrapper = mountWrappperChatMessages(props);
    expect(wrapper.find(OutgoingMessage)).toHaveLength(10);
  });

  it('should call fetchHistory on Load More click', () => {
    props.messages = OUTGOING_MESSAGES;
    props.remainingMessages = 5;

    const wrapper = mountWrappperChatMessages(props);
    wrapper.find('.at_loadmore').at(0).simulate('click');
    expect(mockFetchHistory).toHaveBeenCalledTimes(1);
  });

});
