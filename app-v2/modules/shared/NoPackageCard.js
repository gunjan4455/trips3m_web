import React from 'react';
import PropTypes from 'prop-types';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';
import { Uniquerequirements } from 'helpers/Icon/Icon';

import styled from '@emotion/styled';

const GRequirementsIconDiv = styled.div({
  width: '150px',
  height: '158px',
  margin: '0 auto 15px',
});

const NoPackageCard = ({ destination }) => {
  const ctaText = 'BUILD YOUR OWN PACKAGE';
  return (
    <div>
        <GRequirementsIconDiv className="relative"><Uniquerequirements /></GRequirementsIconDiv>
        <p className="m0 f18 fw7 pfc3 text-center">Your Requirements are unique! </p>
        <p className="m0 f14 pfc3 mb8 text-center">Are you looking to book a similar holiday package?</p>
        <p className="m0 f14 pfc1 mb8 text-center">Our experts would love to create a package just for you.</p>
        <FormOneCTA rtProps={{ to_loc: destination }}>
          <div className="btn-filled-pri-large ripple fw4">{ctaText}</div>
        </FormOneCTA>
    </div>
  );
};

NoPackageCard.propTypes = {
  destination: PropTypes.string
};

NoPackageCard.defaultProps = {
  destination: ''
};

export default NoPackageCard;
