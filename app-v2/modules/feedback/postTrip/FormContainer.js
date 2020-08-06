import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostTripForm from './Form';
import ThankYou from '../components/ThankYou';
import RatingApp from 'app-v2/modules/feedback/components/RatingApp';
import { rtripPath } from 'helpers/urlHelpers';
import Modal from 'modules/shared/GenericModal';
import { rescue } from 'helpers/utils';
import { MIN_NPS_FOR_RATING } from '../constants';
import { useQuery } from 'containers/Listing/parseFilters';

class PostTripFormContainer extends Component {
  state = {
    npsScore: 0
  };

  static propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
    submitted: PropTypes.bool,
    formValues: PropTypes.object.isRequired,
    createPostTripFeedback: PropTypes.func,
    history: PropTypes.object.isRequired
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.submitted && nextProps.submitted) {
      const rlpPath = rtripPath(this.props.match.params.requestedTripId);

      if(this.state.npsScore <= MIN_NPS_FOR_RATING) {
        this.setState({ submitted: true }, function () {
          setTimeout(() => {
            this.props.history.push(rlpPath);
          }, 3000);
        });
      }
    }
  }

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

  handleSubmit = (values) => {
    const tripId = this.props.match.params.requestedTripId;

    const apiParams = {
      requested_trip_id: tripId
    };

    apiParams.trip_feedback = {
      tt_recommend: values.nps,
      testimonial: values.testimonial,
      hotel: values.hotel,
      cab: values.cab,
      agent_service: values.agent_service,
      quotes_quality: values.quotes_quality,
      quotes_time: values.quotes_time,
      payment_process: values.payment_process,
      trip_memory: values.trip_memory
    };

    this.setState({ npsScore: parseInt(values.nps) });

    return this.props.createPostTripFeedback(tripId, apiParams);
  };

  render() {
    const { submitted, location } = this.props;
    const { npsScore } = this.state;
    const query = useQuery(location.search);
    return (
      <div>
        <PostTripForm enableReinitialize
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

export default PostTripFormContainer;
