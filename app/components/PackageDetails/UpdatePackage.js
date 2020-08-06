import React from 'react';
import PropTypes from 'prop-types';

const UpdatePackage = (
  {
    openUpdate,
    starRating,
    month
  }
) => (
  <div className="row row- p8">
    <div className="row row- p15 bs4 radius2">
      <div className="col-xs-8 pl0 pr8">
        <p className="f12 fw9">Price for:</p>
        <p className="f12 fw3">Upto {starRating} star hotel in <span className="sfc1">{month}</span></p>
      </div>
      <div className="col-xs-4 pl8 pr0">
        <button onClick={openUpdate} className="fw4 pfc2 pt8 text-right fright">Change</button>
      </div>
    </div>
  </div>
);

UpdatePackage.propTypes = {
  openUpdate: PropTypes.func.isRequired,
  starRating: PropTypes.number,
  month: PropTypes.string
};

UpdatePackage.defaultProps = {
  starRating: 3,
  month: 'May'
};

export default UpdatePackage;
