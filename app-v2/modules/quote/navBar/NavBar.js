import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';

import DetailNav from 'modules/shared/DetailNav';

const NavBar = ({ options, trackSegment }) => {
  return (
    <div className="mt8">
      <Sticky enabled={true} top={0} innerZ={4}>
        <DetailNav options={options} trackSegment={trackSegment} />
      </Sticky>
    </div>
  );
};

NavBar.propTypes = {
  options: PropTypes.array.isRequired,
  trackSegment: PropTypes.func
};

NavBar.defaultProps = {
  trackSegment: () => {}
};

export default NavBar;
