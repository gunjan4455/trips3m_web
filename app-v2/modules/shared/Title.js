import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const TitleMain = styled.h6({
  fontSize: '20px',
  lineHeight: '24px',
  color: '#3e3e3e',
  margin: '0',
  fontWeight: '900'
});

const SubTitle = styled.p({
  fontSize: '14px',
  lineHeight: '18px',
  color: '#cbcbcb',
  margin: '4px 0 0 0'
});

const Title = ({ data, config, trackSegment }) => {
  return (
    <div className='flex spaceBetween relative mb15'>
      <div className='relative'>
        <h2 className='f16 m0 pr64 fw7'>{config.title || data.title}</h2>
        <p className='f14 m0 mt4 pfc4'>
          {config.heading ||
            data.heading ||
            'Your list of the best things to do, compiled on the basis of actual traveler experiences'}
        </p>
        {data.viewAll ? (
          <a
            className="absolute t2 r0 iblock f14 fw7"
            href={data.viewAll}
            target='_blank'
            onClick={() => trackSegment('View all', '')}
          >
            View All
          </a>
        ) : null}
      </div>

    </div>
  );
};

Title.propTypes = {
  data: PropTypes.object,
  config: PropTypes.object,
  trackSegment: PropTypes.func
};

Title.defaultProps = {
  data: {},
  config: {},
  trackSegment: () => {
  }
};

export default Title;
