import destinations from './destinations';
import { DESTINATION_LIST_LOAD_SUCCESS } from '../../actionConstants';

const weekendDestinations =
  ['Agra', 'Chandigarh', 'Jammu', 'Delhi',
    'Jaipur', 'Dehradun', 'Mysore', 'Mumbai',
    'Pune', 'Bangalore', 'Tirupati', 'Mangalore',
    'Chennai', 'Kolkata', 'Ahmedabad', 'Baroda',
    'Bhopal', 'Indore', 'Lucknow', 'Nagpur'];

const mockFn = jest.fn(() => {
  return weekendDestinations.reduce((options, weekendDestination) => (
    {
      ...options,
      [weekendDestination]: {
        name: `From ${weekendDestination}`,
        url: `/places-near/${weekendDestination}`
      }
    }
  ), {});
});

describe('destination listing reducer', () => {
  const initialState = {
    "loaded": false,
    "list": [],
    "total": null,
    "defaultDestinationsToDisplay": 10,
    "destinationsToDisplay": 10,
    "currentPage": 1,
    "category": "",
    "weekendDestination": "",
    "options": {},
    "count": 49,
    "selectionListVisible": false,
    "selectionList": {
      "tripTypes": {
        "all": {
          "name": "All",
          "url": "/All-Places"
        },
        "romantic": {
          "name": "Romantic",
          "url": "/Romantic-Places"
        },
        "honeymoon": {
          "name": "Honeymoon",
          "url": "/Honeymoon-Places"
        },
        "adventure": {
          "name": "Adventure",
          "url": "/Adventure-Places"
        },
        "family": {
          "name": "Family",
          "url": "/Family-Places"
        },
        "nature": {
          "name": "Nature",
          "url": "/Nature-Places"
        },
        "wildlife": {
          "name": "Wildlife",
          "url": "/Wildlife-Places"
        },
        "friends": {
          "name": "Friends / Group",
          "url": "/Friends-Places"
        },
        "waterActivities": {
          "name": "Water Activities",
          "url": "/Water%20Activities-Places"
        }
      },
      "weekends": {
        "Agra": {
          "name": "From Agra",
          "url": "/places-near/Agra"
        },
        "Chandigarh": {
          "name": "From Chandigarh",
          "url": "/places-near/Chandigarh"
        },
        "Jammu": {
          "name": "From Jammu",
          "url": "/places-near/Jammu"
        },
        "Delhi": {
          "name": "From Delhi",
          "url": "/places-near/Delhi"
        },
        "Jaipur": {
          "name": "From Jaipur",
          "url": "/places-near/Jaipur"
        },
        "Dehradun": {
          "name": "From Dehradun",
          "url": "/places-near/Dehradun"
        },
        "Mysore": {
          "name": "From Mysore",
          "url": "/places-near/Mysore"
        },
        "Mumbai": {
          "name": "From Mumbai",
          "url": "/places-near/Mumbai"
        },
        "Pune": {
          "name": "From Pune",
          "url": "/places-near/Pune"
        },
        "Bangalore": {
          "name": "From Bangalore",
          "url": "/places-near/Bangalore"
        },
        "Tirupati": {
          "name": "From Tirupati",
          "url": "/places-near/Tirupati"
        },
        "Mangalore": {
          "name": "From Mangalore",
          "url": "/places-near/Mangalore"
        },
        "Chennai": {
          "name": "From Chennai",
          "url": "/places-near/Chennai"
        },
        "Kolkata": {
          "name": "From Kolkata",
          "url": "/places-near/Kolkata"
        },
        "Ahmedabad": {
          "name": "From Ahmedabad",
          "url": "/places-near/Ahmedabad"
        },
        "Baroda": {
          "name": "From Baroda",
          "url": "/places-near/Baroda"
        },
        "Bhopal": {
          "name": "From Bhopal",
          "url": "/places-near/Bhopal"
        },
        "Indore": {
          "name": "From Indore",
          "url": "/places-near/Indore"
        },
        "Lucknow": {
          "name": "From Lucknow",
          "url": "/places-near/Lucknow"
        },
        "Nagpur": {
          "name": "From Nagpur",
          "url": "/places-near/Nagpur"
        }
      }
    },
    "selectedItem": "all"
  };

  it('initializes with default state', () => {
    expect(destinations(initialState, {})).toEqual(initialState);
  });

  it('checks if `DESTINATION_LIST_LOAD_SUCCESS` is working as expected', () => {
    const initialState = {
      "loaded": true,
      "list": [
        {
          "id": 56,
          "bestTimeToVisit": [
            "10",
            "3"
          ],
          "name": "Kerala",
          "budget": "7,000",
          "maxDays": 8,
          "minDays": 5,
          "activityLabels": [
            {
              "id": 7015,
              "name": "Temple"
            },
            {
              "id": 6990,
              "name": "Resort"
            },
            {
              "id": 6965,
              "name": "Houseboat"
            }
          ],
          "imagePath": "https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_630/https://d2ox9n3d2kcupy.cloudfront.net/attachments/destinations/56/original/kerala.jpg",
          "imagekitUrl": "https://img.traveltriangle.com/stage/attachments/destinations/56/original/kerala.jpg",
          "flightsIncluded": false,
          "numberOfTravelers": 23669,
          "numberOfPackages": 49
        }
      ],
      "total": null,
      "defaultDestinationsToDisplay": 10,
      "destinationsToDisplay": 10,
      "currentPage": 1,
      "category": "Honeymoon",
      "options": {},
      "count": 132,
      "selectionListVisible": false,
      "selectionList": {
        "tripTypes": {
          "all": {
            "name": "All",
            "url": "/All-Places"
          },
          "romantic": {
            "name": "Romantic",
            "url": "/Romantic-Places"
          },
          "honeymoon": {
            "name": "Honeymoon",
            "url": "/Honeymoon-Places"
          },
          "adventure": {
            "name": "Adventure",
            "url": "/Adventure-Places"
          },
          "family": {
            "name": "Family",
            "url": "/Family-Places"
          },
          "nature": {
            "name": "Nature",
            "url": "/Nature-Places"
          },
          "wildlife": {
            "name": "Wildlife",
            "url": "/Wildlife-Places"
          },
          "friends": {
            "name": "Friends / Group",
            "url": "/Friends-Places"
          },
          "waterActivities": {
            "name": "Water Activities",
            "url": "/Water%20Activities-Places"
          }
        },
        "weekends": {
          "Agra": {
            "name": "From Agra",
            "url": "/places-near/Agra"
          },
          "Chandigarh": {
            "name": "From Chandigarh",
            "url": "/places-near/Chandigarh"
          },
          "Jammu": {
            "name": "From Jammu",
            "url": "/places-near/Jammu"
          },
          "Delhi": {
            "name": "From Delhi",
            "url": "/places-near/Delhi"
          },
          "Jaipur": {
            "name": "From Jaipur",
            "url": "/places-near/Jaipur"
          },
          "Dehradun": {
            "name": "From Dehradun",
            "url": "/places-near/Dehradun"
          },
          "Mysore": {
            "name": "From Mysore",
            "url": "/places-near/Mysore"
          },
          "Mumbai": {
            "name": "From Mumbai",
            "url": "/places-near/Mumbai"
          },
          "Pune": {
            "name": "From Pune",
            "url": "/places-near/Pune"
          },
          "Bangalore": {
            "name": "From Bangalore",
            "url": "/places-near/Bangalore"
          },
          "Tirupati": {
            "name": "From Tirupati",
            "url": "/places-near/Tirupati"
          },
          "Mangalore": {
            "name": "From Mangalore",
            "url": "/places-near/Mangalore"
          },
          "Chennai": {
            "name": "From Chennai",
            "url": "/places-near/Chennai"
          },
          "Kolkata": {
            "name": "From Kolkata",
            "url": "/places-near/Kolkata"
          },
          "Ahmedabad": {
            "name": "From Ahmedabad",
            "url": "/places-near/Ahmedabad"
          },
          "Baroda": {
            "name": "From Baroda",
            "url": "/places-near/Baroda"
          },
          "Bhopal": {
            "name": "From Bhopal",
            "url": "/places-near/Bhopal"
          },
          "Indore": {
            "name": "From Indore",
            "url": "/places-near/Indore"
          },
          "Lucknow": {
            "name": "From Lucknow",
            "url": "/places-near/Lucknow"
          },
          "Nagpur": {
            "name": "From Nagpur",
            "url": "/places-near/Nagpur"
          }
        }
      },
      "selectedItem": "honeymoon",
      "loading": false,
      "htmlTags": [
        {
          "id": 4941,
          "keyword": "Title",
          "value": "Top 131 Honeymoon Places In & Outside India | Honeymoon Places Out of India"
        },
        {
          "id": 4942,
          "keyword": "Description",
          "value": "Best honeymoon places within & outside India. Select yours from best honeymoon destinations as per your duration, things to do & budget for a remarkable holiday."
        }
      ]
    };
    const serverResponse = {
      "success": true,
      "code": 200,
      "metadata": null,
      "debug_data": {},
      "data": {
        "from_es": true,
        "total_count": 132,
        "canonicals": "Wildlife",
        "destinations": [
          {
            "id": 56,
            "half_desc": "One of India's most scenic states, Kerala is popular with traveler's for its beauty, holistically de",
            "about_text": "One of India's most scenic states, Kerala is popular with traveler's for its beauty, holistically developed and blessedly laidback states. Tourists flock to this south western edge of the country to enjoy beautiful sunsets over the Arabian Sea, and tread through a grand network of meandering waterways teeming with timeless lifestyles. Also there are plenty mountain adventures in the Cardamom Hills and the Nilgiri Hills. <br/>",
            "name": "Kerala",
            "agents": 409,
            "bookings": 23669,
            "best_time_to_visit": "10..3",
            "max_budget": 200000,
            "min_budget": 7000,
            "min_days": 5,
            "max_days": 8,
            "image_path": "https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_630/https://d2ox9n3d2kcupy.cloudfront.net/attachments/destinations/56/original/kerala.jpg",
            "imagekit_url": "https://img.traveltriangle.com/stage/attachments/destinations/56/original/kerala.jpg",
            "budget": "7,000",
            "num_of_packages": 62,
            "is_flight_present": false,
            "travelers": 23669,
            "activies": [
              {
                "id": 7015,
                "name": "Temple"
              },
              {
                "id": 6990,
                "name": "Resort"
              },
              {
                "id": 6965,
                "name": "Houseboat"
              }
            ],
            "hotel_details": [
              {
                "id": 0,
                "image": "https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_300/https://d1fkybxq1uivt8.cloudfront.net/attachments/pictures/200222/original/33781062.jpg",
                "imagekit_url": "https://img.traveltriangle.com/stage/attachments/pictures/200222/original/33781062.jpg",
                "alt": "PJ Princess Regency"
              },
              {
                "id": 1,
                "image": "https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_300/https://d1fkybxq1uivt8.cloudfront.net/attachments/pictures/197838/original/36578047.jpg",
                "imagekit_url": "https://img.traveltriangle.com/stage/attachments/pictures/197838/original/36578047.jpg",
                "alt": "Le Meridien Kochi"
              },
              {
                "id": 2,
                "image": "https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_300/https://d1fkybxq1uivt8.cloudfront.net/attachments/pictures/199781/original/10675265.jpg",
                "imagekit_url": "https://img.traveltriangle.com/stage/attachments/pictures/199781/original/10675265.jpg",
                "alt": "Hotel Presidency"
              },
              {
                "id": 3,
                "image": "https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_300/https://d1fkybxq1uivt8.cloudfront.net/attachments/pictures/204168/original/33961455.jpg",
                "imagekit_url": "https://img.traveltriangle.com/stage/attachments/pictures/204168/original/33961455.jpg",
                "alt": "Ramada Resort"
              },
              {
                "id": 4,
                "image": "https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_300/https://d1fkybxq1uivt8.cloudfront.net/attachments/pictures/196164/original/17074653.jpg",
                "imagekit_url": "https://img.traveltriangle.com/stage/attachments/pictures/196164/original/17074653.jpg",
                "alt": "Dream Catcher Home Stay"
              }
            ],
            "things_to_do_details": [
              {
                "id": null,
                "image": "https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_630/https://d2ox9n3d2kcupy.cloudfront.net/attachments/destinations/56/original/kerala.jpg",
                "imagekit_url": "https://img.traveltriangle.com/stage/attachments/destinations/56/original/kerala.jpg"
              },
              {
                "id": null,
                "image": "http://dzh0sbrwpq3wf.cloudfront.net/destinationpages/big_images/kerala1_1300_500.jpg",
                "imagekit_url": "https://img.traveltriangle.com/stage/"
              },
              {
                "id": null,
                "image": "http://dzh0sbrwpq3wf.cloudfront.net/destinationpages/big_images/kerala2_1300_500.jpg",
                "imagekit_url": "https://img.traveltriangle.com/stage/"
              },
              {
                "id": null,
                "image": "http://dzh0sbrwpq3wf.cloudfront.net/destinationpages/big_images/kerala3_1300_500.jpg",
                "imagekit_url": "https://img.traveltriangle.com/stage/"
              }
            ],
            "social_icons": {
              "facebook_url": "https://www.facebook.com/sharer.php?u=https://browsing-qa1.ttdev.in/travel-to/56-Kerala",
              "twitter_url": "https://twitter.com/intent/tweet?text=Kerala&url=https://browsing-qa1.ttdev.in/travel-to/56-Kerala",
              "google_plus_url": "https://plus.google.com/share?text=Kerala&url=https://browsing-qa1.ttdev.in/travel-to/56-Kerala"
            },
            "more_about_url": "/travel-to/56-Kerala"
          }
        ],
        "trip_type": {
          "id": 9,
          "name": "Wildlife",
          "html_tags": [
            {
              "id": 4939,
              "keyword": "Title",
              "value": "Best 131 Wildlife Places in & outside India | wildlife in India - Travel Triangle"
            },
            {
              "id": 4940,
              "keyword": "Description",
              "value": "Best wildlife Places within and outside India. Explore and experience the best of wildlife in India as per your budget, duration, and list of activities."
            }
          ],
          "faqs": [
            {
              "id": 5496,
              "question": "Which are the best national parks that one can visit in India?",
              "answer": "<p>The best national parks in India are as follows:</p>\r\n<p>Jim Corbett National Park, Uttarakhand</p>\r\n<p>Kaziranga National Park, Assam</p>\r\n<p>Ranthambore National Park, Rajasthan</p>\r\n<p>Gir Forest National Park, Gujarat</p>\r\n<p>Periyar National Park, Kerala</p>\r\n<p>&nbsp;</p>"
            }
          ]
        },
        "faqs": [
          {
            "id": 1,
            "question": "What all activities can be enjoyed at the Casela Nature Park?",
            "answer": "<p><span id=\"docs-internal-guid-41e52b3c-ef70-69fb-de19-f7a9ec8e768b\"><span style=\"font-size: 14.6667px; font-family: Calibri; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;\">The Casela Nature Park offers a plethora of activities to enjoy like the Walk with Lions, Toboggan slide, Walk through the aviary, Giraffe viewing, Camel viewing and the Petting farm among a few others. One could also indulge in thrilling additional activities like the Big Cats Interactions, Interaction with Rhinos, Segway Safari Trip, Safari Quad Biking, Zip Lining and Safari Jeep Trip to take the adventure to a whole new level.</span></span></p>",
            "level": "package"
          }
        ]
      },
      "error_details": [],
      "errors": []
    };

    const expectedData = {
      "loaded": true,
      "list": [
        {
          "id": 56,
          "bestTimeToVisit": [
            "10",
            "3"
          ],
          "name": "Kerala",
          "budget": "7,000",
          "maxDays": 8,
          "minDays": 5,
          "activityLabels": [
            {
              "id": 7015,
              "name": "Temple"
            },
            {
              "id": 6990,
              "name": "Resort"
            },
            {
              "id": 6965,
              "name": "Houseboat"
            }
          ],
          "imagePath": "https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_630/https://d2ox9n3d2kcupy.cloudfront.net/attachments/destinations/56/original/kerala.jpg",
          "imagekitUrl": "https://img.traveltriangle.com/stage/attachments/destinations/56/original/kerala.jpg",
          "flightsIncluded": false,
          "numberOfTravelers": 23669,
          "numberOfPackages": 62
        }
      ],
      "total": null,
      "defaultDestinationsToDisplay": 10,
      "destinationsToDisplay": 10,
      "currentPage": 1,
      "category": "Honeymoon",
      "options": {},
      "count": 132,
      "selectionListVisible": false,
      "selectionList": {
        "tripTypes": {
          "all": {
            "name": "All",
            "url": "/All-Places"
          },
          "romantic": {
            "name": "Romantic",
            "url": "/Romantic-Places"
          },
          "honeymoon": {
            "name": "Honeymoon",
            "url": "/Honeymoon-Places"
          },
          "adventure": {
            "name": "Adventure",
            "url": "/Adventure-Places"
          },
          "family": {
            "name": "Family",
            "url": "/Family-Places"
          },
          "nature": {
            "name": "Nature",
            "url": "/Nature-Places"
          },
          "wildlife": {
            "name": "Wildlife",
            "url": "/Wildlife-Places"
          },
          "friends": {
            "name": "Friends / Group",
            "url": "/Friends-Places"
          },
          "waterActivities": {
            "name": "Water Activities",
            "url": "/Water%20Activities-Places"
          }
        },
        "weekends": {
          "Agra": {
            "name": "From Agra",
            "url": "/places-near/Agra"
          },
          "Chandigarh": {
            "name": "From Chandigarh",
            "url": "/places-near/Chandigarh"
          },
          "Jammu": {
            "name": "From Jammu",
            "url": "/places-near/Jammu"
          },
          "Delhi": {
            "name": "From Delhi",
            "url": "/places-near/Delhi"
          },
          "Jaipur": {
            "name": "From Jaipur",
            "url": "/places-near/Jaipur"
          },
          "Dehradun": {
            "name": "From Dehradun",
            "url": "/places-near/Dehradun"
          },
          "Mysore": {
            "name": "From Mysore",
            "url": "/places-near/Mysore"
          },
          "Mumbai": {
            "name": "From Mumbai",
            "url": "/places-near/Mumbai"
          },
          "Pune": {
            "name": "From Pune",
            "url": "/places-near/Pune"
          },
          "Bangalore": {
            "name": "From Bangalore",
            "url": "/places-near/Bangalore"
          },
          "Tirupati": {
            "name": "From Tirupati",
            "url": "/places-near/Tirupati"
          },
          "Mangalore": {
            "name": "From Mangalore",
            "url": "/places-near/Mangalore"
          },
          "Chennai": {
            "name": "From Chennai",
            "url": "/places-near/Chennai"
          },
          "Kolkata": {
            "name": "From Kolkata",
            "url": "/places-near/Kolkata"
          },
          "Ahmedabad": {
            "name": "From Ahmedabad",
            "url": "/places-near/Ahmedabad"
          },
          "Baroda": {
            "name": "From Baroda",
            "url": "/places-near/Baroda"
          },
          "Bhopal": {
            "name": "From Bhopal",
            "url": "/places-near/Bhopal"
          },
          "Indore": {
            "name": "From Indore",
            "url": "/places-near/Indore"
          },
          "Lucknow": {
            "name": "From Lucknow",
            "url": "/places-near/Lucknow"
          },
          "Nagpur": {
            "name": "From Nagpur",
            "url": "/places-near/Nagpur"
          }
        }
      },
      "selectedItem": "honeymoon",
      "loading": false,
      "htmlTags": [
        {
          "id": 4939,
          "keyword": "Title",
          "value": "Best 131 Wildlife Places in & outside India | wildlife in India - Travel Triangle"
        },
        {
          "id": 4940,
          "keyword": "Description",
          "value": "Best wildlife Places within and outside India. Explore and experience the best of wildlife in India as per your budget, duration, and list of activities."
        }
      ]
    };
    expect(destinations(initialState, { type: DESTINATION_LIST_LOAD_SUCCESS, result: serverResponse }))
      .toEqual(expectedData);
  });

});
