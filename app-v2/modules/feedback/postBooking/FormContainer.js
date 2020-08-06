import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostBookingForm from './Form';
import ThankYou from '../components/ThankYou';
import RatingApp from 'app-v2/modules/feedback/components/RatingApp';
import Modal from 'modules/shared/GenericModal';
import { rtripPath } from 'helpers/urlHelpers';
import { trackSegment } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';
import { MIN_NPS_FOR_RATING } from '../constants';
import { useQuery } from "containers/Listing/parseFilters";

class PostBookingFormContainer extends Component {

  state = {
    npsScore: 0
  };

  static propTypes = {
    securityToken: PropTypes.string.isRequired,
    match: PropTypes.object,
    location: PropTypes.object,
    submitted: PropTypes.bool,
    formValues: PropTypes.object.isRequired,
    createPostBookingFeedback: PropTypes.func,
    history: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {

    if (this.props.submitted && this.state.npsScore <= MIN_NPS_FOR_RATING) {
      const rlpPath = rtripPath(this.props.match.params.requestedTripId);

      setTimeout(() => {
        this.props.history.push(rlpPath);
      }, 3000);
    }
  }

  handleSubmit = (values) => {
    const tripId = this.props.match.params.requestedTripId;

    const apiParams = {
      promoter_score: values.nps,
      agent_quotes_quality: values.agent_quotes_quality,
      agent_quotes_time: values.agent_quotes_time,
      agent_interaction: values.agent_interaction,
      agent_interaction_call: values.agent_interaction_call,
      tt_website_use: values.tt_website_use,
      tt_payment_process: values.tt_payment_process,
      trip_advisor_helpful: values.trip_advisor_helpful,
      trip_advisor_response: values.trip_advisor_response,
      security_token: this.props.securityToken
    };

    apiParams.postbooking_trip_feedback = {
      requested_trip_id: tripId,
      comments: values.comments,
      platform: 'Mobile'
    };

    this.setState({ npsScore: parseInt(values.nps) });

    return this.props.createPostBookingFeedback(tripId, apiParams);
  };

  trackSegmentEvent = (details) => {
    rescue(() => {
      trackSegment({
        event: details.event,
        section: details.section,
        object: '',
        cta: details.cta || ''
      });
    });
  };

  render() {
    const { submitted } = this.props;
    const { npsScore } = this.state;

    const query = useQuery(this.props.location.search);

    return (
      <div>
        <PostBookingForm enableReinitialize
                         initialValues={{ nps: parseInt(query.promoter_score) }}
                         formValues={this.props.formValues}
                         onSubmit={this.handleSubmit}
                         trackSegmentEvent={this.trackSegmentEvent} />
        {
          <Modal hasNoClose={true}
                 trigger={null}
                 isOpen={submitted}>
            {npsScore > MIN_NPS_FOR_RATING ? <RatingApp trackSegmentEvent={this.trackSegmentEvent} /> : <ThankYou />}
          </Modal>
        }
      </div>
    );
  }
}

export default PostBookingFormContainer;
