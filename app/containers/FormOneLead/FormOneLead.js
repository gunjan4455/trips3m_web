import React from 'react';
import PropTypes from 'prop-types';
import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import _get from 'lodash/get';
import { goBack } from 'react-router-redux';
import { change } from 'redux-form';
import styled from '@emotion/styled';

import {
  isLoaded as isRequestLoaded,
  load as requestLoad,
  redirectUrl,
  rtData,
  updateFromOneProps,
  getFunnelUuid,
  createTripOnRedis
} from 'reducers/formOneLead';
import {
  getCommonProperties,
  updateFields,
  getFormValues
} from 'reducers/leadForm/common';
import {
  load as loadSliderQuestions,
  getSliderQuestions
} from 'reducers/leadForm/sliderQuestions';
import {
  load as submitSliderTwo,
  getBudgetOptions,
  getSelectedBudget,
  isFlightSelected
} from 'reducers/leadForm/formTwoLead';
import {
  SET_DISPLAY_MODE,
  SEQUENTIAL_FORM_ONE
} from 'constants/Slider';
import { getCookie } from 'helpers/FormDataFormatter';
import { userEmail as signedInUserEmail } from 'reducers/auth';
import { load as loadUserDetails } from 'actions/auth';
import ThankYou from 'components/Common/ThankYou';
import 'components/Common/Thankyou.scss';
import { useQuery } from 'containers/Listing/parseFilters';

const ThankYouContainer = styled.div({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.4)',
  zIndex: '1002',
});

const ThankYouContainerMain = styled.div({
  width: '500px',
  maxWidth: '100%',
  padding: '24px',
  position: 'relative',
  margin: '100px auto 0',
});

function getDestination(destination, formValues, retainRecentUpdate) {
  try {
    let retValue = '';
    if (destination) {
      retValue = destination;
    } else if (formValues && formValues.to_loc) {
      retValue = formValues.to_loc;
    }
    if (retainRecentUpdate && formValues && formValues.to_loc) {
      retValue = formValues.to_loc;
    }
    return retValue;
  } catch (e) {
    return '';
  }
}

const initialValues = () => {
  const uEmail = getCookie('u_email');
  return {
    email: uEmail === 'u_email' || uEmail === 'null' ? '' : uEmail,
    dont_utilize_budget_new: true,
    budget_new: true,
    start_date_noidea: false,
    whatsapp_opt_status: true,
    adult: '2',
    child: 0,
    isd_code: '+91',
    child_age_answers_attributes: [
      { user_input: '0', customization_id: '7', option_id: '29' },
      { user_input: '0', customization_id: '7', option_id: '30' },
      { user_input: '0', customization_id: '7', option_id: '31' }
    ]
  };
};

const SliderFormAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'form-one-lead' */ './FormOneLeadAsync'),
  loading: () => null,
});

export class SliderLeadForm extends React.Component {
  static propTypes = {
    loadSliderQuestions: PropTypes.func,
    sliderQuestions: PropTypes.object,
    submitSliderTwo: PropTypes.func.isRequired,
    updateFields: PropTypes.func.isRequired,
    commonProperties: PropTypes.object.isRequired,
    destinations: PropTypes.array,
    location: PropTypes.object,
    formValues: PropTypes.object,
    syncErrors: PropTypes.object,
    additionalInfo: PropTypes.string,
    getBudgetOptions: PropTypes.object,
    getSelectedBudget: PropTypes.string,
    isFlightSelected: PropTypes.bool,
    days: PropTypes.number,
    loadUserDetails: PropTypes.func.isRequired,
    isOpenedByClick: PropTypes.bool,
    formOneClickDetail: PropTypes.object,
    retainRecentUpdate: PropTypes.bool,
    analyticsInfo: PropTypes.object,
    messageOnTop: PropTypes.string,
    openFormState: PropTypes.func,
    change: PropTypes.func,
    formType: PropTypes.string,
    formClass: PropTypes.string,
    rtData: PropTypes.object,
    requestLoad: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    updateFromOneProps: PropTypes.func.isRequired,
    getFunnelUuid: PropTypes.string.isRequired,
    createTripOnRedis: PropTypes.func.isRequired,
    packageData: PropTypes.object.isRequired,
    trackSegment: PropTypes.func.isRequired
  };

