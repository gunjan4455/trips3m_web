import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { useQuery } from 'containers/Listing/parseFilters';

import 'components/Listing/LoadMorePackages.scss';

const SeePackages = (props) => {
  const ctaText = 'Explore Now';
  let query = '', pageCategory = 'tour';
  const locQuery = useQuery(props.location.search);

  const handleClick = () => {
    props.trackSegment('package_list_click', ctaText, 'Bottom Bar');
  };

  if(props.category === 'All') {
    if(!isEmpty(locQuery)) {
      if(locQuery.is_international === 'true') {
        query = '?destination_type=international';
      }else {
        query = '?destination_type=india';
      }
    }
  }else {
    if(['Honeymoon', 'Friends', 'Family'].indexOf(props.category) > -1) {
      pageCategory = props.category.toLowerCase();
    } else if(props.category) {
      query = `?trip_types[]=${props.category}`;
    }
  }
  const url = `/${pageCategory}-packages${query}`;

  return (
    <div className='col-xs-12 pl8 pr8'>
      <Link onClick={handleClick} className='button-load-more-full ripple' to={url}>
        <div className='wave' />{ctaText}
      </Link>
    </div>
  );
};

SeePackages.propTypes = {
  trackSegment: PropTypes.func,
  location: PropTypes.object.isRequired,
  category: PropTypes.string
};

SeePackages.defaultProps = {
  trackSegment: () => {},
  category: 'All'
};

export default SeePackages;
