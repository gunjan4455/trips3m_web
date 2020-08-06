import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import TripPreferences from './TripPreferences';
import { preferences } from '../testData';
import TripPreferencesEditForm from '../edit/TripPreferences';
import EditPreferencesPopup from "../components/EditPreferencesPopup";

configure({ adapter: new Adapter() });

const mockHandleSubmit = jest.fn();

const DEFAULT_PROPS = {
  isConvertedTrip: false,
  preferences: preferences,
  handleSubmit: mockHandleSubmit,
  isCancelledTrip: false
};

const shallowWrapperView = (props) => {
  return shallow(<TripPreferences {...props} />);
};

describe('View module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperView(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render TripPreferencesEditForm when isConvertedTrip is false ', () => {
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(TripPreferencesEditForm).exists()).toBeTruthy();
  });

  it('should not render TripPreferencesEditForm  when isConvertedTrip is true and isCancelledTrip is false', () => {
    props.isConvertedTrip = true;
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(TripPreferencesEditForm).exists()).toBeFalsy();
  });

  it('should render TripPreferencesEditForm when isConvertedTrip is true and isCancelledTrip is true', () => {
    props.isConvertedTrip = true;
    props.isCancelledTrip = true;
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(TripPreferencesEditForm).exists()).toBeTruthy();
  });

  it('should not render EditPreferencesPopup when isConvertedTrip is false isCancelledTrip is false', () => {
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(EditPreferencesPopup).exists()).toBeFalsy();
  });

  it('should render EditPreferencesPopup  when isConvertedTrip is true and isCancelledTrip is false', () => {
    props.isConvertedTrip = true;
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(EditPreferencesPopup).exists()).toBeTruthy();
  });

  it('should not render EditPreferencesPopup when isConvertedTrip is true and isCancelledTrip is true', () => {
    props.isConvertedTrip = true;
    props.isCancelledTrip = true;
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(EditPreferencesPopup).exists()).toBeFalsy();
  });

  it('should handleSubmit called', () => {
    const values = {
      info: '',
      budget: '33500. .33500',
      flightAnswerAttributes: {
        customizationId: 23,
        optionId: 98,
        id: 26062527
      },
      hotelCategories: {
        '6': false,
        '7': true,
        '8': true,
        '32': false,
        '96': false
      },
      singleValueOptions: {
        '3': {
          optionId: ''
        },
        '24': {
          optionId: '99'
        },
        '43': {
          optionId: '204'
        },
        '169': {
          optionId: ''
        }
      },
      multiValueOptions: {
        '29': {
          optionId: {}
        },
        '71': {
          optionId: {}
        }
      },
      otherPreferences: [
        {
          id: 43,
          qtype: 'cities',
          sequence: 1,
          destinationId: 56,
          isGeneric: true,
          title: 'I will book',
          description: '',
          visibleToAgent: false,
          valueType: 'single_value',
          required: 'none',
          options: [
            {
              id: 202,
              name: ' in next 2 - 3 days',
              description: ' in next 2 - 3 days',
              url: '',
              misc: ''
            },
            {
              id: 203,
              name: ' in this week',
              description: ' in this week',
              url: '',
              misc: ''
            },
            {
              id: 204,
              name: ' in this month',
              description: ' in this month',
              url: '',
              misc: ''
            },
            {
              id: 205,
              name: 'later sometime',
              description: 'later sometime',
              url: '',
              misc: ''
            },
            {
              id: 256,
              name: 'just checking price',
              description: 'checking package & price',
              url: '',
              misc: ''
            }
          ]
        },
        {
          id: 71,
          qtype: 'cities',
          sequence: 7,
          destinationId: 60,
          isGeneric: false,
          title: 'Places to Visit',
          description: 'Would you like to include other experiences along with Singapore',
          visibleToAgent: true,
          valueType: 'multi_value',
          required: 'none',
          options: [
            {
              id: 295,
              name: 'Singapore',
              description: '',
              url: '',
              misc: ''
            },
            {
              id: 296,
              name: 'Malaysia',
              description: '',
              url: '',
              misc: ''
            },
            {
              id: 297,
              name: 'Bali',
              description: '',
              url: '',
              misc: ''
            },
            {
              id: 298,
              name: 'Singapore Cruise',
              description: '',
              url: '',
              misc: ''
            }
          ]
        },
        {
          id: 29,
          qtype: 'attractions',
          sequence: 11,
          destinationId: 60,
          isGeneric: false,
          title: 'Local Experiences',
          description: 'dditional local experiences that you may want to have',
          visibleToAgent: true,
          valueType: 'multi_value',
          required: 'none',
          options: [
            {
              id: 113,
              name: 'Batam– Indonesia',
              description: 'Several pubs,night clubs and bars keep Betam nightlife rocking and lively.Visiting community includes travellers and local expat who come to take pleasure in live music,KTV and waterfront city areas.',
              url: 'http: //traveltriangledocuments.s3.amazonaws.com/picfiles/images/cities/Singapore/batam_indonesia.jpg',
              misc: ''
            },
            {
              id: 145,
              name: 'Singapore Cruise (Singapore - Panang)',
              description: 'Singapore sightseeing is incomplete without cruising fascinating destinations. The journey on a cruise takes you through a world where there is a marvellous blend of sun, culture, sea and golden beaches.',
              url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/RCI_LG_Singapore-Large.jpg',
              misc: ''
            },
            {
              id: 146,
              name: 'Night Safari',
              description: 'Stroll through the world’s first night safari and meet with some amazing wonderments that you have never expected. Watch over 1000 animals in their natural habitat or marvel at exotic vegetation spread across 40 hectare park.',
              url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/small-lioness-IMG_5901.JPG',
              misc: ''
            }
          ]
        },
        {
          id: 169,
          qtype: 'other',
          sequence: 27,
          destinationId: null,
          isGeneric: true,
          title: 'Type of tour you want?',
          description: '',
          visibleToAgent: true,
          valueType: 'single_value',
          required: 'none',
          options: [
            {
              id: 504,
              name: 'Honeymoon',
              description: '',
              url: '',
              misc: 'user_input'
            },
            {
              id: 505,
              name: 'Family',
              description: '',
              url: '',
              misc: 'user_input'
            },
            {
              id: 506,
              name: 'Adventure',
              description: '',
              url: '',
              misc: 'user_input'
            },
            {
              id: 507,
              name: 'Offbeat',
              description: '',
              url: '',
              misc: 'user_input'
            },
            {
              id: 508,
              name: 'Wildlife',
              description: '',
              url: '',
              misc: 'user_input'
            },
            {
              id: 552,
              name: 'Religious',
              description: '',
              url: '',
              misc: 'user_input'
            }
          ]
        }
      ]
    };
    const wrapper = shallowWrapperView(props);
    wrapper.instance().updateTripPreference(values);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });

});
