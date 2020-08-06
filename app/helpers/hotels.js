import { parse, stringify } from 'query-string';
import _isEmpty from 'lodash/isEmpty';
import { useQuery } from 'containers/Listing/parseFilters';
import { dayDifference, format, validateDate } from './DateTime';
import { getCookieFromServer } from './FormDataFormatter';
import { INVENTORY_SEARCHES, ORGANISM_CLICKED_HOTELS } from 'actions/segmentEvents';

export const Constants = {
  PRIMARY_PIVOT: 'primary_pivot',
  SECONDARY_PIVOT: 'secondary_pivot',
  DEFAULT_HOTELS: 'hotels',
  PROPERTY_TYPE: 'property_types',
  STAR_RATING: 'star_ratings',
  THEMES: 'themes'
};

const filterOptions = [
  'star_ratings[]',
  'property_types[]',
  'themes[]',
  'price_levels[]',
  'trip_types[]',
  'user_ratings[]',
  'city[]',
  'nearby_landmarks[]',
  'facilities_ids[]'
];

export const starMapping = [
  { title: '5-star', value: '5' },
  { title: '4-star', value: '4' },
  { title: '3-star', value: '3' },
  { title: '2-star', value: '2' },
  { title: '1-star', value: '1' },
];

const filterConstants = {
  [Constants.STAR_RATING]: ['7-star', '5-star', '4-star', '3-star', '2-star', '1-star'],
  [Constants.THEMES]: ['beach', 'boutique', 'luxury', 'budget', 'honeymoon', 'family', 'water', 'spa', 'pool',
    'luxury-beach', 'family-beach'],
  [Constants.PROPERTY_TYPE]: ['hotels', 'resorts', 'apartments', 'guest-houses', 'hostels',
    'villas', 'cottages', 'home-stays', 'hotels-and-resorts']
};

/**
 * It takes the following parameters from the current url and returns the primary and secondary pivot along with
 * selected filters from url
 * @param filterType - secondary filter option parsed from url
 * @param propertyType - primary filter option parsed from url
 * @param destination - current country/city of the page
 * @param landmark - current landmark of the page (if any)
 * @param query - query string
 * @returns {{primaryPivot: string, secondaryPivot: string, newQuery: {}}}
 */
export const parseHotelUrl = ({ filterType, propertyType, destination, country, landmark, query = {} }) => {
  let secondaryPivot = {};
  const newQuery = { ...query };

  if (filterType) {
    const filterKeys = Object.keys(filterConstants);
    // TODO: Priynka Change to for...in
    for (let i = 0; i < filterKeys.length; i++) {
      const filterKey = filterKeys[i];
      if (filterConstants[filterKey].indexOf(filterType) > -1) {
        secondaryPivot = { [filterKey]: filterType };
        break;
      }
    }
  }

  if (!_isEmpty(secondaryPivot)) {
    const key = Object.keys(secondaryPivot)[0];
    newQuery[`${key}[]`] = key === Constants.STAR_RATING ?
      findElementByKey('title', secondaryPivot[key]).value : secondaryPivot[key];
  }

  const primaryPivot = { [Constants.PROPERTY_TYPE]: propertyType || '' };

  if (propertyType !== Constants.DEFAULT_HOTELS) {
    newQuery[`${Constants.PROPERTY_TYPE}[]`] = propertyType;
  }

  return { primaryPivot, secondaryPivot, newQuery };
};

/**
 * It takes the following parameters and returns selected filters in the specified arrayFormat
 * @param query - current query string
 * @param arrayFormat - if query, returns { key : ["value1", "value2"] }, if none, returns { key : { value : true } }
 * @returns {*}
 */
