import React from 'react';
import PropTypes from 'prop-types';

import { PreferencesIcon } from 'helpers/Icon/Icon';
import { capitalizeFirstLetter } from 'utils/parsers';
import { GPreferenceDiv } from './G';
import Modal from 'modules/shared/GenericModal';
import TripPreferencesEditForm from '../edit/TripPreferences';
import {
  HotelRequiredIds, HotelCustomizationDetail as HotelCustomization,
  CabCustomizationDetail as CabCustomizations
} from '../constants';
import { getTripPreferences, getEligibleAnswersObj } from '../helpers';
import { rescue } from 'helpers/utils';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import EditPreferencesPopup from '../components/EditPreferencesPopup';

const getMultiValueCustomization = (values, selectedOptions) => {
  const customizationAttrs = [];
  for (const customizationId in values.multiValueOptions) {
    const options = values.multiValueOptions[customizationId].optionId;
    for (const optionId in options) {
      const attrs = {
        id: selectedOptions[optionId],
        customization_id: customizationId,
        option_id: optionId
      };

      if (options[optionId]) {
        customizationAttrs.push(attrs);
      } else if (selectedOptions[optionId]) {
        attrs._destroy = true;
        customizationAttrs.push(attrs);
      }
    }
  }

  return customizationAttrs;
};

const getSingleValueCustomization = (values, selectedOptions, customizations) => {
  const customizationAttrs = [];

  for (const customizationId in values.singleValueOptions) {
    let optionId = values.singleValueOptions[customizationId].optionId;
    const prevOption = customizations.find(e => e.id.toString() === customizationId)
      .options.find(e => selectedOptions[e.id]);

    const prevOptionId = prevOption && selectedOptions[prevOption.id] || selectedOptions[optionId];
    let user_input = '';

    if (customizationId === CabCustomizations.questions.id.toString() && values.driverSpeaks) {
      user_input = values.driverSpeaks;
      optionId = CabCustomizations.domesticDestinationOptionId;
    }

    customizationAttrs.push(
      {
        id: prevOptionId,
        customization_id: customizationId,
        option_id: optionId,
        user_input
      }
    );
  }

  return customizationAttrs;
};

const getHotelCustomization = (values, selectedOptions) => {
  const customizationAttrs = [];

  let anyHotelStarSelected = false;
  let hotelNotRequired = false;

  for (const hotelIdKey in values.hotelCategories) {
    const hotelId = parseInt(hotelIdKey, 10);
    const hotelStarSelected = values.hotelCategories[hotelIdKey];

    if (hotelId === HotelRequiredIds.NOT_REQUIRED) {
      hotelNotRequired = hotelStarSelected;
      continue;
    }

    const selected = selectedOptions[hotelId];
    const attrs = {
      id: selected,
      option_id: hotelId,
      customization_id: HotelCustomization.category.id,
    };
    if (hotelStarSelected) {
      anyHotelStarSelected = true;
      customizationAttrs.push(attrs);
    } else if (selected) {
      attrs._destroy = true;
      customizationAttrs.push(attrs);
    }
  }

  if (hotelNotRequired) {
    const selected = selectedOptions[HotelRequiredIds.REQUIRED];
    if (selected) {
      customizationAttrs.push({
        id: selectedOptions[HotelRequiredIds.REQUIRED],
        customization_id: HotelCustomization.required.id,
        option_id: HotelRequiredIds.REQUIRED,
        _destroy: true
      });
    }
    customizationAttrs.push({
      id: selectedOptions[HotelRequiredIds.NOT_REQUIRED],
      customization_id: HotelCustomization.required.id,
      option_id: HotelRequiredIds.NOT_REQUIRED
    });
  } else if (anyHotelStarSelected) {
    const selected = selectedOptions[HotelRequiredIds.NOT_REQUIRED];
    if (selected) {
      customizationAttrs.push({
        id: selectedOptions[HotelRequiredIds.NOT_REQUIRED],
        customization_id: HotelCustomization.required.id,
        option_id: HotelRequiredIds.NOT_REQUIRED,
        _destroy: true
      });
    }
    customizationAttrs.push({
      id: selectedOptions[HotelRequiredIds.REQUIRED],
      customization_id: HotelCustomization.required.id,
      option_id: HotelRequiredIds.REQUIRED
    });
  }

  return customizationAttrs;
};

