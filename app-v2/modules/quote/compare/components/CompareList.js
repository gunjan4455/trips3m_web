import React from 'react';
import { PropTypes } from 'prop-types';

import {
  CrossRed, GreenTickInclusion
} from 'app/helpers/Icon/Icon';
import ShowMore from 'modules/shared/ShowMore';

const renderListItem = (inclusions, isExclusion) => {
  const icon = isExclusion ? <CrossRed /> : <GreenTickInclusion />;

  return inclusions.map((inc, id) => {
    const key = `${id}_${inc.name}`;
    return (
      <div className="flex mb15 contentList" key={key}>
        <div className="icon-18 p2 mr4">
          {icon}
        </div>
        <p className="f14">{inc.name}</p>
      </div>
    );
  });
};

const CompareList = ({ inclusions, isExclusion }) => {
  const listItems = renderListItem(inclusions, isExclusion);

  return (
    <div className="flexFull p15">
      {listItems}
    </div>
  );
};

CompareList.propTypes = {
  inclusions: PropTypes.array.isRequired,
  isExclusion: PropTypes.bool.isRequired,
};

export default CompareList;
