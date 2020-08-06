import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { GreenTick } from 'helpers/Icon/Icon';
import ShowMore from 'modules/shared/ShowMore';

const GCheckSpan = styled.span({
  minWidth: '24px',
  maxWidth: '24px',
  height: '24px',
  '& svg': {
    maxWidth: '80%',
    position: 'absolute'
  }
});

const CheckList = ({ checkList }) => {
  const collapsedContent = [], expandedContent = [];
  let tempCheckList = [];
  return(<div>
    <h6 className="f16 fwb m0 mb15">Highlights</h6>
    <ul>
      {
        checkList.map((checkPoint, index) => {
          tempCheckList = index > 2 ? expandedContent : collapsedContent;
          tempCheckList.push(
            <li key={index} className="flex mb8">
              <GCheckSpan className="icon24 mr5 relative flex alignCenter justifyCenter"><GreenTick /></GCheckSpan>
              <span className="f14p">{checkPoint}</span>
            </li>
          );
        })
      }
      <ShowMore
        wrapText={collapsedContent}
        moreText={expandedContent}
        showMoreText="Read More"
        showLessText="Read Less"
      />
    </ul>
  </div>);
};

CheckList.propTypes = {
  checkList: PropTypes.array.isRequired
};

export default CheckList;

