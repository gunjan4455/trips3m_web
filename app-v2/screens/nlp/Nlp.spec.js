import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';

import Nlp from './Nlp.js';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  "params": {
    "uniqueKey": "1582648880674_lzgfh-ur",
    "secretKey": "977886e355826ccf"
  },
  "preference": {
    "destinationId": 56,
    "destinationName": "Kerala",
    "destinationType": "domestic",
    "days": 3,
    "maxHotelRating": 4,
    "flights": false,
    "travelMonth": 2,
    "priceMin": 55152,
    "priceMax": 142767
  },
  "rtripData": {
    "rtrip_params": {
      "email": "asqwesd@gmail.com",
      "dont_utilize_budget_new": true,
      "budget_new": true,
      "start_date_noidea": false,
      "whatsapp_opt_status": true,
      "adult": "2",
      "child": "0",
      "isd_code": "+91",
      "child_age_answers_attributes": [
        {
          "user_input": "0",
          "customization_id": "7",
          "option_id": "29"
        }
      ],
      "adminComments": "  #Form_filled_on https://localhost:3000/ #trip_origin_product:public_mweb  ",
      "syncErrors": {},
      "to_loc": "Kerala",
      "from_loc": "Lane Number 7, Maruti Udyog, Sector 18, Gurugram, Haryana 122008, India",
      "start_date": "2020-02-20",
      "start_date_flexible": false,
      "trip_days": 3,
      "hotel_needed_answer_attributes": {
        "option_id": "95",
        "customization_id": "22"
      },
      "hotel_category_answers_attributes": [
        {
          "option_id": "7",
          "customization_id": "2"
        }
      ],
      "other_answers_attributes": [
        {
          "option_id": "712",
          "customization_id": "218"
        }
      ],
      "budget": "8250..9000",
      "infant": "0",
      "phone_no": "9123123123",
      "from_slider_form": "true",
      "create_your_own_id": "false",
      "new_form": "true",
      "referer": "direct",
      "addtl_info": " ",
      "attribution_attributes": {
        "trip_origin_product": "public_mweb",
        "trip_origin_uri": "public_mweb::F1 Page::::::",
        "context_page_url": "https://localhost:3000/",
        "session_uuid": "a40b511af1d21e8f13f6d2fb06df23162636e6f1:::12-1-120",
        "page_uuid": "aa49966360adbcaac04771c21170c82b1ffebb77:::dvlCoZd9CS3lVzwGAvPtyOlYUnSB8E",
        "landing_page_uuid": "e7753672cd47e8985e76f26e274745cd5f4e59a2:::eijZlfoJp385EUrS8PvHkE0sxpdERM",
        "referer_page_uuid": "e7753672cd47e8985e76f26e274745cd5f4e59a2:::eijZlfoJp385EUrS8PvHkE0sxpdERM",
        "funnel_uuid": "0Ienf4peUu8YzMQ3rnJ9"
      }
    },
    "referrer": {
      "__utmz": null,
      "__utmzz": "utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)",
      "cookie_referer": null,
      "new_referer": null,
      "user_agent": "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Mobile Safari/537.36"
    },
    "mapped_to_loc_id": 56,
    "mapped_to_loc_name": "Kerala",
    "mapped_to_type": "domestic",
    "mapped_from_location_id": 20910,
    "mapped_from_location_name": "Kupwara",
    "start_date_month": 2,
    "adults": 3,
    "redis_key": "0ienf4peuu8yzmq3rnj9",
    "secret_key": "8cb0822f788b351d"
  },
  savePreferences: () => {
  }
}

class WorkerStub {
  constructor(stringUrl) {
    this.url = stringUrl;
    this.onmessage = () => {
    };
  }

  postMessage(msg) {
    this.onmessage(msg);
  }
}

const shallowWrapper = (props) => {
  window.Worker = WorkerStub;
  window.URL.createObjectURL = jest.fn();
  return shallow(<Nlp {...props} />);
}

describe('Should render correctly', () => {
  let props = { ...DEFAULT_PROPS };

  it('should render correctly', () => {
    const wrapper = shallowWrapper(props);
    expect(wrapper).toMatchSnapshot();
  });
});
