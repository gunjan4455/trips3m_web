/* eslint-disable react/no-array-index-key */
import React from 'react';

const metaTags = (tags) => {
  if (typeof tags !== 'undefined') {
    return tags
      .filter(t => {
        if ((t.property && t.property.includes('ios')) ||
          (t.name && t.name.toLowerCase() === 'description') ||
          (t.property && t.property.toLowerCase() === 'og:description')) {
          return false;
        }
        return true;
      })
      .map((metaTag, index) => (
      <meta {...metaTag} key={`meta_${index}`} />
    ));
  }
  return '';
};

export default metaTags;
