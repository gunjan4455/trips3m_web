import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import * as Icons from 'helpers/Icon/Icon';
import { capitalizeFirstLetter } from '../../../app/helpers/parsers';
import ShowMore from 'modules/shared/ShowMore';
import ReadMoreByHeight from 'modules/shared/ReadMoreByHeight';

export const GAmenitiesContainerUl = styled.div({
  '& li': {
    minWidth: '50%',
    maxWidth: '50%',
    listStyle: 'none',
  },
  '& .read-more-button': {
    fontSize: '12px !important',
    fontWeight: '800 !important'
  }
});

export const GIconSpan = styled.span({
  width: '24px',
  height: '24px',
  '& svg': {
    position: 'absolute',
  }
});

const Amenities = ({ amenitiesData, hotelDisplayName }) => {
  const { tags, title, description } = amenitiesData;
  const collapsedContent = [], expandedContent = [];
  let tempCheckList = [];
  if(!tags.length && !description){
    return <div />;
  };
  return(
    <div className="">
      <h2 className="m0 mb24 fwb f16">{title || 'Facilities'}{hotelDisplayName ? ` at ${hotelDisplayName}` : null}</h2>
      <GAmenitiesContainerUl className="">
        {
          tags.map((tag, index) => {
            tempCheckList = index > 5 ? expandedContent : collapsedContent;
            const IconComponent = tag.key ?
              Icons[capitalizeFirstLetter(tag.key.replace(/[\s-_]/g, ''))] ?
                Icons[capitalizeFirstLetter(tag.key.replace(/[\s-_]/g, ''))] :
                Icons.DefaultIcon : Icons.DefaultIcon;
            tempCheckList.push(
              <li key={tag.id} className="pr8 mb15 iblock">
                <div className="flex alignCenter">
                  <GIconSpan className="relative flex alignCenter justifyCenter iblock mr8">
                    <IconComponent/>
                  </GIconSpan>
                  <p className="flexFull f14p m0">{tag.text}</p>
                </div>
              </li>
            );
          })
        }
        <ShowMore
          wrapText={collapsedContent}
          moreText={expandedContent}
          showMoreText="View All"
          showLessText="View Less"
        />
      </GAmenitiesContainerUl>

      {
        description ?
          <ReadMoreByHeight
            heading={amenitiesData.title}
            maxHeight={64}
            content={amenitiesData.description}
            showTitle={false}
          /> : null
      }
    </div>
  );
};

export default Amenities;

Amenities.propTypes = {
  amenitiesData: PropTypes.object.isRequired,
  hotelDisplayName: PropTypes.string
};
