import quotes from './quoteList';
import { LOAD, LOAD_SUCCESS, LOAD_FAIL } from '../actions/quoteList';
import { BOOK_NOW_SUCCESS, REJECT_QUOTE_CONFIRM_SUCCESS } from "../actions/quoteActivities";
import {
  quote1, quote2,
  expectedDiscountInformation, expectedAgentDetails, expectedQuotesList
} from './testData';
import { getDiscountInformation, getAgentDetails, getQuotesList } from "./quoteList";

describe('comparePackages reducer', () => {
  const initialState = {
    loaded: false,
    loading: false,
    data: {
      quotes: {},
    }
  };

  it('initializes with default state', () => {
    expect(quotes(initialState, {})).toEqual(initialState);
  });

  it('checks if `Quotes load success` is working as expected', () => {
    const serverResponse = {
      status: {
        overrides: {
          forceLogout: false,
          forceUpdate: false,
          forcePasswordChange: false
        }
      },
      metaData: {
        offset: null,
        limit: null,
        sortBy: null,
        sortOrder: null,
        view: 'full'
      },
      debugData: {},
      data: {
        quotes: [
          quote1,
          quote2,
        ]
      },
      code: 200,
      errorDetails: [],
      errors: []
    };

    const expectedData = {
      loading: false,
      loaded: true,
      apiFail: false,
      data: {
        quotes: {
          7124216: quote1,
          7124252: quote2
        },
        sortOrder: [
          7124216,
          7124252
        ]
      },
      errors: null
    };
    expect(quotes(initialState, { type: LOAD_SUCCESS, result: serverResponse }))
      .toEqual(expectedData);
  });

  it('checks if `BOOK_NOW_SUCCESS` is working as expected', () => {
    const initialState = {
      loading: false,
      loaded: true,
      apiFail: false,
      data: {
        quotes: {
          7124216: quote1,
          7124252: quote2
        },
      },
      bookNowSuccess: false,
      rejectQuoteSuccess: false,
      reactivateQuoteSuccess: false,
      cancelBookingSuccess: false,
      reactivateBookingSuccess: false,
      errors: null
    };

    const serverResponse = {
      debug_data: {},
      data: {
        quote: {
          id: 7124252,
          status: 'chosen'
        },
      },
      code: 200,
      error_details: [],
      errors: []
    };

    const quote2Expected = { ...quote2, status: serverResponse.data.quote.status };

    const expectedData = {
      loading: false,
      loaded: true,
      apiFail: false,
      data: {
        quotes: {
          7124216: quote1,
          7124252: quote2Expected
        },
        sortOrder: [
          7124216,
          7124252
        ]
      },
      bookNowSuccess: true,
      rejectQuoteSuccess: false,
      reactivateQuoteSuccess: false,
      cancelBookingSuccess: false,
      reactivateBookingSuccess: false,
      errors: null
    };
    expect(quotes(initialState, { type: BOOK_NOW_SUCCESS, result: serverResponse }))
      .toEqual(expectedData);
  });

  it('checks if `REJECT_QUOTE_CONFIRM_SUCCESS` is working as expected', () => {
    const initialState = {
      loading: false,
      loaded: true,
      apiFail: false,
      data: {
        quotes: {
          7124216: quote1,
          7124252: quote2
        },
      },
      bookNowSuccess: false,
      rejectQuoteSuccess: false,
      reactivateQuoteSuccess: false,
      cancelBookingSuccess: false,
      reactivateBookingSuccess: false,
      errors: null
    };

    const serverResponse = {
      status: {
        overrides: {
          force_logout: false,
          force_update: false,
          force_password_change: false
        }
      },
      meta_data: {
        offset: null,
        limit: null,
        sort_by: null,
        sort_order: null,
        view: null
      },
      debug_data: {},
      data: {
        quote: {
          id: 7124216,
          status: 'declined',
          cabs_text: 'ALL TRANSFERS AND SIGHTSEEING ON SIC  BASIS',
          days: 2,
          nights: 1,
          inclusions_text: 'Accomodation : Double\nMeal plan : Breakfast\nMeal plan : Dinner\nWelcome Drink\nWifi Connection\nTransfers (Railway/Airport)\nTv with cable connection\nEnglish Speaking Driver\nTransfers (Railway/Airport) : Arrival\nTransfers (Railway/Airport) : Departure\nUse of Swimming Pool and Tanning Beds\nCab : SIC\nSightseeing (SIC BASIS SOUTH GOA & NORTH GOA)\nUse of gymnasium\nGovernment Taxes/VAT/ Service Charges\nOthers : Other Inclusions (NONE)',
          exclusions_text: 'Accomodation : Single\nAccomodation : Triple\nMeal plan : Lunch\nCab : Private\nTrip suppliments (1)Waterfall Trip \r\n\r\nRs.1800 per head\r\n7:00am to 6:00pm ( Everyday) \r\n\r\nActivities:- Harvlem fall, Ancient caves, Tamdi surla temple, Spice plantation, Elephant Ride/Wash\r\n\r\nInclusions:- AC Transport, Lunch at Spice, mineral water\r\n2)Adventure Boat Trip\r\n\r\nRs.1200/- per head\r\nTrip1 :- 10:00 am to 1:00pm\r\nTrip 2:- 3:00 pm to 6:00 pm\r\n \r\nActivities :-  Kayaking, Fishing, Sailing on SUP Board, Sightseeing of Famous attractions by Boat\r\n \r\nInclusions:- Snacks, Chilled Beers *, Mineral Waters, soft drinks\r\n3)White Water Rafting\r\n\r\nRs.2800/- per head\r\n\r\nTrip1 :- 09:30 am\r\nTrip 2:- 2:30 pm\r\n \r\nActivities:- Water rafting with all rafting equipments ( 10kms) , Harvalem waterfall, ancient caves\r\n \r\nInclusions:- Pickup and Drop, Mineral Water\r\n4)Water Sports in Backwater\r\n\r\nRs.2800/- per head\r\n\r\nActivities:- Round Leisure Ride, Hydroplane, Motor Boat,  Pedal Boat, Banana Boat Ride, Jet ski , Swan Boat, kayaking, Hummer Boat, Fishing, Crab Catching\r\n\r\nInclusions:- Snacks and Soft Drinks)\nOthers : Other Exclusions (OTHER THEN MENTIONEDkjj)',
          pricing_info: {
            price: 7499,
            price_in_rupee: 7499,
            flight_cost: 0,
            visa_cost: 0,
            per_person_budget: 7499,
            discount: 0,
            currency: 'Rupee',
            per_person_text: 'per person',
            total_price: 14998
          },
          hotel_text: 'Night 2, Sunkissed Plaza, Calangute,  Deluxe ,<br/>INCLUDES<br/>ACCOMMODATION<br/>TRANSFERS<br/>BREAKFAST AND DINNER<br/>1 DAY S/S OF NORTH GOA BY AC COACH<br/>\r\n\r\nSame Price Option - Night 2, alor grande, Candolim,  Deluxe ,\r\n\r\nSame Price Option - Night 2, Stay Simple Peninsula Beach Resort, Calangute,  Deluxe ,\r\n\r\nSame Price Option - Night 2, rahi coral, Calangute,  Deluxe ,',
          flights_text: '',
          invoice_show_url: '',
          status_updates: [
            {
              text: 'You rejected this quote. Reason: Want a different itinerary',
              time: '2019-02-06T12:31:44+05:30',
              id: -1,
              notification_sub_category: 'decline_reason'
            }
          ],
          updated_at: '2019-02-06T12:31:44+05:30',
          version_count: 1,
          agent: {
            id: 166138,
            created_at: '2015-05-24T07:43:41+05:30',
            updated_at: '2019-01-19T13:36:28+05:30',
            company_name: 'Wander Globe Inc ',
            display_name: 'Wander Globe Inc ',
            profile_picture: 'https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_300/https://dknfdeb8v69ms.cloudfront.net/attachments/tr_a_profiles/954/original/logo.gif',
            display_rating: 4.5,
            agents_converted_trips: 155,
            revenue_earned: 10850000,
            description: 'Wander Globe is India\'s one of the renowned tour company that provides a number of special travel packages and deals on tourist destinations in India and across the world. Our travel website offers full range of travel services and products to travelers who are visiting India. Wander Globe offers personalized travel option, tailor-made to your special requirements. We make simple itineraries in an interesting way, bringing in a whole host of innovative ideas. We invite you to TRAVEL WITH US!',
            rating_stats: {
              one_star: 0,
              one_star_percentage: 0,
              three_star: 6,
              three_star_percentage: 8,
              four_star: 36,
              five_star_percentage: 44,
              two_star: 0,
              two_star_percentage: 0,
              four_star_percentage: 48,
              five_star: 33,
              total_positive_rating: 75,
              total_rating: 75,
              positive_rating: 69,
              positive_rating_percentage: 92,
              rating_text: 'Superb Reviews'
            },
            reviews_count: 75,
            email: 'wanderglobedelhi@gmail.com',
            encrypted_id: '3136363133382d57616e-Wander-Globe-Inc',
            testimonial_url: 'http://bookings-qa1.ttdev.in/agents/3136363133382d57616e-Wander-Globe-Inc',
            full_address: 'C/3 ,PRABHU RESIDENCY PORVORIM GOA..403501, Goa, Goa, India, 403501',
            mobile_number: '9890676656',
            landline_number: ''
          }
        }
      },
      code: 200,
      error_details: [],
      errors: []
    };

    const quote1Expected = { ...quote1, status: serverResponse.data.quote.status };

    const expectedData = {
      loading: false,
      loaded: true,
      apiFail: false,
      data: {
        quotes: {
          7124216: quote1Expected,
          7124252: quote2
        },
        sortOrder: [
          7124252,
          7124216
        ]
      },
      bookNowSuccess: false,
      rejectQuoteSuccess: true,
      reactivateQuoteSuccess: false,
      cancelBookingSuccess: false,
      reactivateBookingSuccess: false,
      errors: null
    };
    expect(quotes(initialState, { type: REJECT_QUOTE_CONFIRM_SUCCESS, result: serverResponse }))
      .toEqual(expectedData);
  });

  it('check if correct DiscountInformation is return', () => {
    expect(getDiscountInformation(quote1)).toEqual(expectedDiscountInformation);
  });

  it('check if correct AgentDetails is return', () => {
    expect(getAgentDetails(quote1)).toEqual(expectedAgentDetails);
  });

  it('check if correct QuoteList is return', () => {
    expect(getQuotesList({ "7124216": quote1 })).toEqual(expectedQuotesList);
  });

});
