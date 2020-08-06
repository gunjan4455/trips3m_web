import React from 'react';

const metaTags = (tags) => {
  if (typeof tags !== 'undefined') {
    return tags.map((metaTag, index) => (
      <meta {...metaTag} key={`meta_${index}`} />
    ));
  }
  return null;
};

export default metaTags;
