import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Element } from 'react-scroll';

import { PDM_CATEGORY_INCLUSION } from 'helpers/pdmHelpers';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import ShowMore from 'modules/shared/ShowMore';
import QuoteCardHeader from "modules/quote/shared/QuoteCardHeader";
import {InclusionsNewIcon, ExclusionsNewIcon} from "helpers/Icon/Icon";

const GListItemDiv = styled.div(({ title }) => ({
  paddingLeft: '25px',
  position: 'relative',
  '&:after': {
    content: '\' \'',
    width: '8px',
    height: '8px',
    background: title === 'Exclusions' ? '#fc5145' : '#4caf50',
    borderRadius: '100%',
    position: 'absolute',
    left: '0',
    top: '6px'
  }
}));

function hideTitle(item) {
  return item.category === 'Others' && (item.comments === null ||
    item.comments === '');
}

const renderComments = (comments) => (comments ? <span> : {comments}</span> : null);

const renderListItem = (data, title) => (
  data.map((listItem, index) => hideTitle(listItem)
    ? ''
    : <GListItemDiv key={listItem.id || index} className="mb15" title={title}>
      {listItem.name || listItem}
      {renderComments(listItem.comments)}
    </GListItemDiv>)
);

const renderList = (listItems, classNames, title, trackSegmentEvent) => {
  if (listItems.length > 4) {
    const wrapData = listItems.slice(0, 4);
    const moreData = listItems.slice(5);

    const wrapText = renderListItem(wrapData, title);
    const moreText = renderListItem(moreData, title);

    return (<div className={"sbcw p15 pt0 pl24" + classNames}><ShowMore
      wrapText={wrapText}
      moreText={moreText}
      showMoreText="Read More"
      showLessText="Read Less"
      trackSegment={trackSegmentEvent}
    /></div>);
  }

  return (<div className={"sbcw mr8 ml8 p15" + classNames}>
    {renderListItem(listItems, title)}
  </div>);
};

const isInclusion = (sectionName) => sectionName === 'inclusions-sec';

const InclusionExclusion = ({
                              title, item, classNames, sectionName,
                              setPdmCategory, showHidePdmView, trackSegment
                            }) => {

  const trackSegmentEvent = ({ cta }) => {
    trackSegment({
      event: ORGANISM_CLICKED,
      section: sectionName,
      cta: cta
    });
  };

  const handleChatClick = () => {
    if (isInclusion(sectionName)) {
      setPdmCategory(PDM_CATEGORY_INCLUSION);
      showHidePdmView(true);
    }

    trackSegmentEvent({ cta: 'Chat' });
  };

  return (
    item ?
      <Element name={sectionName}>
        <div className="pfc3 f14 sbcw mt8">
          <QuoteCardHeader heading={title}
                           chatButtonName={isInclusion(sectionName) ? 'Edit Package' : 'Chat'}
                           handleChatClick={handleChatClick}
          icon={isInclusion(sectionName) ? <InclusionsNewIcon /> : <ExclusionsNewIcon />}/>
          {
            typeof item === 'string'
              ? <div className="sbcw p15 pl48 pt0">{item}</div>
              : renderList(item, classNames, title, trackSegmentEvent)
          }
        </div>
      </Element> : null
  );
};

InclusionExclusion.propTypes = {
  title: PropTypes.string,
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  classNames: PropTypes.string,
  sectionName: PropTypes.string,
  setPdmCategory: PropTypes.func,
  showHidePdmView: PropTypes.func,
  trackSegment: PropTypes.func
};

InclusionExclusion.defaultProps = {
  title: '',
  classNames: '',
  sectionName: '',
  setPdmCategory: () => {},
  showHidePdmView: () => {},
  trackSegment: () => {}
};

export default InclusionExclusion;