export const parseHotelFilters = (query, arrayFormat = 'none') => {
  const filters = Object.keys(query || {})
    .filter(key => filterOptions.includes(key))
    .reduce((obj, key) => {
      obj[key] = query[key]; // eslint-disable-line no-param-reassign
      return obj;
    }, {});

  const parsed = parse(stringify(filters), { arrayFormat: 'bracket' });
  const keyFormatted = {};

  Object.keys(parsed).forEach((e) => {
    keyFormatted[e] = keyFormatted[e] || {};
    parsed[e].forEach(i => keyFormatted[e][i] = true);
  });

  switch (arrayFormat) {
    //For API query
    case 'query': {
      return { filters: parsed };
    }
    //For filter component
    default: {
      return {
        sortBy: query.sort_by,
        filters: keyFormatted,
        // pageNumber: Number(parsedDestination.pageNumber || 1),
        // destination: parsedDestination.destination
      };
    }
  }
};

export const findElementByKey = (key, value, list = starMapping) => list.find(listItem => listItem[key] === value);

const findValueFromFilter = (list, key) => Object.keys(list[key]).filter(listItem => list[key][listItem] || false);

/**
 * It takes the following parameters and returns the url accordingly
 * @param values - slected values from filters
 * @param location - location object
 * @param primaryPivot - selected primary pivot
 * @param secondaryPivot - selected secondary pivot
 * @param params - params
 * @param push - history.push
 * @param noQuery - true in case of reset filter action
 * @returns {*}
 */
export const applyFilters = ({ values, location, primaryPivot, secondaryPivot, params, push, noQuery = false }) => {
  const query = {}, tempObj = {};
  const url = [];
  const queryObj = useQuery(location.search);

  Object.keys(values).forEach((e) => {
    const queryVal = findValueFromFilter(values, e);

    if (e === Object.keys(secondaryPivot)[0]) {
      if (findValueFromFilter(values, Object.keys(secondaryPivot)).length > 1) {
        tempObj[Constants.SECONDARY_PIVOT] = '';
      } else if (findValueFromFilter(values, Object.keys(secondaryPivot)).length === 1) {
        const filterVal = findValueFromFilter(values, Object.keys(secondaryPivot))[0];
        tempObj[Constants.SECONDARY_PIVOT] = (e === Constants.STAR_RATING) ?
          findElementByKey('value', filterVal).title : filterVal;
      }
    } else if (e === Object.keys(primaryPivot)[0]) {
      if (findValueFromFilter(values, Object.keys(primaryPivot)).length > 1 ||
        findValueFromFilter(values, Object.keys(primaryPivot)).length === 0) {
        tempObj[Constants.PRIMARY_PIVOT] = Constants.DEFAULT_HOTELS;
      } else {
        tempObj[Constants.PRIMARY_PIVOT] = queryVal[0];
      }
    }

    if (!noQuery) {
      query[e] = queryVal;
    }
  });

  let urlPrimaryPivot = tempObj[Constants.PRIMARY_PIVOT] ? tempObj[Constants.PRIMARY_PIVOT] : Constants.DEFAULT_HOTELS;
  let urlSecondaryPivot = tempObj[Constants.SECONDARY_PIVOT] ? tempObj[Constants.SECONDARY_PIVOT] : '';

  urlPrimaryPivot = urlPrimaryPivot.replace(' ', '-');
  urlSecondaryPivot = urlSecondaryPivot.replace(' ', '-');

  if (urlPrimaryPivot) {
    if (urlSecondaryPivot) {
      url.push(`${urlSecondaryPivot}-${urlPrimaryPivot}`);
    } else {
      url.push(urlPrimaryPivot);
    }
  }

  if (params.destination) {
    url.push(params.destination);
  }

  if (params.landmark) {
    url.push(`near-${params.landmark}`);
  }

  if (typeof queryObj.sort_by !== 'undefined') {
    query.sort_by = queryObj.sort_by;
  }

  if (queryObj && queryObj.cache) {
    query.cache = queryObj.cache;
  }

  return push(`/${url.join('/')}?${stringify(query, { arrayFormat: 'bracket' })}`);
};

