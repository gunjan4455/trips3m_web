import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Breadcrumb.scss';

const BreadcrumbListing = ({ breadcrumbs }) => (
  <div className='row row- p8 sbc5'>
    <ol className='breadcrumb-list m0 p0' itemScope itemType="https://schema.org/BreadcrumbList">
      {
        breadcrumbs.map((breadcrumb, index, array) => (
          <li key={`${breadcrumb.name}_${index}`}
              itemProp="itemListElement"
              itemScope itemType="https://schema.org/ListItem">
            {
              breadcrumb.url ?
                index === breadcrumbs.length-1 ?
                <Link to={breadcrumb.url} itemProp="item">
                  <span itemProp="name">{breadcrumb.name}</span>
                </Link> : <Link to={breadcrumb.url} itemProp="item" target="_blank">
                    <span itemProp="name">{breadcrumb.name}</span>
                  </Link>
                : <span itemProp="name">{breadcrumb.name}</span>
            }
            <meta itemProp="position" content={index + 1} />
          </li>
        ))
      }
    </ol>
  </div>
);

BreadcrumbListing.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
};

export default BreadcrumbListing;
