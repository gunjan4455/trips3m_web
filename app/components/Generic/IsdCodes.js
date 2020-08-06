import React from 'react';
import PropTypes from 'prop-types';

import ISD_CODES from '../../helpers/isdCodes.js';

const IsdCodes = ({ input, trackFormOneInteracted, id, defaultValue }) => {
  const handleChange = (event) => {
    input.onChange(event.target.value);
    trackFormOneInteracted();
  };
  return (
    <select id={id} className="select" onChange={handleChange} defaultValue={defaultValue} >
      {
        Object.keys(ISD_CODES).map(country => (
          <option value={ISD_CODES[country]} key={`isd_${country}`}>
            {`${ISD_CODES[country]} (${country})`}
          </option>
        ))
      }
    </select>
  );
};

IsdCodes.propTypes = {
  input: PropTypes.object.isRequired,
  trackFormOneInteracted: PropTypes.func,
  id: PropTypes.string,
  defaultValue: PropTypes.string
};

IsdCodes.defaultProps = {
  trackFormOneInteracted: () => {},
  id: 'isd_code',
  defaultValue: ''
};

export default IsdCodes;
