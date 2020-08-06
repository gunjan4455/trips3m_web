import url from 'url';
import { decodeURIParam } from '../app/helpers/urlHelpers';
import { PERMANENT_REDIRECT } from '../app/constants/httpStatusCodes';

export default (canonicalsHash) => {
  /**
   * middleware to find canonicals of current url and Permanent redirect on the same.
   * @function
   * @param {Object} req - Express request object
   * @param {Object} res -  Express response object
   * @param {Function} next - Express next middleware function
   * @return {undefined}
   */
  return (req, res, next) => {
    // console.log(`TourismUrls middleware ::::`);
    let requestedUrl = decodeURIParam(req.originalUrl).trim();
    if (requestedUrl !== '/' && requestedUrl.charAt(requestedUrl.length - 1) === '/') {
      requestedUrl = requestedUrl.substring(0, requestedUrl.lastIndexOf('/'));
    }

    // console.log(`TourismUrls middleware :::: requestedUrl :::: ${requestedUrl}`);
    const parsedUrl = url.parse(requestedUrl);
    // console.log(`TourismUrls middleware :::: parsedUrl.pathname :::: ${parsedUrl.pathname}`);

    const validUrlRegex = /((^\/([\S-])*-tourism$)|(^\/([\S-])*-tourism\/([\S-])+)$)/gi;

    const decodedTourismUrl = decodeURIParam(parsedUrl.pathname);
    const validUrlMatcher = decodedTourismUrl.match(validUrlRegex);

    // If urls is absolute valid e.g., /malaysia-tourism/kuala-lumpur, then don't proceed
    // further in this middleware. Stop processing and call next().
    if (validUrlMatcher) {
      // console.log(`TourismUrls middleware :::: Valid URL :::: Calling next()`);
      return next();
    }

    const listingUrls = [/-tourism\b$/, /-tourism\/\w*/];
    let newPathName = '';

    for (let i = 0; i < listingUrls.length; i++) {
      const listingUrl = listingUrls[i];
      const matcher = parsedUrl.pathname.match(listingUrl);

      if (matcher) {
        const destinationName = decodeURIParam(parsedUrl.pathname.substring(1, matcher.index)).trim();
        const canonicalDestinationName = canonicalsHash[destinationName];

        // console.log(`TourismUrls middleware :::: destinationName :::: ${destinationName}`);
        // console.log(`TourismUrls middleware :::: canonicalDestinationName :::: ${canonicalDestinationName}`);

        if (i === 0) {
          newPathName = `${canonicalDestinationName || destinationName}${parsedUrl.pathname.substring(matcher.index)}`;
          // console.log(`TourismUrls middleware :::: matching only destination name :::: newPathName :::: ${newPathName}`);
          break;
        } else if (i === 1) {
          const pageUrlFragments = decodeURIParam(matcher.input)
            .split('/').filter(f => f !== '').map(f => f.trim());

          pageUrlFragments[0] = canonicalDestinationName ?
            `${canonicalDestinationName}-tourism` :
            `${destinationName}-tourism`;

          const cityName = pageUrlFragments[1];
          // console.log(`TourismUrls middleware :::: cityName :::: ${cityName}`);

          pageUrlFragments[1] = canonicalsHash[cityName] || cityName;
          newPathName = `/${pageUrlFragments.join('/')}`;
          // console.log(`TourismUrls middleware :::: matching destination and cityName ::: newPathName:::: ${newPathName}`);
          break;
        }
      }
    }

    if (newPathName) {
      parsedUrl.pathname = newPathName;
      // console.log(`TourismUrls middleware :::: redirecting after correcting the URL to :::: ${newPathName}`);
      res.redirect(PERMANENT_REDIRECT, url.format(parsedUrl));
    } else {
      // console.log(`TourismUrls middleware :::: could not build newPathName :::: calling next()`);
      next();
    }
  };
};
