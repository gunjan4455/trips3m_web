import React from 'react';

export const results = (quote) => {
  return quote.newFormatTripDays || [];
};

export const getHotelOrAirportDetails = (info = {}) => {
  return {
    name: info.name,
    email: info.email,
    phone: info.phone,
    description: info.hotelDesc || info.airportDes,
    lat: info.lat,
    long: info.long,
    address: info.address,
    rating: info.ratings,
    webUrl: info.webUrl,
    images: info.images
  };
};

export const getShowMoreText = (text, breakAt) => {
  const wrapText = text ? text.substr(0, breakAt) : '';
  const moreText = text && text.length > breakAt ? text.substr(breakAt) : '';

  return {
    wrapText: wrapText && wrapText.split('\n').map((i, key) => {
      return <span key={key}>{i}</span>;
    }),
    moreText: moreText && moreText.split('\n').map((text, key) => {
      return key === 0 ? <span key={key}>{text}</span> : <div key={key}>{text}</div>;
    })
  };
};
