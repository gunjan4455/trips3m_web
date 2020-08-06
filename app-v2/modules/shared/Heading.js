import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SubHeading = styled.p({
  fontSize: '14px',
  lineHeight: '18px',
  color: '#cbcbcb',
  margin: '4px 0 0 0',
});

const Heading = ({ data, title, heading, styleHeading, styleSubHeading, type, isViewAllHidden }) => {
  return (
    <div className="clearfix mb15">
      {
        type === 'main-heading' ?
          <h2 style={styleHeading}
              className={`${isViewAllHidden ? 'pr0 ' : 'pr64 '} f16 pfc1 fw9 m0`}>{data.title || title}{data.forHeading ? ` for ${data.forHeading}` : null}</h2>
          : <h2 style={styleHeading}
                className={`${isViewAllHidden ? 'pr0 ' : 'pr64 '} f16 pfc3 fwb m0`}>{data.title || title}{data.forHeading ? ` for ${data.forHeading}` : null}</h2>
      }
      {data.heading || heading ?
        <SubHeading style={styleSubHeading} className="f14 mt4 fw4">{data.heading || heading}</SubHeading> :
        null
      }
    </div>
  );
};

Heading.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  styleHeading: PropTypes.object,
  styleSubHeading: PropTypes.object,
  isViewAllHidden: PropTypes.bool
};

Heading.defaultProps = {
  data: {},
  type: '',
  title: '',
  heading: '',
  styleHeading: {},
  styleSubHeading: {},
  isViewAllHidden: false
};

export default Heading;
