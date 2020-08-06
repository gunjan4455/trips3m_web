import config from 'appConfig';

const getQueryParams = queryParams => {
  const params = Object.keys(queryParams).filter((key) => queryParams[key] !== undefined && queryParams[key] !== null);
  if (params.length) {
    return params.reduce((finalString, key) =>
      (`${finalString}&${key}=${queryParams[key]}`), '?'
    );
  }
  return '';
};

export const whatsAppUrl = (heading, url) => {
  const encodedString = encodeURIComponent(`${heading} ${url}`);
  return `whatsapp://send?text=${encodedString}`;
};

export const pdpTestimonials = (id, queryParams) => {
  return `${config.apiEndpoints.pdpTestimonials.url.replace(':id', id)}${getQueryParams(queryParams)}`;
};

export const recentPackages = (destination, queryParams) => {
  return `${config.apiEndpoints.recentPackages.url.replace(':destination', destination)}${getQueryParams(queryParams)}`;
};


export const pdpFooterLinks = (id, queryParams) =>{
  return `${config.apiEndpoints.fetchFooterLink.url.replace(':id' , id)}${getQueryParams(queryParams)}`;
};


export const getAppSchemeUrl = (originalUrl, originalPathname, location, pageNumber, os) => {
  let baseUrl = originalUrl;

  if (os === 'ios') {
    baseUrl = originalPathname.substring(1);
  }

  if (pageNumber !== 1) {
    baseUrl = `${baseUrl}/page/${pageNumber}`;
  }

  return baseUrl;
};

export const iosDeepLink = targetUrl => {
  return encodeURIComponent(
    JSON.stringify({
      user_agent: 'Bolts iOS 1.0.0',
      targetUrl,
      extras: {
        myapp_token: '',
      },
    })
  );
};
