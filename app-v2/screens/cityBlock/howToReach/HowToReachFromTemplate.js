import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Swiper from 'components/Swiper/Swiper';
import Heading from 'modules/shared/Heading';
import Overview from 'modules/shared/Overview';
import { AllTrips } from 'helpers/Icon/Icon';
import config from 'appConfig';
import { showPopUp } from 'helpers/exitIntent';

const Ul = styled.ul({
  padding: '0',
  margin: '0',
  display: 'flex',
  alignItems: 'flex-start',
  '& li': {
    margin: '0 34px 0 0',
    flexGrow: '1',
    paddingLeft: '0px',
    position: 'relative',
    '&:last-child': {
      marginRight: '0',
    },
  },
});
const Icon = styled.span({
  width: '18px',
  height: '18px',
  '& svg': {
    width: '18px',
    height: '18px',
  }
});
const HowToReachDiv = styled.div({
  margin: '0 auto',
  textAlign: 'left',
  '& tr': {
    background: '#f2f2f2',
    '&:nth-child(2n - 1)': {
      background: '#fff',
    },
    '& td, th': {
      padding: '12px',
    },
  },
});
const GHowToIconDiv = styled.div({
  width: '24px',
  height: '24px',
  '& svg': {
    position: 'absolute',
  }
});

class HowToReachFrom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Map: null
    };
    this.MyMapComponent = null;
  }

  renderMapComponent = (Map) => (Map ? Map.withScriptjs(Map.withGoogleMap((customProps) => {
    const DirectionsService = new google.maps.DirectionsService();
    const { toFrom } = customProps;
    const destinations = toFrom.split('to').map(d => d.trim());
    DirectionsService.route({
      origin: destinations[0],
      destination: destinations[1],
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions status: ${status} result: ${JSON.stringify(result, null, 2)}`);
      }
    });

    return (
      <Map.GoogleMap
        defaultZoom={7}
        defaultCenter={new google.maps.LatLng(28.6139391, 77.2090212)}>
        {this.state.directions && <Map.DirectionsRenderer directions={this.state.directions} />}
      </Map.GoogleMap>);
  })) : null);

  componentDidMount() {
    const reactGoogleMaps = () => import(/* webpackChunkName: 'react-google-maps' */ 'react-google-maps').then((module) => {
      this.MyMapComponent = this.renderMapComponent(module);
      this.setState({ Map: module });
    });

    document.readyState === 'complete' ? reactGoogleMaps() : window.addEventListener('load', reactGoogleMaps);
  }

  render() {
    const { data, exitIntent } = this.props;
    return (
      <div className="clearfix m8 mt0">
        <div className="p15 sbcw">
          <Heading title={data.title} type="main-heading" />
          {data && data.distance && data.distance.length ? (
            <HowToReachDiv className="mb15">
              <Swiper
                id="howtoreachFromSwiper"
                spaceBetween={15}
                slidesPerView="auto"
                ssrAnimation={{ width: 56, height: 41 }}
                rebuildOnUpdate
              >
                {data.distance.map((row, i) => (
                  <div key={i} className="radius2">
                    <div className="mb15 flex alignCenter">
                      <GHowToIconDiv className="relative mr8 flex alignCenter justifyCenter">
                        <AllTrips />
                      </GHowToIconDiv>
                      <span className="pfc3 fw9 f14">{row.from}</span>
                    </div>
                    {row.distance ? (
                      <div className="pfc3 fw9 mb15 f24">
                        Distance{row.distance}
                      </div>
                    ) : null}
                    <div className="flex spaceBetween">
                      {row.byair ? (
                        <div className="f14">
                          <p className="fw9 mb5">By Air</p>
                          {row.byair}
                        </div>
                      ) : null}
                      {row.byroad ? (
                        <div className="f14">
                          <p className="fw9 mb5">By Road</p>
                          {row.byroad}
                        </div>
                      ) : null}
                      {row.bytrain ? (
                        <div className="f14">
                          <p className="fw9 mb5">By Train</p>
                          {row.bytrain}
                        </div>
                      ) : null}
                      {row.bysea ? (
                        <div className="f14">
                          <p className="fw9 mb5">By Sea</p>
                          {row.bysea}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </Swiper>
            </HowToReachDiv>
          ) : null}
          <div className="mb15">
            <Overview description={data.description} />
          </div>
          {this.MyMapComponent && (
            <this.MyMapComponent
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleMap.key}&v=3.exp&libraries=geometry,drawing,places`}
              isMarkerShown
              origin={data.toCoordinates}
              from={data.fromCoordinates}
              toFrom={
                data.distance &&
                data.distance.length &&
                data.distance[0].from
              }
            />
          )}
          <div id="reactExitIntentImage" className="mkt-mob-exit-intent relative pl8 pr8 mb8" onClick={showPopUp} />
        </div>
      </div>
    );
  }
}

export default HowToReachFrom;

HowToReachFrom.propTypes = {
  data: PropTypes.object.isRequired,
  exitIntent: PropTypes.object.isRequired
};
