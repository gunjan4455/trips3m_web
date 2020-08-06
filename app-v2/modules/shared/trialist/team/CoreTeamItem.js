import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { LinkedIn } from 'helpers/Icon/Icon';

const CoreMemberImg = styled.div({
  margin: '0 auto',
  height: '200px',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  '& img': {
    display: 'block',
    position: 'absolute',
    bottom: '0',
    maxWidth: '120px'
  },
});

const LinkedInGo = styled.a({
  width: '16px',
  height: '16px',
  background: '#0077b5',
  borderRadius: '2px',
  position: 'relative',
  top: '3px',
  display: 'inline-block',
  '& svg': {
    display: 'block',
    width: '12px',
    height: '12px',
    margin: '2px',
  },
});

/*Not using image component as it is overriding min-height and min-width*/
const CoreTeamItem = ({ cMemberName, cMemberImage, cMemberDesignation, cMemberImgAlt, cMemberLinkedIn, }) => {
  return (
    <div className="clearfix text-center">
      <CoreMemberImg>
        <img
          className="absolute-center-h hfull"
          src={`${cMemberImage}?tr=w-120,h-200`}
          alt={cMemberImgAlt}
        />
      </CoreMemberImg>
      <div className="pt15 pb15 wfull">
        <p className="f16a fw9 m0 pb8">{cMemberName}</p>
        <p className="f14 m0">
          {cMemberDesignation} |{' '}
          <LinkedInGo target="_blank" href={cMemberLinkedIn}>
            <LinkedIn />
          </LinkedInGo>
        </p>
      </div>
    </div>
  );
};

export default CoreTeamItem;

CoreTeamItem.propTypes = {
  cMemberName: PropTypes.string.isRequired,
  cMemberImage: PropTypes.string.isRequired,
  cMemberDesignation: PropTypes.string.isRequired,
  cMemberImgAlt: PropTypes.string.isRequired,
  cMemberLinkedIn: PropTypes.string.isRequired,
};
