import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { capitalizeFirstLetter } from 'helpers/parsers';
import * as Icons from 'helpers/Icon/Icon';

const GInclusionDiv = styled.div({
  height: '16px',
});

const GInclusionHighlightUl = styled.ul({
  '& li': {
    fontSize: '10px',
    padding: '0 6px',
    height: '16px',
    lineHeight: '16px',
    '& .highlightIcon': {
      width: '14px',
      height: '14px',
      position: 'relative',
      marginRight: '8px',
    }
  },
  '& .luxury': {
    border: '1px solid #e4a500',
    color: '#c48e00',
  },
  '& .budget': {
    border: '1px solid #009688',
    color: '#009688',
  }
});

const GInclusionsUl = styled.ul({
  '& li': {
    marginRight: '10px',
    display: 'inline-block',
    height: '24px',
    fontSize: '10px',
    lineHeight: '24px',
    padding: '0',
    listStyle: 'none',
  }
});

export const GInclusionIconSpan = styled.span({
  width: '16px',
  display: 'block',
  margin: '0 auto',
  height: '16px',
  position: 'relative',
  '& svg':{
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    position: 'absolute',
    display: 'block',
  },
});

const InclusionHighlight = ({ luxury, budget }) => (
  <GInclusionHighlightUl className="block fleft">
    {
      luxury ?
        <li className="flex alignCenter luxury radius20 f10">
          Top Rated Luxury Property
        </li> : budget ?
        <li className="flex alignCenter budget radius20 f10">
          Top Rated Budget Property
        </li> : null
    }
  </GInclusionHighlightUl>
);

InclusionHighlight.propTypes = {
  luxury: PropTypes.bool,
  budget: PropTypes.bool
};

const Inclusions = ({ facilities }) => (
  <GInclusionsUl className="flex flexWrap">
    {
      facilities.map((facility, i) => {
        const IconComponent = facility.key && Icons[capitalizeFirstLetter(facility.key.replace(/[\s-_]/g, ''))]
          || Icons.DefaultIcon;
        return (
          <li className="flex alignCenter" key={i}>
            <GInclusionIconSpan className="mr5">
              <IconComponent />
            </GInclusionIconSpan>
            <span className="flexFull">{facility.text}</span>
            </li>
        );}
      )
    }
  </GInclusionsUl>
);

Inclusions.propTypes = {
  facilities: PropTypes.array
};

Inclusions.defaultProps = {
  facilities: []
};

const HotelInclusion = ({ luxury, budget, facilities }) => (
  <div>
    <GInclusionDiv className="overflowh mb5">
      <InclusionHighlight luxury={luxury} budget={budget} />
    </GInclusionDiv>
    <Inclusions facilities={facilities} />
  </div>
);

HotelInclusion.propTypes = {
  luxury: PropTypes.bool,
  budget: PropTypes.bool,
  facilities: PropTypes.array
};

HotelInclusion.defaultProps = {
  luxury: false,
  budget: false
};

export default HotelInclusion;
