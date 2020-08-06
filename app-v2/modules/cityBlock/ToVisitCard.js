import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Parser } from 'html-to-react';
import { Link } from 'react-router-dom';

import { LocationMarkerIcon } from 'modules/shared/Icon/Icon';
import CityTags from './CityTags';
import SmallBanner from './SmallBanner';
import { sanitize } from 'helpers/utils';

const Address = styled.div({
  paddingLeft: '32px',
  '& .locationMarker': {
    width: '24px',
    height: '24px',
    position: 'absolute',
    left: '0',
    top: '0',
  },
  '& > p p': {
    marginBottom: '0',
  }
});

const parser = new Parser();

const ToVisitCard = ({ item, location }) => (
  <div className="clearfix mb24">
    <div className="col-md-5 p0">
      <SmallBanner bannerStyle={{}} {...item} location={location} />
    </div>
    <div className="col-md-7 pl24 pr0">
      <Link to={item.urlSpotlight}>
        <h4 className="f16 fw9 m0 pb15 pfc1">{item.title}</h4>
      </Link>
      { parser.parse(sanitize(item.address)) ?
        <Address className="relative f14p m0 pt4 pb8 ellipsis">
          <span className="locationMarker"><LocationMarkerIcon /></span>
          <div className="f14 fw9 pfc3 m0 dynamicTextInherit">{parser.parse(sanitize(item.address))}</div>
        </Address>
          : null
      }
      <div className="m0 dynamicTextInherit ellipsis_three">{parser.parse(sanitize(item.description))}</div>
      <div className="cityList mt8">
        <CityTags {...item}/>
      </div>
    </div>
  </div>
);

ToVisitCard.propTypes = {
  item: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default ToVisitCard;
