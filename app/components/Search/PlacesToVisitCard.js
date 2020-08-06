import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
// import { Parser } from 'html-to-react';

const ImgContainer = styled.div({
  width: '100%',
  height: '140px',
  overflow: 'hidden',
  position: 'relative',
  '& img': {
    width: '100%',
    minHeight: '140px',
  }
});

const CardDatacontainer = styled.div({
  padding: '15px',
  boxShadow: '0 0 4px #ccc',
});

const PlacesToVisitCard = ({ detail }) => {
  return (<div className="border clearfix">
    <a className="pfc3" rel="noopener noreferrer" target="_blank" href={detail.url}>
      <ImgContainer>
        <img src={detail.image} alt={detail.title} />
      </ImgContainer>
      <CardDatacontainer className="clearfix">
        <h4 className="f14 fw9 pb8 m0 ellipsis">{detail.title}</h4>
        {/* <p className="f14 m0 pb8">{new Parser().parse(detail.description)}</p> */}
        <ul className="package-tags">
          { detail.labels.map((l, i) => <li key={i}>{l}</li>)}
        </ul>
      </CardDatacontainer>
    </a>
  </div>);
};

PlacesToVisitCard.propTypes = {
  detail: PropTypes.object.isRequired
};

export default PlacesToVisitCard;