  static defaultProps = {
    loadSliderQuestions: () => {},
    sliderQuestions: {},
    destinations: [],
    location: {},
    formValues: {},
    syncErrors: {},
    getBudgetOptions: {},
    additionalInfo: '',
    days: 0,
    getSelectedBudget: '',
    isFlightSelected: false,
    isOpenedByClick: false,
    formOneClickDetail: {},
    retainRecentUpdate: false,
    analyticsInfo: {},
    messageOnTop: '',
    openFormState: value => value,
    formType: 'Slider Open',
    formClass: '',
    rtData: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      retainRecentUpdate: this.props.retainRecentUpdate,
      retainEmail: false
    };
    this._handleThankYou = this._handleThankYou.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  _handleThankYou() {
    this.setState({
      isSubmit: true
    });
  }

  handleBlur() {
    if (!this.state.retainRecentUpdate) {
      this.setState({
        retainRecentUpdate: true
      });
    }
  }

  handleEmailChange() {
    if (!this.state.retainEmail) {
      this.setState({
        retainEmail: true
      });
    }
  }

  getLocValue = () => {
    const { rtData, formValues } = this.props;
    return getDestination(
      rtData.to_loc,
      formValues,
      this.state.retainRecentUpdate
    );
  };

  getTripDays = () => {
    const {
      rtData,
      formValues: { trip_days },
    } = this.props;

    return trip_days ? trip_days : rtData ? rtData.trip_days : 0;
  };

  render() {
    const { location: { search } } = this.props;
    const isDeal = useQuery(search).deals === 'true' || false;
    return (
      <div className="row row-">
        <SliderFormAsync
          sliderQuestions={this.props.sliderQuestions}
          loadSliderQuestions={this.props.loadSliderQuestions}
          submitSliderTwo={this.props.submitSliderTwo}
          commonProperties={this.props.commonProperties}
          updateFields={this.props.updateFields}
          location={this.props.location}
          formValues={this.props.formValues}
          getBudgetOptions={this.props.getBudgetOptions}
          getSelectedBudget={this.props.getSelectedBudget}
          isFlightSelected={this.props.isFlightSelected}
          destroyOnUnmount={false}
          enableReinitialize
          days={this.getTripDays()}
          initialValues={{
            ...initialValues(),
            ...this.props.formValues,
            ...this.props.rtData,
            syncErrors: this.props.syncErrors,
            to_loc: this.getLocValue(),
            email: this.props.formValues.email ? this.props.formValues.email : initialValues().email,
          }}
          loadUserDetails={this.props.loadUserDetails}
          handleThankYou={this._handleThankYou}
          openFormState={this.props.openFormState}
          requestLoad={this.props.requestLoad}
          goBack={this.props.goBack}
          updateFromOneProps={this.props.updateFromOneProps}
          getFunnelUuid={this.props.getFunnelUuid}
          rtData={this.props.rtData}
          handleBlur={this.handleBlur}
          handleEmailChange={this.handleEmailChange}
          email={this.props.formValues.email ? this.props.formValues.email : initialValues().email}
          changeFormField={this.props.change}
          createTripOnRedis={this.props.createTripOnRedis}
          deal={isDeal}
          packageData={this.props.packageData}
        />
        {this.state.isSubmit ?
          <ThankYouContainer>
            <ThankYouContainerMain>
              <ThankYou isDeal={isDeal} />
            </ThankYouContainerMain>
          </ThankYouContainer>
          : <div />
        }
      </div>
    );
  }
}

export default asyncConnect(
  [
    { promise: () => import('./FormOneLeadAsync') },
    {
      promise: ({ store: { dispatch } }) => {
        return dispatch(updateFields({
          type: SET_DISPLAY_MODE,
          value: SEQUENTIAL_FORM_ONE
        }));
      }
    }
  ],
  state => ({
    isRequestLoaded: isRequestLoaded(state),
    redirectUrl: redirectUrl(state),
    signedInUserEmail: signedInUserEmail(state),
    rtData: rtData(state),
    getFunnelUuid: getFunnelUuid(state),
    commonProperties: getCommonProperties(state),
    sliderQuestions: getSliderQuestions(state),
    formValues: getFormValues(state),
    getBudgetOptions: getBudgetOptions(state),
    getSelectedBudget: getSelectedBudget(state),
    isFlightSelected: isFlightSelected(state),
    syncErrors: _get(state, 'form.LeadForm.syncErrors', {}),
    packageData: _get(state,'leadFormData.data', {})
  }),
  {
    requestLoad, loadSliderQuestions, goBack, change, updateFromOneProps, updateFields,
    loadUserDetails, submitSliderTwo, createTripOnRedis
  })(SliderLeadForm);
