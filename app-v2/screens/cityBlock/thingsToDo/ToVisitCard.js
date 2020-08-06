import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Parser } from 'html-to-react';
import { Link } from 'react-router-dom';

import { LocationMarkerIcon } from 'helpers/Icon/Icon';
import CityTags from '../../../modules/cityBlock/CityTags';
import SmallBanner from '../../../modules/cityBlock/SmallBanner';

const GAddressDiv = styled.p({
  '& .locationMarker': {
    minWidth: '20px',
    maxWidth: '20px',
    height: '20px',
    left: '0',
    top: '0',
    '& svg': {
      position: 'absolute',
      maxHeight: '100%',
    }
  },
});
const parser = new Parser();

const ToVisitCard = ({ item }) => (
  <div className="clearfix sbcw">
    <div className="col-xs-12 p0">
      <SmallBanner bannerStyle={{}} {...item} />
    </div>
    <div className="col-xs-12 pt15 pb15">
      <Link to={item.urlSpotlight}>
        <h4 className="f18 fw9 m0 pb15 pfc3">{item.title}</h4>
      </Link>
      <GAddressDiv className="relative mb15 f14p m0 flex alignCenter spaceBetween ellipsis">
        <span className="locationMarker relative block mr8"><LocationMarkerIcon /></span>
        <p className="f14p fw9 pfc3 m0 flexFull ellipsis">The wildlife warden munnar PO,
        idukki dist.
          kerala, india</p></GAddressDiv>
      <div className="m0 dynamicTextInherit ellipsis_three">{parser.parse(item.description)}</div>
      <div className="cityList mt8"><CityTags {...item} /></div>
    </div>
  </div>
);

ToVisitCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ToVisitCard;
