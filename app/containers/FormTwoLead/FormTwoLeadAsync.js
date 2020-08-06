import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormTwo from '../../components/Form/FormLead/FormTwo';
import { UPDATE_REDIS_KEY } from '../../actionConstants';

const verifyCust = (cust) => {
  if (cust.customization_id === '2' && cust.option_id === 96) {
    return {
      ...cust,
      customization_id: 22
    };
  }
  return cust;
};

const customizationAttributes = (customization, customizationValues) => {
  const customizationId = customization.split('_')[1];
  // string value
  if (typeof customizationValues === 'string') {
    return [{ customization_id: customizationId, option_id: customizationValues, user_input: '' }];
  }
  // array value
  else if (customizationValues.constructor === Array) {
    return customizationValues.map(optionId => ({
      customization_id: customizationId,
      option_id: optionId,
      user_input: ''
    }));
  }
  // object containing optionid and user input

  return [{
    customization_id: customizationId,
    option_id: customizationValues.optionId,
    user_input: customizationValues.userInput
  }];
};

export default class FormTwoLeadAsync extends Component {

  static propTypes = {
    isRequestLoaded: PropTypes.bool,
    requestLoad: PropTypes.func.isRequired,
    requestReset: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    loadCustomizations: PropTypes.func.isRequired,
    localExpCustomization: PropTypes.object,
    goBack: PropTypes.func.isRequired,
    allowCustomizationToken: PropTypes.string.isRequired,
    getFunnelUuid: PropTypes.string.isRequired,
    updateFields: PropTypes.func.isRequired,
    trackTripUpdated: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isRequestLoaded: false,
    localExpCustomization: null
  };

  constructor(props) {
    super(props);

    this.state = {
      disableSubmitButton: false
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this.loadCustomization(props);
  }

  loadCustomization = (props) => {
    if (props.isRequestLoaded) {
      props.requestReset();
    }
    props.loadCustomizations(
      props.params.tripId, {
        params: { allow_customization: props.allowCustomizationToken }
      }
    );
  };

  componentDidMount() {
    try {
      this.props.updateFields({
        type: UPDATE_REDIS_KEY,
        value: this.props.getFunnelUuid
      });
    } catch (e) {
      console.log(e);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.isRequestLoaded && nextProps.isRequestLoaded) {
      this.props.pushState(`/requested_trips/${this.props.params.tripId}`);
    }
  }

  _handleSubmit(values) {
    this.setState({ disableSubmitButton: true });
    // prepare the params
    const params = {
      requested_trip: {
        other_answers_attributes: []
      },
      allow_customization: this.props.allowCustomizationToken
    };
    for (const customization in values) {
      if (customization.includes('cust')) {
        customizationAttributes(customization, values[customization]).forEach((custAttr) => {
          params.requested_trip.other_answers_attributes.push(verifyCust(custAttr));
        });
      } else {
        params.requested_trip[customization] = values[customization];
      }
    }
    this.props.requestLoad(this.props.params.tripId, params)
      .then((success) => {
        console.log(success);
        this.props.trackTripUpdated({
          funnel_step: 8,
          funnel_uuid: this.props.getFunnelUuid
        });
      }).catch(() => {
        this.setState({ disableSubmitButton: false });
      });
  }

  render() {
    return (
      <div className="row row- sbc5">
        <FormTwo
          onSubmit={this._handleSubmit}
          localExpCust={this.props.localExpCustomization}
          goBack={this.props.goBack}
          disableSubmitButton={this.state.disableSubmitButton} />
      </div>
    );
  }
}

