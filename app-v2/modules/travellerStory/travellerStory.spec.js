import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { TRAVELLER_STORY_LOAD_SUCCESS } from './action';

import TravellerStory from './TravellerStory';
import { travellerStories } from './reducer';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = [
  {
    "ID": "128428",
    "post_author": "78",
    "post_date": "2018-07-24 12:28:43",
    "post_date_gmt": "2018-07-24 06:58:43",
    "post_content": "Calangute, the most enchanting town in North Goa has been a major crowd puller and a revenue spinner for Goa tourism industry. Known for its beautiful beach that has caught the fancy of domestic as well as the international travelers.",
    "post_title": "8 Resorts in Calangute That'll Ensure An Unadulterated Beach Holiday Experience",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "resorts-in-calangute",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2018-07-31 12:31:33",
    "post_modified_gmt": "2018-07-31 07:01:33",
    "post_content_filtered": "",
    "post_parent": "0",
    "guid": "https://traveltriangle.com/blog/?p=128428",
    "menu_order": "0",
    "post_type": "post",
    "post_mime_type": "",
    "comment_count": "0",
    "all_tagname": "bot",
    "url_link": "https://traveltriangle.com/blog/resorts-in-calangute/",
    "post_author_name": "Utpala Biswas",
    "thumbnail_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/cover-image-calangute-resort-400x210.jpg",
      "altText": "Calangute resort"
    },
    "large_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/cover-image-calangute-resort.jpg",
      "altText": "Calangute resort"
    }
  },
  {
    "ID": "128347",
    "post_author": "113",
    "post_date": "2018-07-27 11:08:40",
    "post_date_gmt": "2018-07-27 05:38:40",
    "post_content": "North Carolina is a beautiful state. Its Atlantic shore gives way to the Appalachian Mountains in the West, while the great American cities such as Charlotte and Raleigh are right in the center. North Carolina\u2019s shore is full of barrier islands that jut into the ocean",
    "post_title": "10 Magical North Carolina Beaches For A Laid Back Vacation On Remote Shores",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "north-carolina-beaches",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2018-07-31 13:07:29",
    "post_modified_gmt": "2018-07-31 07:37:29",
    "post_content_filtered": "",
    "post_parent": "0",
    "guid": "https://traveltriangle.com/blog/?p=128347",
    "menu_order": "0",
    "post_type": "post",
    "post_mime_type": "",
    "comment_count": "0",
    "all_tagname": "bot",
    "url_link": "https://traveltriangle.com/blog/north-carolina-beaches/",
    "post_author_name": "Ruchika Anand",
    "thumbnail_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/Kill-Devil-Hills-400x267.jpg",
      "altText": "Kill Devil Hills north carolina"
    },
    "large_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/Kill-Devil-Hills.jpg",
      "altText": "Kill Devil Hills north carolina"
    }
  },
  {
    "ID": "128319",
    "post_author": "78",
    "post_date": "2018-07-24 10:53:40",
    "post_date_gmt": "2018-07-24 05:23:40",
    "post_content": "On the way to the popular tourist spots, there are many small turnabouts that take you to some lesser known places. Though Belgaum is not completely unknown, it certainly is a road less traveled. ",
    "post_title": "3 Resorts In Belgaum That Let You Experience The Calmness Of This Laidback Town",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "resorts-in-belgaum",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2018-07-31 11:06:53",
    "post_modified_gmt": "2018-07-31 05:36:53",
    "post_content_filtered": "",
    "post_parent": "0",
    "guid": "https://traveltriangle.com/blog/?p=128319",
    "menu_order": "0",
    "post_type": "post",
    "post_mime_type": "",
    "comment_count": "0",
    "all_tagname": "bot",
    "url_link": "https://traveltriangle.com/blog/resorts-in-belgaum/",
    "post_author_name": "Utpala Biswas",
    "thumbnail_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/cover-image-belgaumr-esorts-400x210.jpg",
      "altText": "a lush lawn of a Belgaum resort"
    },
    "large_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/cover-image-belgaumr-esorts.jpg",
      "altText": "a lush lawn of a Belgaum resort"
    }
  },
  {
    "ID": "128222",
    "post_author": "113",
    "post_date": "2018-07-27 17:28:43",
    "post_date_gmt": "2018-07-27 11:58:43",
    "post_content": "A European holiday typically involves exploring popular destinations like France, Italy, Germany, and Spain, all packed with seas of tourists. Well, trippers, there are more than 40 countries forming the European continent where each offers something unique",
    "post_title": "10 Offbeat Destinations In Europe Straight Out Of Fairy Tales",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "offbeat-destinations-in-europe",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2018-07-30 17:31:42",
    "post_modified_gmt": "2018-07-30 12:01:42",
    "post_content_filtered": "",
    "post_parent": "0",
    "guid": "https://traveltriangle.com/blog/?p=128222",
    "menu_order": "0",
    "post_type": "post",
    "post_mime_type": "",
    "comment_count": "0",
    "all_tagname": "bot",
    "url_link": "https://traveltriangle.com/blog/offbeat-destinations-in-europe/",
    "post_author_name": "Shilpa Kulkarni",
    "thumbnail_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/Transylvania-Romania-street-400x268.jpg",
      "altText": "Transylvania, Romania street"
    },
    "large_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/Transylvania-Romania-street.jpg",
      "altText": "Transylvania, Romania street"
    }
  },
  {
    "ID": "128151",
    "post_author": "39",
    "post_date": "2018-07-28 17:34:35",
    "post_date_gmt": "2018-07-28 12:04:35",
    "post_content": "Wonderful amusement parks, shopping arcades, dazzling nightlife scene, a stunning coastline with turquoise blue water, beaches, and buzzing shacks are fascinating, but one thing that makes Phuket a wonderland is the wide range of water sports offered to tourists. ",
    "post_title": "10 Exciting Water Sports In Phuket You Should Not Miss",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "water-sports-in-phuket",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2018-07-30 17:48:40",
    "post_modified_gmt": "2018-07-30 12:18:40",
    "post_content_filtered": "",
    "post_parent": "0",
    "guid": "https://traveltriangle.com/blog/?p=128151",
    "menu_order": "0",
    "post_type": "post",
    "post_mime_type": "",
    "comment_count": "0",
    "all_tagname": "bot",
    "url_link": "https://traveltriangle.com/blog/water-sports-in-phuket/",
    "post_author_name": "Sukanya Sen",
    "thumbnail_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/cover-image-water-sports-in-phuket-123-400x210.jpg",
      "altText": "Water sports in Phuket"
    },
    "large_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/cover-image-water-sports-in-phuket-123.jpg",
      "altText": "Water sports in Phuket"
    }
  },
  {
    "ID": "128043",
    "post_author": "59",
    "post_date": "2018-07-27 14:13:28",
    "post_date_gmt": "2018-07-27 08:43:28",
    "post_content": "Being a bordering city, Amritsar is of tremendous national significance as it holds the renowned <strong>Wagah ceremony</strong> on India-Pakistan border at the close of each day. Moreover, the city is an abode to the glorious Golden Temple, the most pious religious site for Sikhs in India. It is also famous for <strong>Jallianwala Bagh</strong>, where hundreds of innocent and unarmed Indians were massacred by the troops of British Indian Army in 1919.",
    "post_title": "6 Places To Visit in Amritsar For A Glimpse Of The Momentous Past",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "places-to-visit-in-amritsar",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2018-07-31 09:23:31",
    "post_modified_gmt": "2018-07-31 03:53:31",
    "post_content_filtered": "",
    "post_parent": "0",
    "guid": "https://traveltriangle.com/blog/?p=128043",
    "menu_order": "0",
    "post_type": "post",
    "post_mime_type": "",
    "comment_count": "0",
    "all_tagname": "bot",
    "url_link": "https://traveltriangle.com/blog/places-to-visit-in-amritsar/",
    "post_author_name": "Anupama Rai",
    "thumbnail_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/6-Places-To-Visit-in-Amritsar-For-A-Glimpse-Of-The-Momentous-Past-ss30072018-400x250.png",
      "altText": "6 Places To Visit in Amritsar For A Glimpse Of The Momentous Past ss30072018"
    },
    "large_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/6-Places-To-Visit-in-Amritsar-For-A-Glimpse-Of-The-Momentous-Past-ss30072018.png",
      "altText": "6 Places To Visit in Amritsar For A Glimpse Of The Momentous Past ss30072018"
    }
  },
  {
    "ID": "127963",
    "post_author": "53",
    "post_date": "2018-07-27 13:07:15",
    "post_date_gmt": "2018-07-27 07:37:15",
    "post_content": "Rich Belgian Chocolate is a must on the agenda of shopping in Brussels! But the capital city of Belgium has much more to offer for shopaholics than just the best ever chocolates in the world. The European city is high on fashion and is home to some of the finest boutiques and designers",
    "post_title": "10 Places For Shopping In Brussels That Will Give You A Shopper\u2019s High",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "shopping-in-brussels",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2018-07-30 13:26:53",
    "post_modified_gmt": "2018-07-30 07:56:53",
    "post_content_filtered": "",
    "post_parent": "0",
    "guid": "https://traveltriangle.com/blog/?p=127963",
    "menu_order": "0",
    "post_type": "post",
    "post_mime_type": "",
    "comment_count": "0",
    "all_tagname": "bot",
    "url_link": "https://traveltriangle.com/blog/shopping-in-brussels/",
    "post_author_name": "Shilpa Kulkarni",
    "thumbnail_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/brussels-chocolates-shopping-belgium-400x266.jpg",
      "altText": "brussels chocolates shopping belgium"
    },
    "large_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/brussels-chocolates-shopping-belgium.jpg",
      "altText": "brussels chocolates shopping belgium"
    }
  },
  {
    "ID": "127809",
    "post_author": "53",
    "post_date": "2018-07-27 11:50:16",
    "post_date_gmt": "2018-07-27 06:20:16",
    "post_content": "Egypt is the site of one of the oldest civilizations in the world. Dating back to 5500 BC, the country was once ruled by the mystical pharaohs. Later, the country was also an important outpost for the Greek and Roman empires. The city of Alexandria was founded by Alexander the Great himself in 332 BC",
    "post_title": "10 Mystical Places To Visit In Egypt, The Gift Of The Nile!",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "places-to-visit-in-egypt",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2018-07-30 11:59:45",
    "post_modified_gmt": "2018-07-30 06:29:45",
    "post_content_filtered": "",
    "post_parent": "0",
    "guid": "https://traveltriangle.com/blog/?p=127809",
    "menu_order": "0",
    "post_type": "post",
    "post_mime_type": "",
    "comment_count": "0",
    "all_tagname": "bot",
    "url_link": "https://traveltriangle.com/blog/places-to-visit-in-egypt/",
    "post_author_name": "Ruchika Anand",
    "thumbnail_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/Rock-Temples-of-Abu-Simbel-in-egypt-400x235.jpg",
      "altText": "Rock Temples of Abu Simbel in egypt"
    },
    "large_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/Rock-Temples-of-Abu-Simbel-in-egypt.jpg",
      "altText": "Rock Temples of Abu Simbel in egypt"
    }
  },
  {
    "ID": "127762",
    "post_author": "78",
    "post_date": "2018-07-28 10:45:16",
    "post_date_gmt": "2018-07-28 05:15:16",
    "post_content": "The capital of Denmark, Copenhagen reflects heritage, culture and exuberance in every aspect. The city never fails to allure people with its majestic museums, medieval palaces, arcades and buzzing streets. ",
    "post_title": "10 Copenhagen Restaurants To Satisfy Your Craving Right!",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "copenhagen-restaurants",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2018-07-30 12:19:02",
    "post_modified_gmt": "2018-07-30 06:49:02",
    "post_content_filtered": "",
    "post_parent": "0",
    "guid": "https://traveltriangle.com/blog/?p=127762",
    "menu_order": "0",
    "post_type": "post",
    "post_mime_type": "",
    "comment_count": "0",
    "all_tagname": "bot",
    "url_link": "https://traveltriangle.com/blog/copenhagen-restaurants/",
    "post_author_name": "Kiran Bisht",
    "thumbnail_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/Cover-image-Copenhagen-400x210.jpg",
      "altText": "A restaurant in Copenhagen"
    },
    "large_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/Cover-image-Copenhagen.jpg",
      "altText": "A restaurant in Copenhagen"
    }
  },
  {
    "ID": "127757",
    "post_author": "53",
    "post_date": "2018-07-27 10:34:20",
    "post_date_gmt": "2018-07-27 05:04:20",
    "post_content": "Be it Sydney Mardi Gras or New Year\u2019s Eve, Australia is one of the most fun countries on the planet that comes alive during. The country, famous for its diverse and rich wildlife with incomparable landscapes, has a strong cultural and folk scene. Australians love to party, so you\u2019ll find loads of places to hangout and events to chill",
    "post_title": "10 Thrilling Festivals In Australia That Will Give You Major FOMO!",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "festivals-in-australia",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2018-07-30 10:51:01",
    "post_modified_gmt": "2018-07-30 05:21:01",
    "post_content_filtered": "",
    "post_parent": "0",
    "guid": "https://traveltriangle.com/blog/?p=127757",
    "menu_order": "0",
    "post_type": "post",
    "post_mime_type": "",
    "comment_count": "0",
    "all_tagname": "bot",
    "url_link": "https://traveltriangle.com/blog/festivals-in-australia/",
    "post_author_name": "Ruchika Anand",
    "thumbnail_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/Sydney-Mardi-Gras-400x266.jpg",
      "altText": "Sydney Mardi Gras"
    },
    "large_image": {
      "srcLink": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/Sydney-Mardi-Gras.jpg",
      "altText": "Sydney Mardi Gras"
    }
  }];

const shallowWrapperPlacesToVisit = (props) => {
  return shallow(<TravellerStory travellerStories={props} />);
};

describe('PlacesToVisit module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const action = {
      type: TRAVELLER_STORY_LOAD_SUCCESS,
      result: props
    };
    const normalizeResp = travellerStories(undefined, action);
    const wrapper = shallowWrapperPlacesToVisit(normalizeResp.travellerStories);
    expect(wrapper).toMatchSnapshot();
  });
});
