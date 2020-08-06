import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { rtripPath } from 'helpers/urlHelpers';
import { DownArrow } from 'helpers/Icon/Icon';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';
import {
  GTripListDiv, GDropdownButton, GTripsListUl, GArrowDownSpan
} from './G';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false
    };
    this.getTrips = this.getTrips.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.state.dropDownOpen && !this.tripListElement_.contains(event.target)) {
      this.setState({ dropDownOpen: false });
    }
  };

  trackSegmentEvent = (event, section, object, cta) => {
    const { trackSegment } = this.props;

    rescue(() => {
      trackSegment({
        event,
        section,
        object,
        cta
      });
    });
  };

  handleChange = (trip) => {
    this.trackSegmentEvent(ORGANISM_CLICKED, 'Trips dropdown section', '', trip.firstDestinationName);
    this.setState({ dropDownOpen: !this.state.dropDownOpen });
  };

  toggleDropDown = () => {
    this.setState({ dropDownOpen: !this.state.dropDownOpen });
  };

  getTrips = () => {
    const { trips } = this.props;
    return (trips.allIds.map(tripId => {
      const trip = trips.byId[tripId];
      const rTripUrl = rtripPath(trip.id);

      return (
        <li key={trip.id}>
          <Link to={rTripUrl} onClick={() => this.handleChange(trip)}>
            <span title={trip.firstDestinationName}
                  className="block ellipsis f14 at_DestinationName">{trip.firstDestinationName || trip.toLoc}</span>
            <span className="block f12 pfc1 at_bookingId">Booking ID #{trip.id}</span>
          </Link>
        </li>
      );
    }));
  };

  render() {
    const { trips, currentTripId } = this.props;
    const currentTrip = trips.byId[currentTripId];

    return (
      <GTripListDiv className="flexFull relative sbcw radius2">
        <div className="clearfix relative">
          <div ref={(ref) => this.tripListElement_ = ref}>
            <GDropdownButton className="radius2 at_tripListButton relative pr32 ellipsis" onClick={this.toggleDropDown}>
              <span
                className="fw7 at_destinationname">{currentTrip.firstDestinationName || currentTrip.toLoc}</span>
              {
                <GArrowDownSpan className={!this.state.dropDownOpen ? '' : 'arrowDown'}>
                  <DownArrow />
                </GArrowDownSpan>
              }
            </GDropdownButton>
            <GTripsListUl
              className={`dropDownList radius2 bs4 mt3 sbcw ${!this.state.dropDownOpen ? ' dropdownClosed' : ''}`}>
              {
                this.props.trips.allIds && this.props.trips.allIds.length > 0
                  ? this.getTrips()
                  : null
              }
            </GTripsListUl>
          </div>
        </div>
      </GTripListDiv>
    );
  }
}

Dropdown.propTypes = {
  trips: PropTypes.object.isRequired,
  currentTripId: PropTypes.number.isRequired,
  trackSegment: PropTypes.func.isRequired,
};

export default Dropdown;