export const applySort = ({ values: { value }, location: { pathname, search }, push }) => {
  let query = useQuery(search);

  let hotelSearchUrl = '';
  if (query.checkin && query.checkout && query.roomStay) {
    hotelSearchUrl = `checkin=${query.checkin}&checkout=${query.checkout}&roomStay=${query.roomStay}&`;
  }
  query = parseHotelFilters(query, 'query');
  const hotelParams = { ...query.filters, sort_by: value };
  return push(`${pathname}?${hotelSearchUrl}${stringify(hotelParams, { arrayFormat: 'bracket' })}`);
};

export const applyPagination = (
  {
    value,
    location: { pathname, search },
    push
  }
) => {
  let query = useQuery(search);
  query = parseHotelFilters(query, 'query');
  const pageParams = { ...query.filters, page: value + 1 };
  query.sort_by ? pageParams.sort_by = query.sort_by : null;
  return push(`${pathname}?${stringify(pageParams, { arrayFormat: 'bracket' })}`);
};

export const resetPath = (url, push) => push({ pathname: url });

const paxMapping = {
  adults: 'a',
  children: 'c',
};

export const separatorMapping = {
  pax: '@',
  room: '_',
  roomInfo: '__',
  rooms: '__||__'
};

export const validateSearchDate = (checkinDate, checkoutDate) => {
  const checkInDate = validateDate(checkinDate, 'YYYY-MM-DD') ? checkinDate : null;
  const checkOutDate = validateDate(checkoutDate, 'YYYY-MM-DD') ? checkoutDate : null;
  return checkInDate && checkOutDate && dayDifference(checkInDate, checkOutDate) > 0 && dayDifference(checkInDate, checkOutDate) < 30;
};

const getDefaultRooms = (cookie) => {
  let hotelSearchParams = {};
  if (cookie && cookie !== 'hotel_search') {
    hotelSearchParams = JSON.parse(cookie);
  }
  return hotelSearchParams.rooms || [{ adults: 2, children: 0 }];
};

export const getRoomStay = (rooms, encoding, cookie) => {
  if (!rooms || !rooms.length) {
    return encoding ? '' : getDefaultRooms(cookie);
  }
  if (encoding) {
    const roomArr = rooms.map(room => {
      return `${room.adults}${paxMapping.adults}@${room.children}${paxMapping.children}`;
    });
    return roomArr.join(separatorMapping.room);
  }
  const validRoomArray = [];
  try {
    const roomArr = rooms.every(room => {
      const adCh = room.split(separatorMapping.pax);
      const adults = parseInt(adCh[0].split(paxMapping.adults)[0]);
      const children = parseInt(adCh[1].split(paxMapping.children)[0]);
      if (adults + children > 3) {
        return false;
      } else {
        validRoomArray.push({ adults, children });
        return true;
      }
    });
    return roomArr && validRoomArray && validRoomArray.length ? validRoomArray : getDefaultRooms(cookie);
  } catch (e) {
    return getDefaultRooms(cookie);
  }
};

