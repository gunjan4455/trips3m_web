import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import PackageIncExc from 'modules/shared/PackageIncExc';

const GFooterLinksDiv = styled.div({
  justifyContent: 'flex-end',
  '& a': {
    paddingLeft: '32px',
    paddingRight: '32px',
  }
});

const GPackagesVisibleDiv = styled.div({
  '& .inclusionName': {
    margin: '0',
  }
});

const GTotalPackagesDiv = styled.div({
  height: '42px',
  minWidth: '50px',
  width: 'auto',
  '& .tooltipBox': {
    bottom: 'auto',
    left: 'calc(100% + 8px)',
    right: '-8px',
    top: '0',
    padding: '15px',
    transform: 'translateX(0)',
  },
  '& .tooltipArrow': {
    transform: 'rotate(90deg)',
    left: '-14px',
    top: '15px',
  },
});

const HotelCardFooter = ({ amenities, url }) => (
  <div className="clearfix">
    <div className="col-md-8 pl0 flex">
      <GPackagesVisibleDiv className="overflowh flexFull mr15">
        <PackageIncExc inclusions={amenities.slice(0,4)}/>
      </GPackagesVisibleDiv>
      {(amenities.length > 4) ?
        <GTotalPackagesDiv className="tooltipCommon flex cursorP text-center sfc1 f12 alignCenter justifyCenter">
          +{amenities.length - 4} more
          <div className="tooltipBox z3 sbcw">
            <ul className="m0 p0 pfc3 text-left">
              {amenities.slice(4, amenities.length).map((item, i) => (
                <li className="ellipsis f10 pt3 pb3 block mb8" key={i}>{item.text}</li>
              ))}
            </ul>
            <Link className="sfc1 f12 fw7 block text-left" to="">View Details</Link>
            <span className="tooltipArrow" />
          </div>
        </GTotalPackagesDiv> : null
      }
    </div>
    <GFooterLinksDiv className="col-md-4 flex alignCenter p0">
      <Link className="link-pri mt4 p8 pl0 pr0 ripple fw7" to={url}>View Details</Link>
    </GFooterLinksDiv>
  </div>
);

HotelCardFooter.propTypes = {
  amenities: PropTypes.array,
  url: PropTypes.string
};

export default HotelCardFooter;
