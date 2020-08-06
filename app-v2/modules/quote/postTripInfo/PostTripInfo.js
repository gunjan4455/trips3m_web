import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { BlueDownArrow, DownloadVoucherIcon, EditPreferencesIcon, AttachmentIcon } from 'helpers/Icon/Icon';

const GArrowIconSpan = styled.span({
  transform: 'rotateZ(-90deg)'
});

const IconMap = {
  'View Vouchers': <DownloadVoucherIcon />,
  'Fill Travelers Details': <EditPreferencesIcon />,
  'View Attachment': <AttachmentIcon />
};

const PostTripCard = ({ text, url }) => (
  <a href={url} className="f14 fw7 sfc1 m0 flex alignCenter sbcw pt8 pb8 pl15 pr15 relative">
    <span className="input-24 iblock mr8">{IconMap[text]}</span>
    <span className="flexFull">{text}</span>
    <span className="absolute-center-v r15">
      <GArrowIconSpan className="input-24 iblock p5"><BlueDownArrow /></GArrowIconSpan>
    </span>
  </a>
);

PostTripCard.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const PostTripInfo = ({
                        showVouchersUrl, vouchersUrl, travelerDetailUrl, currentQuote
                      }) => {
  const downloadUrl = currentQuote.attachment && currentQuote.attachment.downloadUrl;

  return ((showVouchersUrl && vouchersUrl) || travelerDetailUrl || downloadUrl
      ? <div className="f14 sbcw">
        {
          showVouchersUrl && vouchersUrl
            ? <div className="bb"><PostTripCard text='View Vouchers' url={vouchersUrl} /></div>
            : null
        }
        {
          travelerDetailUrl
            ? <PostTripCard text='Fill Travelers Details' url={travelerDetailUrl} />
            : null
        }
        {
          downloadUrl
            ? <PostTripCard text='View Attachment' url={downloadUrl} />
            : null
        }
      </div>
      : null
  );
};

PostTripInfo.propTypes = {
  showVouchersUrl: PropTypes.bool,
  vouchersUrl: PropTypes.string,
  travelerDetailUrl: PropTypes.string,
  trackSegment: PropTypes.func,
  currentQuote: PropTypes.object.isRequired
};

PostTripInfo.defaultProps = {
  showVouchersUrl: false,
  vouchersUrl: '',
  travelerDetailUrl: '',
  trackSegment: () => {
  }
};

export default PostTripInfo;
