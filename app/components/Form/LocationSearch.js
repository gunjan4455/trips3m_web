import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';

import styles from './locationSearch.cm.scss';
import config from 'appConfig';

const customStyles = {
  root: { position: 'relative' },
  input: { width: '100%' },
  autocompleteContainer: { backgroundColor: '#FFF', zIndex: 5 },
  autocompleteItem: { color: '#333' },
  autocompleteItemActive: { color: '#FE5246', backgroundColor: '#FFF' }
};

const classNames = {};

class LocationSearch extends Component {
  static propTypes = {
    inputProps: PropTypes.object.isRequired,
    isError: PropTypes.bool,
  };

  static defaultProps = {
    isError: false,
  };

  constructor(props) {
    super(props);

    if (props.isError) {
      classNames.input = 'input-error';
    }
    this.state = {
      isMapLoaded: false
    };
  }

  componentDidMount() {
    const { inputProps } = this.props;
    const $S = require('scriptjs');
    $S(`https://maps.googleapis.com/maps/api/js?libraries=places&key=${config.googleMap.key}`,
      () => {
        this.setState({
          isMapLoaded: true
        });
        const google = (typeof window !== 'undefined') ? window.google : false;
        if (navigator && !!navigator.geolocation && google && google.maps && google.maps.Geocoder) {
          navigator.geolocation.getCurrentPosition((position) => {
            const geocoder = new google.maps.Geocoder();
            const latlang = { lat: position.coords.latitude, lng: position.coords.longitude };
            if (!inputProps.value) {
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
                  inputProps.onChange(address, false);
                }
              });
            }
          });
        }
      }
    );
  }

  render() {
    const { inputProps } = this.props;

    return (
      this.state.isMapLoaded ?
        <PlacesAutocomplete
          inputProps={inputProps}
          styles={customStyles}
          classNames={classNames}
        /> :
        <div className='relative pb0'>
          <input
            className={`${styles.input} iblock pb0 relative wfull`}
            type="text"
            defaultValue={inputProps.value}
            placeholder={inputProps.placeholder}
          />
        </div>
    );
  }
}

export default LocationSearch;
