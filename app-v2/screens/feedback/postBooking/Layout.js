import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Sensor from 'react-visibility-sensor';

import { ORGANISM_VIEWED } from 'actions/segmentEvents';
import { trackSegment } from 'actions/segmentEvents';
import common from 'app-v2/common';
import Header from 'modules/feedback/components/Header';
import Roster from 'modules/roster/index';
import PostBooking from 'modules/feedback/postBooking/index';
import { rescue } from 'helpers/utils';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.isEventTracked = {};
  }

  componentDidMount() {
    /*    this.props.layout.components.map((component) => {
          this.isEventTracked[component.name] = false;
        });*/
  }

  UNSAFE_componentWillReceiveProps(props, nextProps) {
    /*if (props.currentTripId !== nextProps.currentTripId) {
      this.isEventTracked = {};
    }*/
  }

  trackSegmentEvent = (data = {}) => {
    rescue(() => {
      trackSegment({
        event: data.event,
        category: data.category || 'RLP',
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

  onSensorChange = (isVisible, config) => {
    if (isVisible) {
      if (!this.isEventTracked[config.name]) {
        this.isEventTracked[config.name] = true;

        this.trackSegmentEvent({
          event: ORGANISM_VIEWED,
          section: config.name,
          cta: ''
        });
      }
    }
  };

  render() {

    return (
      <div className="clearfix">

        <Helmet>
          <meta name="page_fullname" content="Quote Detail" />
          <meta name="page_name" content="Quote Detail" />
          <meta name="name" content="Quote Detail" />
        </Helmet>

        <Roster timeout={3000} />

        <div className="clearfix contentBackground sbc5">
          <div className="container">
            <div className="row">
              <Header text='Feedback' />
              <PostBooking />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {};

export default Layout;
