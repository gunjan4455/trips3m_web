import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { GTripNavDiv } from './G';
import { ORGANISM_VIEWED } from 'actions/segmentEvents';
import { getTripsByBookingStatusLabel } from 'modules/trip/reducers/tripList';
import WhyTT from 'modules/rlp/whyTT/index';
import NoTrips from './components/NoTrips';
import TripCard from './components/TripCard';
import NavBar from './NavBar';

const TABS = {
  ACTIVE: 'active',
  INCOMPLETE: 'incomplete',
  BOOKED: 'booked'
};

class AllTrips extends Component {

  state = {
    tab: 'active'
  };

  componentDidMount() {
    this.props.trackSegment({
      event: ORGANISM_VIEWED,
      section: 'Active Requests'
    });
  }

  renderTrips(allTrips) {
    let tripIds = [];

    if (this.state.tab === 'active') {
      tripIds = getTripsByBookingStatusLabel(allTrips, TABS.ACTIVE);
    }
    else if (this.state.tab === TABS.INCOMPLETE) {
      tripIds = getTripsByBookingStatusLabel(allTrips, TABS.INCOMPLETE);
    }
    else if (this.state.tab === TABS.BOOKED) {
      tripIds = getTripsByBookingStatusLabel(allTrips, TABS.BOOKED);
    }

    if (!tripIds.length) {
      return <div>
        <NoTrips trackSegment={this.props.trackSegment} />
        <WhyTT.container />
      </div>;
    }

    return tripIds.map(id => <TripCard key={id} tripDetails={allTrips.byId[id]}
                                       reactivateBooking={this.props.reactivateBooking}
                                       trackSegment={this.props.trackSegment} />);
  }

  toggleTab = (tab) => {
    this.setState({ tab }, () => {
      this.props.trackSegment({
        event: ORGANISM_VIEWED,
        section: tab === TABS.ACTIVE ? 'Active Requests' : 'Incomplete Requests'
      });
    });
  };

  goBackHandler = () => {
    window.history.back();

    // currently we are coming on this page after refresh, This code will be used when we redirect here with react routing.
    // const { location, goBack } = this.props;
    // location.action === 'POP' ? this.props.push('/') : goBack();
  };

  render() {
    const { trips, trackSegment } = this.props;

    return (
      <div>
        <NavBar goBack={this.goBackHandler} />
        <div className="clearfix contentBackground sbc5">
          <div className="flex sbcw mb8 bb bs6 at_tripNav overflowXscroll">
            <GTripNavDiv
              className={`flexFull pt15 pb15 pl24 pr24 text-center relative nowrap ${this.state.tab === TABS.ACTIVE ? 'active' : null} at_active`}>
              <span className="f14" onClick={() => this.toggleTab(TABS.ACTIVE)}>Active Requests</span>
            </GTripNavDiv>
            <GTripNavDiv
              className={`flexFull pt15 pb15 pl24 pr24 text-center relative nowrap ${this.state.tab === TABS.INCOMPLETE ? 'active' : null} at_incomplete`}>
              <span className="f14 at_incompleteReq"
                    onClick={() => this.toggleTab(TABS.INCOMPLETE)}>Incomplete Requests</span>
            </GTripNavDiv>
            <GTripNavDiv
              className={`flexFull pt15 pb15 pl24 pr24 text-center relative nowrap ${this.state.tab === TABS.BOOKED ? 'active' : null} at_booked`}>
              <span className="f14 at_bookedReq"
                    onClick={() => this.toggleTab(TABS.BOOKED)}>Booked</span>
            </GTripNavDiv>
          </div>
          {trips.allIds.length ?
            this.renderTrips(trips) :
            <div>
              <NoTrips trackSegment={trackSegment} />
              <WhyTT.container />
            </div>
          }
        </div>
      </div>
    );
  }
}

AllTrips.propTypes = {
  trips: PropTypes.object.isRequired,
  location: PropTypes.object,
  reactivateBooking: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  trackSegment: PropTypes.func
};

AllTrips.defaultProps = {
  trackSegment: () => {}
};

export default AllTrips;
