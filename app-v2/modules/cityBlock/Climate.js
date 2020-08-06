import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Monsoon, Summer, Winter } from 'helpers/Icon/Icon';
import Heading from 'modules/shared/Heading';
import ReadMoreByHeight from 'modules/shared/ReadMoreByHeight';

const Icon = styled.div({
  position: 'absolute',
  left: '0',
  top: '0',
  width: '24px',
  height: '24px',
});

const GClimateBoxDiv = styled.div({
  paddingLeft: '32px',
  '& > h3': {
    lineHeight: '24px',
  },
  '&:last-child': {
    paddingBottom: '0 !important',
  },
});

const IconMap = {
  'Monsoon': <Monsoon />,
  'Summer': <Summer />,
  'Winter': <Winter />,
};

const Climate = ({ data }) => (
  <div className="clearfix">
    <Heading title={data.title} />
    <div className="clearfix">
      {data.seasons.length && data.seasons.map((season, i) => (
        <GClimateBoxDiv className="relative pb15" key={i}>
          <Icon>{IconMap[season.title.split(' ')[0]]}</Icon>
          <h3 className="f14p fw9 pfc3 m0">{season.title}</h3>
          <ReadMoreByHeight showTitle={false} content={season.description} />
        </GClimateBoxDiv>
      ))}
    </div>
  </div>
);

Climate.propTypes = {
  data: PropTypes.object.isRequired
};

export default Climate;
