import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import superagent from 'superagent';
import { formatURL, currencyToSymbol, numberWithCommas } from '../../utils/parsers';
import { CalendarIcon, DurationIcon, BudgetIcon, Visa as VisaIcon,
  InternationalIconBlack, WeatherIcon } from 'helpers/Icon/Icon';

const CityDataFlex = styled.div({
  display: 'flex',
});

const CityDataWrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'space-between',
});

const CityDataRight = styled.div({
  paddingLeft: '15px',
  maxWidth: '100%',
});

const CallIcon = styled.span({
  width: '24px',
  display: 'block',
  height: '24px',
});

const CityDataInnerBox = styled.div({
  paddingLeft: '40px !important',
  paddingBottom: '15px',
  position: 'relative',
  width: '33.3333%',
  minWidth: '33.3333%',
  '& span>svg': {
    display: 'block',
    maxWidth: '28px',
  },
  '& .absolute-website>svg': {
    width: '28px !important',
    height: '28px !important',
  }
});

class CityBlockCardMain extends Component {
  static propTypes = {
    details: PropTypes.array.isRequired,
    destinations: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      weather: ''
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  componentDidUpdate() {
    this.getWeather();
  }

  getWeather = () => {
    if (this.props.destinations.primary) {
      superagent.get(formatURL({ path: '/fetch_current_weather.json' }))
        .query({ destination_name: this.props.destinations.primary })
        .then((res) => {
          this.setState({ weather: res.body.weather });
        });
    }
  };

  render() {
    const detail = this.props.details[0];
    return (
      <CityDataFlex className="p15 clearfix">
        { /* <MapCon>
          <a className="btn-filled-pri" href="">See Map</a>
        </MapCon> */ }
        <CityDataRight>
          <h4 className="f20 fw9 pb8 m0">Quick Information</h4>
          <CityDataWrapper className="clearfix">
            {
              this.state.weather ?
                <CityDataInnerBox className="col-md-4 pr8">
                  <span className="absolute l0 t5 w30 h30"><WeatherIcon /></span>
                  <p className="m0 mb4 pfc4 f12 fw7">Current weather</p>
                  <h6 className="f14 fw9 m0 ellipsis">{this.state.weather}</h6>
                </CityDataInnerBox>
              : null
            }
            {
              detail.bestTimeToVisit ?
                <CityDataInnerBox className="col-md-4 pr8">
                  <CallIcon className="absolute l0 t5"><CalendarIcon /></CallIcon>
                  <p className="m0 mb4 pfc4 f12 fw7">Best time to visit</p>
                  <h6 className="f14 fw9 m0 ellipsis">{detail.bestTimeToVisit}</h6>
                </CityDataInnerBox>
            : null
          }
            {
            detail.idealDuration ?
              <CityDataInnerBox className="col-md-4 pr8">
                <span className="absolute l0 t5 w30 h30"><DurationIcon /></span>
                <p className="m0 mb4 pfc4 f12 fw7">Ideal Duration</p>
                <h6 className="f14 fw9 m0">{detail.idealDuration}</h6>
              </CityDataInnerBox>
            : null
          }
            {
            detail.visa ?
              <CityDataInnerBox className="col-md-4 pr8">
                <CallIcon className="absolute l0 t5"><VisaIcon /></CallIcon>
                <p className="m0 mb4 pfc4 f12 fw7">Visa</p>
                <h6 className="f14 fw9 m0 ellipsis">{detail.visa}</h6>
              </CityDataInnerBox>
            : null
          }
            {
            detail.startingPrice ?
              <CityDataInnerBox className="col-md-4 pr8">
                <span className="absolute l0 t5 w30 h30"><BudgetIcon /></span>
                <p className="m0 mb4 pfc4 f12 fw7">Starting from</p>
                <h6 className="f14 fw9 m0 ellipsis">
                  {`${currencyToSymbol('Rupee')}${numberWithCommas(Math.round(detail.startingPrice))}/-`}
                </h6>
              </CityDataInnerBox>
            : null
          }
            {
            detail.website ?
              <CityDataInnerBox className="col-md-4 pr8">
                <span className="absolute absolute-website l0 t5 w30 h30"><InternationalIconBlack /></span>
                <p className="m0 mb4 pfc4 f12 fw7">Website</p>
                <h6 className="f14 fw9 m0 breakword">{detail.website}</h6>
              </CityDataInnerBox>
            : null
          }
          </CityDataWrapper>
          <ul className="package-tags clearfix">
            {detail.labels.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </CityDataRight>
      </CityDataFlex>
    );
  }
}

export default CityBlockCardMain;
