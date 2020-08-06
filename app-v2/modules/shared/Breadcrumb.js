import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getPageNameFromUrl } from 'helpers/FormDataFormatter';
import styles from './breadcrumb.cm.scss';


const Breadcrumb = ({ breadcrumbs }) => {
  const analyticsClick = (breadcrumb) => {
    const name = getPageNameFromUrl(breadcrumb.url);
    if (name === 'Package List Page') {
      const category = breadcrumb.url.split('/')[1].split('-')[0];
      const destination = breadcrumb.url.split('/')[2];
    }
  };

  return (
    <div className="clearfix">
      <ol className={`m0 p0 breadcrumb-list at_breadcrumb ${styles.breadcrumb}`} itemScope
          itemType="https://schema.org/BreadcrumbList">
        {
          breadcrumbs.map((breadcrumb, index) => {
            const isLast = (index === breadcrumbs.length - 1);
            return (
              <li
                key={`${breadcrumb.name}_${index}`}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className='iblock mr3'
              >
                <Link
                  target={ isLast ? '' : '_blank'}
                  to={breadcrumb.url}
                  itemProp="item"
                  onClick={() => analyticsClick(breadcrumb)}
                >
                  <span itemProp="name" className={isLast ? 'pfc3' : 'sfc1'}>{isLast ? breadcrumb.name : `${breadcrumb.name} > `}</span>
                </Link>
                <meta itemProp="position" content={index + 1} />
              </li>);
          }
        )}
      </ol>
    </div>
  );
};

Breadcrumb.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
};

Breadcrumb.defaultProps = {
  breadcrumbs: [],
};

export default Breadcrumb;
