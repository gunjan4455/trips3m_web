import React from 'react';
import PropTypes from 'prop-types';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';
import styled from '@emotion/styled';

import Img from 'components/Common/Img';
import config from 'appConfig';

const GLetsGoDiv = styled.div({
  height: '171px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    minHeight: '100%',
  }
});

const FormOneClickDetail = {
  section: 'Banner Section',
  cta: 'Lets go'
};

const LetsGo = ({ data, destination }) => (
  <div className="at_didnotfind sbcw">
    <GLetsGoDiv className="relative sbcw">
      <Img width={395} height={200}
           ikSrc={`${config.assets.images}/public-product/package_listing_banners/Image_CB+mob.jpg`}
           alt="lets go banner" />
      <p className="absolute pl15 pr15 z2 b0 l0 r0 pfc3 f24 fw9 m0">{data.title}</p>
    </GLetsGoDiv>
    <div className="p15 pt5">
      <p className="f14 m0 pfc4">{data.heading}</p>
      <FormOneCTA rtProps={{ to_loc: destination }}>
        <span className="btn-pri-large wfull mt24">Get Experts' Callback</span>
      </FormOneCTA>
    </div>
  </div>
);

LetsGo.propTypes = {
  destination: PropTypes.string,
  data: PropTypes.object,
};

LetsGo.defaultProps = {
  destination: '',
  data: () => {}
};

export default LetsGo;
