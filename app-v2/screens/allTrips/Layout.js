import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import AllTrips from 'app-v2/modules/trip/allTrips';
import { rescue } from 'helpers/utils';
import { trackSegment } from 'actions/segmentEvents';

class Layout extends Component {

  constructor(props) {
    super(props);
  }

  trackSegmentEvent = (data = {}) => {
    rescue(() => {
      trackSegment({
        event: data.event,
        category: data.category || 'TravellerDashboard',
        section: data.section || '',
        object: data.object,
        cta: data.cta,
        misc_id_1: data.miscId1,
        misc_type_1: data.miscType1,
        misc_id_2: data.miscId2,
        misc_type_2: data.miscType2,
        misc_id_3: data.miscId3,
        misc_type_3: data.miscType3,
        misc_id_4: data.miscId4,
        misc_type_4: data.miscType4,
        misc_id_5: data.miscId5,
        misc_type_5: data.miscType5
      });
    });
  };


  render() {
    const AllTripsContainer = AllTrips.container;

    return (
      <div>
        <Helmet>
          <meta name="page_fullname" content="All Trips" />
          <meta name="page_name" content="All Trips" />
          <meta name="name" content="All Trips" />
          <meta charSet="utf-8" />
          <title>Traveler Dashboard - TravelTriangle</title>
          <link rel="canonical" href="https://traveltriangle.com/travellers/dashboard" />
        </Helmet>

        <AllTripsContainer trackSegment={this.trackSegmentEvent} />

      </div>
    );
  }
}

export default Layout;
