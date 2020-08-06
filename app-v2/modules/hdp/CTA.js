import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { capitalizeEveryFirstLetter } from 'helpers/parsers';
import FormOneCTA from 'modules/shared/FormOneCTA';

const GCoverPopupForm = styled.div({
  width: '760px',
});

const CTA = ({ destination, hotelId, type }) => (
  <div>
    <div className="mb8">
      <FormOneCTA
        rtProps={{
          to_loc: destination,
          page: 'Hotel Detail Page',
          section: 'Hotel',
          cta: 'Get Quotes',
          object: `Package/${hotelId}`,
        }}
        clickHandler={() => {}}
      >
        <div className="btn-filled-pri-large wfull pl8 pr8"><div className="wave"/>Get Quotes For This {type}</div>
      </FormOneCTA>
    </div>
    <div>
      <FormOneCTA
        rtProps={{
          to_loc: destination,
          page: 'Hotel Detail Page',
          section: 'Hotel',
          cta: 'Book Holiday Package',
          object: `Package/${hotelId}`,
        }}
        clickHandler={() => {}}
      >
        <div className="btn-pri-large wfull pl8 pr8"><div className="wave"/>Book Holiday Package for {capitalizeEveryFirstLetter(destination)}</div>
      </FormOneCTA>
    </div>
  </div>
);

CTA.propTypes = {
  destination: PropTypes.string.isRequired,
  hotelId: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default CTA;
