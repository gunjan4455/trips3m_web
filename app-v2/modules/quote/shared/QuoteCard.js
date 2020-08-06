import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { Parser } from 'html-to-react';

import ShowMore from 'modules/shared/ShowMore';
import QuoteCardHeader from "modules/quote/shared/QuoteCardHeader";
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import {CabIconFront, Flight, TnCIcon, InfoBlackIcon} from "helpers/Icon/Icon";

const htmlToReactParser = new Parser();

const QuoteCard = ({ heading, text, section, trackSegment }) => {

  const trackSegmentEvent = ({ cta }) => {
    trackSegment({
      event: ORGANISM_CLICKED,
      section: section,
      cta: cta
    });
  };

  const handleChatClick = () => {
    trackSegmentEvent({ cta: 'Chat' });
  };

  let TextComp = null;
  if (text.length > 200) {
    TextComp = (<ShowMore
      wrapText={htmlToReactParser.parse(text.substring(0, 200))}
      moreText={htmlToReactParser.parse(text.substring(200))}
      showMoreText="Read More"
      showLessText="Read Less"
      trackSegment={trackSegmentEvent}
    />);
  } else {
    TextComp = htmlToReactParser.parse(text);
  }

  const sectionIcon = (section) =>{
    switch (section) {
      case "cabs-sec" : return (<CabIconFront/>);
      case "additional-info-sec" : return (<InfoBlackIcon />);
      case "terms-conditions-sec" : return (<TnCIcon />);
      case "flights-sec" : return (<Flight />);
    }
  };

  return (
    text ?
      <Element name={section}>
        <div className="pfc3 f14 sbcw mt8">
          <QuoteCardHeader heading={heading} icon={sectionIcon(section)} chatButtonName='Chat' handleChatClick={handleChatClick} />
          <div className="sbcw p15 pl48 pt0 break-word">
            <div>{TextComp}</div>
          </div>
        </div>
      </Element> : null
  );
};

QuoteCard.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string,
  section: PropTypes.string,
  trackSegment: PropTypes.func
};

QuoteCard.defaultProps = {
  section: '',
  text: '',
  trackSegment: () => {}
};

export default QuoteCard;
