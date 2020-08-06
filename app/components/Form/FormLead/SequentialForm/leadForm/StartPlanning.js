import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Footer from '../footer';
import {
  SEQUENTIAL_FORM_TWO,
} from 'constants/Slider';
import { requiredWithmessage } from "../../../../../utils/formValidators";
import { Destination } from "../../../../../helpers/Icon/Icon";
import { renderToLocation, genericCheckbox } from '../../FormOneVariation';
import { FUNNEL_UUID_KEY, getFormType, getLeadFunnelName, LEAD_FUNNEL, trackSegment } from 'actions/segmentEvents';
import { getCookie } from 'helpers/FormDataFormatter';

const suggestedDestinations = ['Kerala', 'Thailand', 'Himachal', 'Bali', 'Kashmir', 'Maldives', 'Andaman',
  'Mauritius', 'Sikkim', 'Singapore', 'Australia'];

class StartPlanning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDestinations: false,
      showIcon: true
    };
  }

  goBack = () => {
    return false;
  };

  goForward = () => {
    const { formValues } = this.props;
    trackSegment({
      event: LEAD_FUNNEL,
      category: `Destination:${formValues.to_loc || 'unknown'}`,
      section: '',
      cta: 'next',
      form_variant: getFormType(formValues.formType),
      funnel_step: 2,
      to_loc: formValues.to_loc,
      label: getLeadFunnelName(2),
      funnel_uuid: getCookie(FUNNEL_UUID_KEY)
    });
    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_TWO,
      selectedPillIndex: 0
    });
  };

  handleChangeInput = (destination, i) => {
    this.setState({ selectedPillIndex: i });
    this.props.changeFormField('LeadForm', 'to_loc', destination);
    this.setState({ showDestinations: false, showIcon: true });
  };

  renderSuggestedPills = () => {
    return (
      <div className="row row- mb15">
        <div className="destination-suggestions flex overflowa">
          {suggestedDestinations.map((destination, i) => (
            <div className={`suggested-item sfc1 f14 mr8 ${this.state.selectedPillIndex === i ? 'active' : ''}`}
                 key={i}
                 onClick={() => this.handleChangeInput(destination, i)}>{destination}</div>
          ))}
        </div>
      </div>
    );
  };

  onToLocFocus = () => {
    this.setState({ showDestinations: true, showIcon: false });
  };

  handleBlur = () => {
    this.setState({ showDestinations: false, showIcon: false });
    this.props.handleBlur();
  };

  isAndroid = () => {
    if ( navigator && navigator.userAgent ) {
      return navigator.userAgent.toLowerCase().indexOf("android") > -1 ;
    }
    return false;
  };

  onFromLocFocus = (event) => {
    const elem = event.target;
    if ( this.isAndroid() && elem ) {
      setTimeout(()=> {
        window.scrollTo(0, elem.getBoundingClientRect().top+140);
      },500);

    }
  };

  render() {
    const goNextDisabled = !this.props.formValues.to_loc;
    return (
      <div className="form-body">
        <div className="location-icon-container">
          <Destination />
        </div>
        <div className="form-field-incl-label p15 relative">
          <Field
            name="to_loc"
            component={renderToLocation}
            placeholder="To"
            type="text"
            label="To"
            validate={requiredWithmessage('Please enter your destination')}
            trackFormOneInteracted={this.props.handlFormInteraction}
            onToLocFocus={this.onToLocFocus}
            handleBlur={this.handleBlur}
          />
          <div className="row row- mb15">
            <Field
              name="exploring_destinations"
              component={genericCheckbox}
              type="checkbox"
              label="I am exploring destinations"
              className="checkbox-common sfcw"
              id="exploring-destination_fnew"
              trackFormOneInteracted={this.props.handlFormInteraction}
              classname="exploring-destination at_explore mb8"
            />
          </div>
          {/*{this.state.showDestinations && this.renderSuggestedPills()}*/}
          <div className="from-location-container">
          <Field
            id="fromLocation_fnew"
            className="input"
            name="from_loc"
            component={this.props.FromLocation}
            placeholder="From"
            type="text"
            label="From"
            trackFormOneInteracted={this.props.handlFormInteraction}
            onFocus={this.onFromLocFocus}
          />
          </div>
        </div>
        <Footer goForward={this.goForward} goBackDisabled={true} goNextDisabled={goNextDisabled} />
      </div>
    );
  }
}

StartPlanning.propTypes = {
  formStage: PropTypes.number,
  FromLocation: PropTypes.func,
  changeFormField: PropTypes.func,
  handlFormInteraction: PropTypes.func,
  handleBlur: PropTypes.func,
  formValues: PropTypes.object,
  requiredWithmessage: PropTypes.func,
  callNextSlide: PropTypes.func,
  progressBar: PropTypes.func,
  sliderDisplayMode: PropTypes.string
};

export default StartPlanning;
