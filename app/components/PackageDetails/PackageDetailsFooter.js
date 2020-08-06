import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import ShowMore from '../Generic/ShowMore';

const parser = new Parser();

const renderFooterAboveText = (footerSection) => {
  const footerAboveText = footerSection.footer_above_text
    .replace(/&lt;img(.*?)&gt;/gm, (m, content) => {
      return `<img data-defer-load="true" ${content}>`;
    })
    .split('&lt;readmore&gt;');

  return (
    <ShowMore
      wrapText={parser.parse(footerAboveText[0])}
      moreText={parser.parse(footerAboveText[1])}
    />
  );
};

const PackageDetailsFooter = ({ footerSection }) => {
  return (
    <div className="row row-">
      <div className="container p15 sbcw">
        <div className="read-more-box dynamicTextInherit" >
          { renderFooterAboveText(footerSection) }
        </div>
      </div>
    </div>
  );
};

PackageDetailsFooter.propTypes = {
  footerSection: PropTypes.object.isRequired,
};

export default PackageDetailsFooter;
