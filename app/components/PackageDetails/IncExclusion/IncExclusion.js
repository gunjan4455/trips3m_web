import React from 'react';
import PropTypes from 'prop-types';
import Inclusion from './Inclusion';
import Exclusion from './Exclusion';
import './IncExclusion.scss';
import { PACKAGE_INTERACTED } from "../../../actions/segmentEvents";

const IncExclusion = ({ inclusions, exclusions, trackSegment }) => {
  if (!inclusions.length && !exclusions.length) {
    return (
      <div />
    );
  }

  const onChangeHandler = (text) => {
    trackSegment(PACKAGE_INTERACTED, 'Inclusions/Exclusions', text);
  };

  return (
    <div className="row row- sbcw relative">
      <input type="radio" name="inc-exc-radio" className="inc-exc-radio" id="IncExcRadio1" defaultChecked onClick={() => {onChangeHandler('Inclusions');}} />
      <label htmlFor="IncExcRadio1" className="col-xs-12 pl0 pr0">
        <h2 className="inc-exc-button absolute t0 l0 ripple"><div className="wave-dark" />Inclusions</h2>
        <div className="inc-exc-data p15 pl24 pr24">
          <Inclusion list={inclusions} />
        </div>
      </label>
      <input type="radio" name="inc-exc-radio" className="inc-exc-radio" id="IncExcRadio2" onClick={() => {onChangeHandler('Exclusions');}}/>
      <label htmlFor="IncExcRadio2" className="col-xs-12 pl0 pr0 pt0">
        <h2 className="inc-exc-button absolute t0 r0 ripple"><div className="wave-dark" />Exclusions</h2>
        <div className="inc-exc-data p15 pl24 pr24">
          <Exclusion list={exclusions} />
        </div>
      </label>
    </div>
  );
};

IncExclusion.propTypes = {
  inclusions: PropTypes.array,
  exclusions: PropTypes.array,
  trackSegment: PropTypes.func
};

IncExclusion.defaultProps = {
  inclusions: [],
  exclusions: [],
  trackSegment: () => {}
};

export default IncExclusion;
