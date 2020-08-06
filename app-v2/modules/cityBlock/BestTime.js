import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Overview from 'modules/shared/Overview';
import Heading from 'modules/shared/Heading';

const BestTimeContainer = styled.div({
  display: 'flex',
  padding: '0',
  margin: '0 0 24px',
  justifyContent: 'space-between',
  '& .bestTimeMonth': {
    minWidth: '25%',
    maxWidth: '25%',
    padding: '5px 0',
  },
  '& input.month-input': {
    display: 'none',
    '& + label': {
      fontSize: '16px',
      lineHeight: '24px',
      padding: '0',
      color: '#b2b2b2',
      marginBottom: '0',
    },
    '&:checked + label': {
      color: '#009688',
      fontWeight: '700',
    },
  },
});

const BestTime = ({ months, title, heading, description }) => (
  <div className="clearfix">
    <Heading data={{
      title: title,
      heading: heading}}
    />
    <div className="clearfix">
      <BestTimeContainer className="clearfix flex spaceBetween flexWrap">
        {months && months.length && months.map((month, i) => (
          <div key={i} className="bestTimeMonth text-center">
            <input checked={month.status==='checked' ? true : false} className="month-input"
              name="months" type="checkbox" id={month.name} />
            <label htmlFor={month.name}>{month.name.slice(0,3)}</label>
          </div>
        ))}
      </BestTimeContainer>
      <Overview description={description}/>
    </div>
  </div>
);

BestTime.propTypes = {
  months: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string
};

BestTime.defaultProps = {
  months: {},
  title: '',
  description: '',
  heading: ''
};

export default BestTime;