export const getRecommendedAndAvailableRooms = (checkOutMode, query, price, recommended, all) => {
  const totalRooms = query.roomInfo && query.roomInfo.split('__||__') || [];
  const allRooms = [];
  let priceObj = {};
  try {
    if (checkOutMode === 'recommended') {
      totalRooms.length && totalRooms.map((room) => {
        const roomInfoKey = room.split('__') || [];
        const roomInfo = roomInfoKey.length && roomInfoKey[2];
        const requiredRoom = recommended.rooms[roomInfo];
        if (requiredRoom && Object.keys(requiredRoom).length) {
          allRooms.push({
            adults: requiredRoom.pax.adults,
            children: requiredRoom.pax.children,
            roomCode: requiredRoom.roomCode,
            selectionId: requiredRoom.selectionId,
            rateKey: requiredRoom.rateKey
          });
        }
      });
      priceObj = { ...price };
    } else {
      let boardPrice = {};
      let totalPrice = 0, discountedPrice = 0;
      totalRooms.length && totalRooms.map((room) => {
        const roomInfoKey = room.split('__') || [];
        const paxInfo = roomInfoKey.length && roomInfoKey[0];
        const roomCode = roomInfoKey.length > 1 && roomInfoKey[1];
        const roomInfo = roomInfoKey.length > 2 && roomInfoKey[2];
        const requiredPax = all.rooms[paxInfo][roomCode] || {};
        const requiredRoom = Object.keys(requiredPax).length && requiredPax['boards'][roomInfo];
        const { currency, unit, total, discounted, rateClassName, rateClassCode } = requiredRoom && requiredRoom.price || {};
        totalPrice += total;
        discountedPrice += discounted;
        boardPrice = {
          currency,
          unit,
          rateClassCode,
          rateClassName,
          discounted: discountedPrice,
          total: totalPrice
        };
        if (Object.keys(requiredPax).length && Object.keys(requiredRoom).length) {
          allRooms.push({
            adults: requiredPax.pax.adults,
            children: requiredPax.pax.children,
            roomCode: requiredPax.roomCode,
            selectionId: requiredRoom.selectionId,
            rateKey: requiredRoom.rateKey
          });
        }
      });
      priceObj = { ...boardPrice };
    }
    return { priceObj, allRooms };
  } catch (e) {
    console.log(e);
    return { priceObj: {}, allRooms: [] };
  }
};

export const getHotelSearchParams = (client = {}, query) => {
  const cookie = client.req ? client.req.get('cookie') : '';
  const hotelSearchCookie = getCookieFromServer('hotel_search', cookie);

  let checkin = query.checkin, checkout = query.checkout;
  if (!validateSearchDate(checkin, checkout)) {
    const hotelSearchParamsFromCookie = hotelSearchCookie && hotelSearchCookie !== 'hotel_search' ? JSON.parse(hotelSearchCookie) : {};
    checkin = hotelSearchParamsFromCookie.checkInDate;
    checkout = hotelSearchParamsFromCookie.checkOutDate;
  }
  const roomStay = query.roomStay && query.roomStay.split(separatorMapping.room);
  const rooms = getRoomStay(roomStay, false, hotelSearchCookie);
  return {
    checkInDate: checkin,
    checkOutDate: checkout,
    rooms
  };
};

export const getSegmentObject = (details, inventoryDetails) => {
  const { inventoryInfo } = inventoryDetails || {};
  const { address, scId, title } = inventoryInfo || {};
  const { cityId = '', cityName = '', countryId = '', countryName = '' } = address || {};
  const destinationObj = cityId ? { id: cityId, name: cityName } : { id: countryId, name: countryName };
  return {
    ...details,
    event: ORGANISM_CLICKED_HOTELS,
    hotel_id: scId,
    hotel_name: title,
    destination_id: destinationObj.id || '',
    destination: destinationObj.name.toLowerCase() || ''
  };
};

export const getInventorySearchObject = (country, cityId, cityName, checkInDate, checkOutDate, available, roomInfo,
                                         inventory_name, inventory_id, guests, rooms, total_price = '',
                                         discounted_price = '', search = '', entity = 'Hotels', params) => {
  return {
    country: country || '',
    destination_id: cityId || '',
    destination_name: cityName || '',
    entity,
    booking_start_date: format(checkInDate, 'YYYY/MM/DD') || '',
    booking_end_date: format(checkOutDate, 'YYYY/MM/DD') || '',
    available_inventory: Number(available || 0),
    miscellaneous_type_1: '#Guest Combinations',
    miscellaneous_id_1: roomInfo,
    inventory_name,
    inventory_id,
    guests,
    rooms: rooms,
    display_price: discounted_price || '',
    final_price: total_price || '',
    event: INVENTORY_SEARCHES,
    ...params
  };
};
