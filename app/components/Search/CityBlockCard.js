import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Parser } from 'html-to-react';
import ShowMore from '../Generic/ShowMore';
import PlacesToVisitCard from './PlacesToVisitCard';
// import Slider from 'containers/Home/common/Slider';
import CityBlockCardMain from './CityBlockCardMain';

const PlacesToVisitBox = styled.div({
  display: 'block',
});

const getShowMore = (shortDesc) => {
  const parser = new Parser();
  return (<ShowMore wrapText={parser.parse(shortDesc.substr(0, shortDesc.length * 0.20))}
    moreText={parser.parse(shortDesc.substr(shortDesc.length * 0.20))} />);
};

const CityBlockCard = ({ details, destinations }) => (
  <div className="border mt48 clearfix">
    <CityBlockCardMain details={details} destinations={destinations} />
    <div className="clearfix p15 bb bt">
      { getShowMore(details[0].shortDesc) }
    </div>
    {
      details[0].placesToVisit.length ?
        <PlacesToVisitBox className="p15 clearfix">
          <p className="pt15 pb15 clearfix f14p pfc4 relative">
            <span className="f20 fw9 pfc3">Places to visit in {details[0].title}</span>
          </p>
        </PlacesToVisitBox> : null
    }
  </div>
);

CityBlockCard.propTypes = {
  details: PropTypes.array.isRequired,
  destinations: PropTypes.object.isRequired
};

export default CityBlockCard;
