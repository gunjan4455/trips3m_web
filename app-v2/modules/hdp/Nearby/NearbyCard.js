import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { DefaultIcon } from 'helpers/Icon/Icon';
import {DownArrow} from "helpers/Icon/Icon";

const GNearbyUl = styled.ul({
  '& li': {
    padding: '6px 15px',
    backgroundColor: '#efefef',
  },
  // '& li:nth-child(2n-1)': {
  //   backgroundColor: '#efefef',
  // }
});

const GLandmarkTypeSpan = styled.span({
  fontSize: '10px',
  height: '16px',
  padding: '2px 8px',
  border: '1px solid #d4d4d4',
});

const GDownArrowSpan = styled.span({
  width: '14px',
  height: '6px',
  display: 'block',
  '& svg': {
    width: '14px',
    height: '6px',
    position: 'absolute',
  }
});

const GNearByItemsDiv = styled.div({
  '& input': {
    display: 'none',
    '& + label': {
      borderTop: '1px solid #f2f2f2',
    },
    '& + label + .nearbyItemData': {
      height: '0',
      overflow: 'hidden',
    },
  },
  '& input:checked + label + .nearbyItemData': {
    height: 'auto',
    overflow: 'auto',
  },
  '& input:checked + label .arrow-down': {
    transform: 'rotate(180deg)',
  }
});

const LandmarkList = ({ nearByItem }) => (
  <li className="radius2 overflowh flex spaceBetween alignCenter">
    <span className="flexFull flex alignCenter f14p">
      {nearByItem.heading}
      {
        nearByItem.labels && nearByItem.labels.length ?
          nearByItem.labels.map((label, index) =>
            <GLandmarkTypeSpan key={index} className="radius20 flex alignCenter justifyCenter ml8">
              {label}
            </GLandmarkTypeSpan>
          ) : null
      }
    </span>
    {
      nearByItem.distance ?
        <span className="f14p">{`${nearByItem.distance.value} ${nearByItem.distance.unit}`}</span> : null
    }
  </li>
);

LandmarkList.propTypes = {
  nearByItem: PropTypes.object.isRequired
};

const NearbyCardItem = ({ heading, nearByList }) => (
  <div>
    <GNearByItemsDiv>
      <input type="checkbox" id={heading} name="nearbyitems" />
      <label htmlFor={heading} className="flex p15 alignCenter spaceBetween">
        <h6 className="m0 fw4 f14 flexFull">{heading}</h6>
        <GDownArrowSpan className='relative arrow-down'>
          <DownArrow />
          </GDownArrowSpan>
      </label>
      <div className="nearbyItemData">
        <GNearbyUl>
          {
            nearByList.map((nearByItem, index) =>
              <LandmarkList key={index} nearByItem={nearByItem} />
            )
          }
        </GNearbyUl>
      </div>
    </GNearByItemsDiv>
  </div>
);

NearbyCardItem.propTypes = {
  nearByList: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired
};

const NearbyCard = ({ nearbyTypeList }) => (
  <div className="">
    <div className="row row-">
      {
        nearbyTypeList.map((nearByType, index) =>
          nearByType.options.length ? <div key={index}>
            <div className="">
              <NearbyCardItem key={index} heading={nearByType.heading} nearByList={nearByType.options}/>
            </div>
          </div> : null
        )
      }
    </div>
  </div>
);

export default NearbyCard;

NearbyCard.propTypes = {
  nearbyTypeList: PropTypes.array.isRequired
};
