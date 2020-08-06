import React from 'react';
import PropTypes from 'prop-types';

import './FormLead/LeadForm.scss';
import { LocationMarkerIcon, } from 'helpers/Icon/Icon';
import LocationSearch from './LocationSearch';


class FromLocation extends React.Component {

  componentDidMount() {
    if (__CLIENT__) {
      const google = (typeof window !== 'undefined') ? window.google : false;
      if (navigator && !!navigator.geolocation && google && google.maps && google.maps.Geocoder) {
        navigator.geolocation.getCurrentPosition((position) => {
          const geocoder = new google.maps.Geocoder();
          const latlang = { lat: position.coords.latitude, lng: position.coords.longitude };
          if (!this.props.input.value) {
            geocoder.geocode({ location: latlang }, (results, status) => {
              if (status === 'OK') {
                // places location will be present in 2
                let address;
                for (let index = 2; index >= 0; index -= 1) {
                  if (results[index]) {
                    address = results[index].formatted_address;
                    break;
                  }
                }
                if (this.props.label === 'From') {
                  this.props.input.onChange(address, false);
                }
              }
            });
          }
        });
      }
    }
  }

  render() {
    const { input, label, id } = this.props;
    const inputProps = {
      value: input.value,
      placeholder: 'From Location...',
      onChange: (obj, check = true) => {
        input.onChange(obj, check);
        if (check) {
          console.log('clicked');
          this.props.trackFormOneInteracted();
        }
      },
      id,
      onFocus: (evnt) => {
        input.onFocus(evnt);
      }
    };
    return (
      <div className="form-field-label mb15">
        <label htmlFor={label} className="f14 fw9 pb15 block">
          {label}
        </label>
        <div className="input-with-icon-box">
          <span className="input-icon flexCenter locationIconSize"><LocationMarkerIcon /></span>
          <LocationSearch inputProps={inputProps} />
        </div>
      </div>
    );
  }
}

FromLocation.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  trackFormOneInteracted: PropTypes.func.isRequired,
  id: PropTypes.string
};

FromLocation.defaultProps = {
  id: ''
};

export default FromLocation;

