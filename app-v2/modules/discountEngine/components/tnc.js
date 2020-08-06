import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
import styled from '@emotion/styled';

const GTnCText = styled.div({
  maxHeight: '200px',
  overflow: 'auto'
});

const { parse } = new Parser();

const Tnc = ({ tncHtml }) => {

  return (
    <div className="p24">
      <h2 className="f18 mb15">Terms and Conditions</h2>
      <GTnCText>{parse(tncHtml)}</GTnCText>
    </div>
  );
};

Tnc.propTypes = {
  tncHtml: PropTypes.string
};

Tnc.defaultProps = {
  trackSegmentEvent: () => {
  }
};

export default Tnc;
