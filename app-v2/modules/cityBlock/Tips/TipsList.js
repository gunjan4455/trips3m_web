import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { InfoIcon } from 'helpers/Icon/Icon';

const Ul = styled.ul({
  padding: '0',
  margin: '0',
  '& li': {
    margin: '0 0 15px 0',
    position: 'relative',
    '&:last-child': {
      marginBottom: '0'
    },
  },
});

const Icon = styled.span({
  minWidth: '24px',
  maxWidth: '24px',
  height: '24px',
  '& svg': {
    width: '20px',
    height: '20px',
  }
});

const TipsList = ({ data }) => (
  <div>
    <h2 className="m0  mb15 f16 fw9 pfc1">{`Tips for ${data.setUrl}`}</h2>
    <Ul>
      {
        data.tips && data.tips.length && data.tips.map((tip, i) => (
          <li className="block flex f14p pfc3" key={i}>
            <Icon className="relative mr8"><InfoIcon /></Icon>
            <span className="flexFull">{tip.text}</span>
          </li>
        ))
      }
    </Ul>
  </div>
);

TipsList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TipsList;
