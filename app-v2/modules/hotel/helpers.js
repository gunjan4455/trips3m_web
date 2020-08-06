import { dayDifference, format } from 'helpers/DateTime';
import { setCookie } from 'helpers/FormDataFormatter';
import { useQuery } from "containers/Listing/parseFilters";

export function calculateGuests(rooms) {
  if (!rooms) {
    return 0;
  }
  const guest = rooms.reduce((guest, room) => {
    guest += room.adults + room.children;
    return guest;
  }, 0);
  return guest;
}

export function calculateAdultsAndChildren(rooms) {
  const defaultObj = { adults: 0, children: 0 };
  if (!rooms) {
    return defaultObj;
  }
  return rooms.reduce((guest, room) => {
    guest.adults += room['adults'];
    guest.children += room['children'];
    return guest;
  }, defaultObj);
}

export function calculateNights(check_in, check_out) {
  if (!(check_in || check_out)) {
    return 1;
  }
  return Math.ceil(dayDifference(check_in, check_out));
}

export function getAdultChildAsString(pax = {}) {
  return `(${pax.adults} adult${pax.children ? `, ${pax.children} child` : ''})`;
}

export function setHotelSearchParamsCookie(params) {
  setCookie('hotel_search', JSON.stringify(params), 30);
}

export function getHotelSearchUrl(checkIn, checkout, rooms = []) {
  const roomStay = rooms.map(r => `${r.adults}a@${r.children}c`);
  return `checkin=${format(checkIn, 'YYYY-MM-DD')}&checkout=${format(checkout, 'YYYY-MM-DD')}&roomStay=${roomStay.join('_')}`;
}

export function formattedCheckInCheckOut(checkIn, checkout) {
  return `${format(checkIn, 'DD MMM')} - ${format(checkout, 'DD MMM')}`;
}
