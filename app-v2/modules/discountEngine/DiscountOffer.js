import React from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';

import './discountOffer.scss';
import { OffersBoxIcon } from 'helpers/Icon/Icon';
import { trackSegment } from 'actions/segmentEvents';
import { ORGANISM_CLICKED, ORGANISM_VIEWED } from 'actions/segmentEvents';
import Modal from 'modules/shared/GenericModal';
import DiscountOfferPopup from './components/DiscountOfferPopup';
import { OffersIcon } from 'helpers/Icon/Icon';
import AppliedCouponBanner from "./components/AppliedCouponBanner";

export default class DiscountOffer extends React.Component {

  static propTypes = {
    tripId: PropTypes.number.isRequired,
    offers: PropTypes.array,
    renderAppliedCoupon: PropTypes.bool,
    appliedOffer: PropTypes.object,
    params: PropTypes.object.isRequired,
    discountInformation: PropTypes.object.isRequired,
    applyDiscountCoupon: PropTypes.func.isRequired,
    removeDiscountCoupon: PropTypes.func.isRequired,
    updateDiscountCoupon: PropTypes.func.isRequired,
    updateFormField: PropTypes.func.isRequired,
    clearFormSubmitError: PropTypes.func.isRequired,
    fetchAppliedOffer: PropTypes.func.isRequired
  };

  static defaultProps = {
    offers: [],
    renderAppliedCoupon: false,
    appliedOffer: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      closeModal: false
    };

    this.hasDiscountApplied = props.discountInformation && props.discountInformation.discount > 0 || false;
    this.isEventTracked = false;
  }

  componentDidMount() {
    if (this.props.discountInformation.discountableTypeId) {
      this.props.fetchAppliedOffer(this.props.discountInformation.discountableTypeId);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.discountInformation.discountableTypeId !== nextProps.discountInformation.discountableTypeId) {
      this.props.fetchAppliedOffer(nextProps.discountInformation.discountableTypeId);
    }
  }

  trackSegmentEvent = (data, event) => {
    if (event === ORGANISM_VIEWED && this.isEventTracked) {
      return;
    }
    this.isEventTracked = event === ORGANISM_VIEWED;

    const { tripId } = this.props;

    trackSegment({
      category: data.category,
      section: data.section,
      object: data.object,
      cta: data.cta,
      event: event,
      trip_id: tripId,
      destination_id: '',
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
  };

  throwSubmissionError = (error) => {
    throw new SubmissionError({
      _error: error
    });
  };

  handleRemoveDiscountCoupon = () => {
    return this.props.removeDiscountCoupon(this.props.tripId).then((results) => {
      if (results && results.valid === 'true') {
        window.location.reload();
      }
    });
  };

  applyCouponCallback = (results) => {
    if (results) {
      if (results.valid === 'true') {
        this.setState({ closeModal: true });
        window.location.reload();
      }
      else {
        this.throwSubmissionError(results.msg);
      }
    }
    else {
      this.throwSubmissionError('Some server error occurred!');
    }
  };

  applyDiscountCoupon = (params) => {
    return this.props.applyDiscountCoupon(params)
      .then(this.applyCouponCallback);
  };

  handleSubmit = (values) => {
    this.props.clearFormSubmitError();

    if (!values.discountOfferInput && (!values.discountOfferRadio || values.discountOfferRadio === '0')) {
      this.throwSubmissionError('Please select atleast 1 coupon');
    }

    const params = { offerType: 'coupon', offerCode: '', tripId: this.props.tripId };
    let applyMode = 'Typed';
    let couponId = null;

    if (values.discountOfferInput) {
      params.offerCode = values.discountOfferInput;
    }
    else if (values.discountOfferRadio) {
      const offer = this.props.offers.filter(offer => offer.couponType.toLowerCase() === 'normal'
        && offer.couponId.toString() === values.discountOfferRadio)[0];
      params.offerCode = offer.code;
      couponId = offer.couponId;
      applyMode = 'Selection';
    }

    this.trackSegmentEvent({
      category: '',
      section: 'Discount Pop-up',
      object: '',
      cta: 'Apply',
      miscId1: couponId,
      miscType1: 'Coupon Applied',
      miscId2: applyMode,
      miscType2: 'Application Mode',
    }, ORGANISM_CLICKED);

    if (this.hasDiscountApplied) {
      return this.props.updateDiscountCoupon(params)
        .then(this.applyCouponCallback);
    }

    return this.applyDiscountCoupon(params);
  };

  onSensorChange = (isVisible) => {
    if (isVisible) {
      this.trackSegmentEvent({
        category: '',
        section: 'Discount Banner',
        object: '',
        cta: '',
      }, ORGANISM_VIEWED);
    }
  };

  renderDiscountOffersModal() {
    const {
      offers, updateFormField, discountInformation
    } = this.props;

    return (<Modal
      trigger={<button type="button" className="sfc1 f14 fw7 m0 ml5 flex alignCenter cursorP at_getOffersCTA"><span
        className="input-24 mr8 p2 iblock"><OffersIcon /></span> Get Offers</button>}
      fullView={true}
      isDefaultModal={false}
      closeModal={this.state.closeModal}
      onAfterModalOpen={() => this.trackSegmentEvent({ cta: 'Change', section: 'Discount Banner' }, ORGANISM_CLICKED)}
      onAfterModalClose={() => this.trackSegmentEvent({ cta: 'Close', section: 'Discount Pop-up' }, ORGANISM_CLICKED)}
      hasCustomClose={true}
    >
      <DiscountOfferPopup
        offers={offers}
        discountInformation={discountInformation}
        handleSubmit={this.handleSubmit}
        updateFormField={updateFormField}
        trackSegmentEvent={this.trackSegmentEvent} />
    </Modal>);
  }

  render() {
    return (
      this.props.renderAppliedCoupon
        ? <AppliedCouponBanner appliedOffer={this.props.appliedOffer}
                               removeDiscountCoupon={this.handleRemoveDiscountCoupon} />
        : this.renderDiscountOffersModal()
    );
  }
}
