import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from 'appConfig';

class SeeMapPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Map: null
    };
    this.MyMapComponent = null;
  }

  componentDidMount() {
    const reactGoogleMaps = () => import(/* webpackChunkName: 'react-google-maps' */ 'react-google-maps')
      .then((module) => {
        this.MyMapComponent = this.renderMapComponent(module);
        this.setState({ Map: module });
      });

    document.readyState === 'complete' ? reactGoogleMaps() : window.addEventListener('load', reactGoogleMaps);
  }

  renderMapComponent = (Map) => {
    return Map ?
      Map.withScriptjs(Map.withGoogleMap((customProps) => {
        const { coordinates, isMarkerShown, zoomRatio } = customProps;
        return (
          <Map.GoogleMap defaultZoom={zoomRatio} defaultCenter={{ lat: 10.8505, lng: 76.2711 }} center={{
            lat: coordinates.latitude || coordinates.lat,
            lng: coordinates.longitude || coordinates.long
          }}>
            {
              isMarkerShown ?
                <Map.Marker position={{
                  lat: coordinates.latitude || coordinates.lat,
                  lng: coordinates.longitude || coordinates.long
                }}>
                </Map.Marker> : null
            }
          </Map.GoogleMap>);
      })) : null;
  };

  render() {
    const { coordinates, name, info, zoomRatio } = this.props;
    const googleMapUrl = `https://maps.googleapis.com/maps/api/js?key=${config.googleMap.key}&v=3.exp&libraries=geometry,drawing,places`;
    return (
      <div className="flex sbcw flexDColumn flexFull">
        {
          this.MyMapComponent ?
            <this.MyMapComponent
              isMarkerShown
              coordinates={coordinates}
              zoomRatio={zoomRatio}
              name={name}
              info={info}
              googleMapURL={googleMapUrl}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            /> : null
        }
      </div>);
  }
}

SeeMapPopUp.propTypes = {
  coordinates: PropTypes.object.isRequired,
  name: PropTypes.string,
  info: PropTypes.string,
  zoomRatio: PropTypes.number
};

SeeMapPopUp.defaultProps = {
  name: '',
  info: '',
  zoomRatio: 6
};

export default SeeMapPopUp;

