import React from 'react';
import { PropTypes } from "prop-types";
import config from 'appConfig';
import Img from "app/components/Common/Img";

const SpinningLoader = (props) => {
  const size = `${props.size}px`;
  return (
    <div style={{width: size, height: size}}>
      <Img width="100%" height="100%" src={`${config.assets.images}/public-product/spinningLoader.gif`} ikSrc={`${config.assets.images}/public-product/spinningLoader.gif`} alt="loader" />
    </div>
  );
};

SpinningLoader.propTypes = {
  size: PropTypes.number
};

SpinningLoader.defaultProps = {
  size: 100
};

export default SpinningLoader;
