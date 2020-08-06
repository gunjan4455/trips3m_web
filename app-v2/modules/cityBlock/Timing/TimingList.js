import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { DurationIcon } from 'helpers/Icon/Icon';

const GTimingListUl = styled.ul({
  padding: '0',
  margin: '0',
  '& li': {
    margin: '0 40px 0 0',
    paddingLeft: '30px',
    display: 'inline-block',
    '&:last-child': {
      marginRight: '0',
    },
  },
});

const Icon = styled.span({
  width: '18px',
  height: '18px',
  '& svg': {
    width: '18px',
    height: '18px',
  }
});

const TimingList = ({ data }) => {
  return (
    <div>
      <h2 className="m0 mb15 f16 fw9 pfc1">Timings</h2>
      <GTimingListUl>
      {data.timings && data.timings.length && data.timings.map((day, i) =>
        <li key={i} className="relative">
          <Icon className="absolute l0 t4 block"><DurationIcon /></Icon>
          <p className="f14 m0 fw9 pb8">{day.startDay} to {day.endDay}</p>
          {day.timing.map((time, i) =>
            <p className="f14 m0" key={i}>{time.startTime} - {time.closeTime}</p>
          )}
        </li>
      )}
      </GTimingListUl>
    </div>
  );
};

TimingList.propTypes = {
  data: PropTypes.object.isRequired
};

export default TimingList;