class TripPreferences extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      closeModal: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.updated && nextProps.updated) {
      this.closeModal();
    }
  }

  trackSegmentEvent = (event, section, object, cta) => {
    rescue(() => {
      this.props.trackSegment(event, section, object, cta);
    });
  };

  updateTripPreference = (values) => {

    let customizationAttrs = [];
    const { preferencesData: { customizations, eligibleAnswers: selectedAnswers } } = this.props.preferences;

    const selectedOptions = getEligibleAnswersObj(selectedAnswers);

    const hotelCustomization = getHotelCustomization(values, selectedOptions);
    const singleValueCustomization = getSingleValueCustomization(values, selectedOptions, customizations);
    const multiValueCustomization = getMultiValueCustomization(values, selectedOptions);

    customizationAttrs = [...customizationAttrs, ...hotelCustomization, ...singleValueCustomization, ...multiValueCustomization];
    const flightAnswerAttributes = {
      customization_id: values.flightAnswerAttributes.customizationId,
      id: values.flightAnswerAttributes.id,
      option_id: values.flightAnswerAttributes.optionId
    };

    const params = {
      requested_trip: {
        info: values.info,
        budget: values.budget,
        flight_answer_attributes: flightAnswerAttributes,
        other_answers_attributes: customizationAttrs
      }
    };
    this.trackSegmentEvent(ORGANISM_CLICKED, 'preferences', '', 'Confirm');
    this.props.handleSubmit(this.props.currentTripId, params);
  };

  handleClick = () => {
    this.trackSegmentEvent(ORGANISM_CLICKED, 'Edit preferences window', 'preferences', 'edit');
    this.setState({ closeModal: false });
  };

  afterModalClose = () => {
    this.trackSegmentEvent(ORGANISM_CLICKED, 'preferences', '', 'Cancel');
  };

  closeModal = () => {
    this.setState({ closeModal: true });
  };

  render() {
    const { initialFormData, preferences, isConvertedTrip, isCancelledTrip } = this.props;
    const tripPreferences = getTripPreferences(preferences);

    return (
      <div className='sbcw p15 pb0 at_tripPreferences'>
        <div className='flex alignCenter spaceBetween mb15'>
          <h6 className='flex alignCenter f16 fw9 m0 flexFull'>
            <span className='block input-24 mr8'><PreferencesIcon /></span>
            <span className="sfc6 at_headingPreferences">Preferences</span>
          </h6>
          {!isConvertedTrip || isCancelledTrip ?
            <Modal
              trigger={<span className='sfc1 f14 fw7 at_edit3'
                             onClick={() => this.handleClick()}>Edit</span>}
              fullView={true}
              hasCustomClose={true}
              onRequestCloseCustom={this.afterModalClose}
              customCloseTrigger={this.state.closeModal}>
              <TripPreferencesEditForm initialValues={initialFormData}
                onSubmit={this.updateTripPreference}
                preferences={preferences} />
            </Modal> :
            <Modal trigger={<span className='sfc1 f14 fw7 at_edit3'>Edit</span>} customCloseTrigger={this.state.closeModal}>
              <EditPreferencesPopup opDetails={preferences.opDetails} closeModal={this.closeModal} />
            </Modal>}
        </div>
        <div className='flex flexWrap'>
          {
            tripPreferences.map((preference, index) =>
              <GPreferenceDiv className='flexFull mb15 break-word' key={index}>
                <p>{preference.label}</p>
                <p className={`at_preferenceValue${index}`}>{capitalizeFirstLetter(preference.value)}</p>
              </GPreferenceDiv>)
          }
        </div>
      </div>
    );
  }
}

TripPreferences.propTypes = {
  currentTripId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  initialFormData: PropTypes.object,
  preferences: PropTypes.object,
  isConvertedTrip: PropTypes.bool,
  isCancelledTrip: PropTypes.bool,
  updated: PropTypes.bool,
  errors: PropTypes.array,
  handleSubmit: PropTypes.func,
  trackSegment: PropTypes.func
};

TripPreferences.defaultProps = {};

export default TripPreferences;
