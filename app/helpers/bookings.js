import { getPageName, getPageNameFromUrl } from "./FormDataFormatter";

export const isBookingPage = (pageUrl) => {
  const bookingPages = ['Quote Detail Page', 'Request Landing Page'];

  const pageName = pageUrl ? getPageNameFromUrl(pageUrl) : getPageName();

  return bookingPages.indexOf(pageName) > -1;
};
