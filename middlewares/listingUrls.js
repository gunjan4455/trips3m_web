import { redirectionEnabled, decodeURIParam } from '../app/helpers/urlHelpers';
import url from 'url';

export default (canonicalsHash) => {
  /**
   * middleware to find canonicals of current url and Permanent redirect on the same.
   * @function
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @param {Function} next - Express next middleware function
   * @return {undefined}
   */
  return (req, res, next) => {
    const parsedUrl = url.parse(req.originalUrl);
    if (redirectionEnabled(req.path)) {
      parsedUrl.pathname = parsedUrl.pathname.toLowerCase();
      res.redirect(301, url.format(parsedUrl));
    } else {
      // User is visiting any listing page with perhaps  destination name misspelled
      const listingUrls = ['tour-packages', 'honeymoon-packages', 'friends-packages',
        'family-packages', 'seasonal-packages', 'hotels', 'resorts', 'apartments', 'guest-houses', 'hostels', 'villas',
        'home-stays', 'cottages', 'hotels-and-resorts'];
      const splitPath = parsedUrl.pathname.split('/');
      const decodedUrl = decodeURIParam(splitPath[2]);
      let destinationUrl = decodedUrl.trim();
      if (destinationUrl[destinationUrl.length - 1] === '/') {
        destinationUrl = destinationUrl.substr(0, destinationUrl.length - 1);
      }
      let originalUrl = parsedUrl.pathname.substr(1);
      const decodedCompleteUrl = decodeURIParam(originalUrl);
      originalUrl = decodedCompleteUrl.trim();

      const checkUrlWithCanonical = (url) => {
        return (Object.keys(canonicalsHash).length &&
          url && canonicalsHash[url] &&
          canonicalsHash[url] !== url);
      };

      if(checkUrlWithCanonical(originalUrl)) {
        parsedUrl.pathname = `/${canonicalsHash[originalUrl]}`;
        res.redirect(301, url.format(parsedUrl));
      } else if (checkUrlWithCanonical(destinationUrl) &&
        listingUrls.filter(u => parsedUrl.pathname.includes(u)).length // url must match
      ) {
        splitPath[2] = canonicalsHash[destinationUrl]; // correct the canonical name
        parsedUrl.pathname = splitPath.join('/');
        res.redirect(301, url.format(parsedUrl));
      } else if (decodedUrl !== destinationUrl) {
        splitPath[2] = destinationUrl; // correct the canonical name
        parsedUrl.pathname = splitPath.join('/');
        //redirect to correct url if after decoding and trimming it is not the same.
        res.redirect(301, url.format(parsedUrl));
      } else {
        next();
      }
    }
  };
};
