import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { timeFromNow } from 'helpers/DateTime';
import TravelerInitials from './TravelerInitials';

const ReviewerDetailBox = styled.div({
  position: 'relative',
  paddingLeft: '75px',
  whiteSpace: 'normal',
  minHeight: '60px'
});

const ReviewerDetails = ({ author, postDate }) => (
  <ReviewerDetailBox>
    <TravelerInitials name={author.author_name || author.authorName} />
    <div className="reviewer-name absolute-center-v f14 fleft">
      <p className="fw7 mb4 pfc3 at_authorname">{author.author_name || author.authorName}</p>
      <p className="f12 overflowh at_time">
        {
          author.user_location || author.userLocation ?
            <span className="f12 pfc4 mr8 at_authorlocation">{author.user_location || author.userLocation},</span> :
            null
        }
        {postDate && timeFromNow(postDate)}
      </p>
    </div>
  </ReviewerDetailBox>
);

ReviewerDetails.propTypes = {
  author: PropTypes.object.isRequired,
  postDate: PropTypes.string.isRequired
};

ReviewerDetails.defaultProps = {
  author: {}
};

export default ReviewerDetails;
