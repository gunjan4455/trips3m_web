/* eslint-disable no-nested-ternary, no-eval */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Helmet } from 'react-helmet';
import QueryString from 'query-string';
import config from 'appConfig';

import {
  validDate,
  email as emailValidator,
  phoneNumber,
  requiredWithmessage
} from 'utils/formValidators';

import {
  LEAD_FUNNEL,
  prepareEventOriginUri,
  trackSegment,
  RTRIP_FORM_VARIANT_NAME
} from 'actions/segmentEvents';

import {
  aliasPayload,
  identifyPayload
} from 'actions/segmentEvents';
import {
  SESSION_UUID_COOKIE_KEY,
  PAGE_UUID_COOKIE_KEY,
  LANDING_UUID_COOKIE_KEY,
  REFERER_UUID_KEY,
  FUNNEL_UUID_KEY,
  USER_ROLE_COOKIE_KEY,
  USER_ID_COOKIE_KEY,
  getFormFilledOn,
  getFormType,
  getLeadFunnelName
} from 'actions/segmentEvents';
import { UPDATE_REDIS_KEY } from '../../actionConstants';
import { SEQUENTIAL_FORM_END, TRIP_UPDATED_IN_REDIS, DEALS } from 'constants/Slider';

import {
  SLIDER_1,
  SLIDER_2,
  SLIDER_3,
  SEQUENTIAL_FORM_ONE,
  SEQUENTIAL_FORM_TWO,
  SEQUENTIAL_FORM_THREE,
  SEQUENTIAL_FORM_FOUR,
  SEQUENTIAL_FORM_FIVE,
  SEQUENTIAL_FORM_SIX,
  SEQUENTIAL_FORM_SEVEN,
  UPDATE_TO_DESTINATION,
  SET_DISPLAY_MODE,
  TITLE
} from 'constants/Slider';

import {
  getFacebookTrackingScript,
  fireFacebookAdword,
  getCookie,
  setCookie,
} from 'helpers/FormDataFormatter';

import { openChatHandler } from 'components/FixedMenu/FixedMenu';
import LeadFormTwo from 'components/Form/FormLead/LeadFormTwo';
import LeadFormThree from 'components/Form/FormLead/LeadFormThree';
import { iosDeepLink } from 'helpers/urlHelpers';
import {
  CallUs,
  ChatIcon,
  CloseIcon,
} from 'helpers/Icon/Icon';
import 'components/DatePicker/Datepickernew.scss';
import 'components/DatePicker/Monthpicker.scss';
import '../../theme/customMonthpicker.scss';
import SequentialForm from 'components/Form/FormLead/SequentialForm/index';
import { useQuery } from 'containers/Listing/parseFilters';

const validate = (values) => {
  const errors = {};
  const tripDaysError = 'enter minimum 2 days';
  // duration validations
  if (!values.trip_days || parseInt(values.trip_days, 10) < 2) {
    errors.trip_days_temp = tripDaysError;
  }
  errors.email = requiredWithmessage('Enter valid email id')(values.email) || emailValidator(values.email);
  errors.to_loc = requiredWithmessage('enter correct city name')(values.to_loc);
  errors.start_date = requiredWithmessage('select One Date-type')(values.start_date);
  if (values) {
    let status = 0, status1 = 100;
    if (values.email && !emailValidator(values.email)) {
      status = status + 33;
      status1 = status1 - 24;
    }
    if (values.phone_no && !phoneNumber(values.phone_no)) {
      status = status + 8;
      status1 = status1 - 4;
    }
    if (values.start_date && validDate(values.start_date)) {
      status = status + 12;
      status1 = status1 - 24;
    }
    if (values.to_loc) {
      status = status + 36;
      status1 = status1 - 24;
    }
    if (values.trip_days && values.trip_days >= 2) {
      status = status + 11;
      status1 = status1 - 24;
    }
    if (typeof document !== 'undefined' && document.getElementById('progress-header')) {
      document.getElementById('progress-header').style.width = `${status}%`;
      // document.getElementById('bg-progress').style.height = `${status}%`;
      // if(status === 100){
      //   setTimeout(function(){
      //     document.getElementById('form-variation')
      //      .setAttribute('style','position:absolute;min-height:100%;background-color:#eae8e8');
      //   }, 300);
      // }else {
      //   document.getElementById('form-variation')
      //      .setAttribute('style','position:relative;min-height:100%;background-color:#fff');
      // }
    }
  }
  return errors;
};

export function getReferer(location, packageId) {
  try {
    let referrerDeal;
    const { search } = location;
    const query = useQuery(search);
    if (query.tag === 'luxury') {
      referrerDeal = `LUXURY::packageId=${packageId}`;
    } else if (query.deals) {
      referrerDeal = `DEALS::packageId=${packageId}`;
    }
    const queryreferrer = query.referrer ? query.referrer : 'direct';
    return referrerDeal ? `${queryreferrer}::${referrerDeal}` : queryreferrer;
  } catch (e) {
    return 'direct';
  }
}

const onSubmitFail = (errors) => {
  if (Object.keys(errors).length && typeof window !== 'undefined') {
    console.log("Errors in redux-form");
  }
};

function createNewUniqueId() {
  let myUserid = '';
  let myRandomtext = '';
  const d = new Date().getTime();
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|+-';
  for (let i = 0; i < 8; i += 1) {
    myRandomtext += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  myUserid = `${d}_${myRandomtext}`;
  return myUserid;
}

function getTitle(sliderQuestions, sliderNumber) {
  try {
    return sliderQuestions.data.genericSliderQuestions[sliderNumber].title;
  } catch (e) {
    if (sliderNumber) {
      return TITLE[sliderNumber];
    }
    return TITLE[1];
  }
}

const starToId = {
  2: '32',
  3: '8',
  4: '7',
  5: '6'
};

export class FormOneLeadAsync extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableSubmitButton: false,
      clientSideRenderingFlag: (typeof document !== 'undefined'),
    };
    this.isFacebookPixel = false;
  }

  componentWillUnmount() {
    this.props.updateFields({
      type: SET_DISPLAY_MODE,
      value: SEQUENTIAL_FORM_ONE
    });
    this.setClientSideRenderingFlag();
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      eval(getFacebookTrackingScript());
    }
    if (typeof document !== 'undefined') {
      setTimeout(this.setClientSideRenderingFlag, 200);
    }
    const fuuid = getCookie(FUNNEL_UUID_KEY);
    try {
      this.props.loadSliderQuestions();
      // fuuid fetched from cookie is null, which sets redis_key to "null" (note the double quotes).
      // Therefore, adding null string check while setting fuuid in the slider/common redux state.
      this.props.updateFields({
        type: UPDATE_REDIS_KEY,
        value: fuuid && fuuid !== 'null' ? fuuid : ''
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps) {
    if (typeof window !== 'undefined' &&
      this.props.commonProperties.sliderDisplayMode !== prevProps.commonProperties.sliderDisplayMode) {
      window.scroll(0, 0);
    }
  }

  setClientSideRenderingFlag = () => {
    this.setState({
      clientSideRenderingFlag: true
    });
  };

  checkErrors = (fields, isValidRequired) => {
    return new Promise((resolve) => {
      fields.forEach(name => {
        this.props.touch(this.props.form, name);
      });
      return isValidRequired ? resolve(this.props.valid && !this.props.invalid) : resolve(true);
    });
  };

  dispatchRxFormAction = (value, fieldName) => {
    this.props.dispatch({
      type: '@@redux-form/CHANGE',
      meta: {
        form: this.props.form,
        field: fieldName,
        touch: false,
        persistentSubmitErrors: false
      },
      payload: value
    });
  };

  handleSliderResponse = (response, data, values, nextSlide, redisTrip = false) => {
    this.setState({ disableSubmitButton: false });
    if (data.isSubmit) {
      // TODO :: handle error response
      this.props.loadUserDetails();
      let redirectUrl = '';
      if (!redisTrip) {
        setCookie('trip_id', response && response.data &&
          response.data.requested_trip && response.data.requested_trip.id);
        redirectUrl = response.data.redirect_url;
        if (typeof window !== 'undefined') {
          redirectUrl = `https://${window.location.host}${response.data.redirect_url}`;
        }
        aliasPayload({
          user_id: response.data.user_id
        });
        identifyPayload({
          user_id: response.data.user_id
        });
      } else {
        redirectUrl = `${config.api_protocol}://${window.location.host}`;
        this.props.updateFields({
          type: TRIP_UPDATED_IN_REDIS,
          value: true
        });
      }

      if (redisTrip) {
        if (typeof window !== 'undefined') {
          this.props.history.push(redirectUrl);
        }
      } else {
        if (typeof window === 'undefined') {
          console.log('Pushing state');
          this.props.history.push(redirectUrl);
        } else {
          console.log('redirecting');
          window.location.href = redirectUrl;
        }
      }
    } else {
      if (nextSlide === SEQUENTIAL_FORM_SEVEN) {
        if(!this.isFacebookPixel) {
          this.isFacebookPixel = true;
          window.fireAdWordsTag();
          const fbAdword = fireFacebookAdword();
          eval(fbAdword);
        }

        if (!this.formSubmitted) {
          this.formSubmitted = true;
        }
      }
      this.props.updateFields({
        type: UPDATE_TO_DESTINATION,
        value: {
          fromDestination: redisTrip ? '' : response.dest_info.fromDestination || values.from_loc,
          toDestination: redisTrip ? '' : response.dest_info.name,
          currentInteractionTime: redisTrip ? '' : response.current_interaction_time,
          isDomestic: redisTrip ? false : response.dest_info.destination_type === 'domestic'
        }
      });
    }
  };

  correctStartDateValues = (formValues) => {
    const values = { ...formValues };
    if (values.start_date_noidea) {
      values.start_date_flexible = '';
      values.start_date = '';
    }
    return values;
  };

  getAdminComments = (location, rtData, queryParams) => {
    const { search } = location;
    const query = useQuery(search);
    let newAdminComments = '';
    if (typeof window !== 'undefined') {
      // when admin comments are provided in url params in case of generic marketing pages
      if (queryParams.generic_admin_comment) {
        const path = decodeURI(window.location.search);
        const index = path.indexOf('Form_filled_on');
        newAdminComments = path.slice(index);
        newAdminComments = `#${newAdminComments.split(' ').join(' #')}`;
      }
      // adding any admincomment set by vwo experiment in rtrip admin comments
      if (window.experimentAdminComment) {
        newAdminComments = `${newAdminComments} ${window.experimentAdminComment}`;
      }
    }
    if(query.mview && query.srcUrl) {
      // For amp blog and product.
      newAdminComments = `#mobile #Form_filled_on ${query.srcUrl} #trip_origin_product:${query.utm_source && query.utm_source === 'blog' ? 'traveler_mweb' : 'public_mweb'}`;
    }
    newAdminComments = `${rtData.adminComments ? rtData.adminComments : ''} ${newAdminComments}`;
    newAdminComments = `${newAdminComments} ${query.tag === 'luxury' ? 'Luxury Package' : ''}`;

    return newAdminComments;
  };

  getAdditionaInfo = () => {
    const { rtData, location: { search } } = this.props;
    const query = useQuery(search);
    const info = query.tag === 'luxury' ? `I want Luxury packages with ${query.budget}` : '';

    return `${rtData.addtl_info ? rtData.addtl_info : ''} ${info}`;
  };

  compareAndSort(a, b) {
    if (a.priority < b.priority) {
      return -1;
    }
    if (a.priority > b.priority) {
      return 1;
    }
    return 0;
  }

  checkForExperiment(params, callback) {
    const handlers = window.postLeadHandlersExitintent;
    let match = false;
    handlers.sort(this.compareAndSort).find(function (handler) {
      const callingFn = window[handler.name];
      if (callingFn) {
        const output = callingFn(params, callback);
        if (output) {
          match = true;
          return true;
        }
      }
    });
    return match;
  }

  submitForm = (formValues, enabledForSubmit, nextSlide) => {
    const {
      updateFields, location: { search }, packageData: { price, starRating, isFlight },
      requestLoad, commonProperties, createTripOnRedis, openFormState
    } = this.props;
    const dealnLuxury = {
      budget: `${price}...${Math.ceil(price + (price * 0.05))}`,
      hotel_category_answers_attributes: [{ option_id: starToId[starRating], customization_id: '2' }],
      hotel_needed_answer_attributes: { option_id: '95', customization_id: '22' },
      flight_answer_attributes: { option_id: `${isFlight ? '97' : '98'}`, customization_id: '23' }
    };
    const query = useQuery(search);
    if (enabledForSubmit && nextSlide !== SEQUENTIAL_FORM_END) {
      nextSlide = SEQUENTIAL_FORM_SEVEN;
    }

    if (query.deals) {
      formValues = { ...formValues, ...dealnLuxury };
    }

    const values = this.correctStartDateValues(formValues);
    this.setState({ disableSubmitButton: true });
    let queryParams = {};
    if (typeof window !== 'undefined') {
      queryParams = QueryString.parse(window.location.search);
    }
    let data;
    const sentTime = new Date().getTime();
    const { packageId, pageName, section, object, cta } = this.props.rtData;
    const referrer = getReferer(this.props.location, packageId);
    const redisKey = this.props.commonProperties.redisKey || createNewUniqueId();
    const adminComments = this.getAdminComments(this.props.location, this.props.rtData, queryParams);
    const add_info = this.getAdditionaInfo();
    const rtProps = {
      requested_trip: {
        ...values,
        trip_days: Math.min(values.trip_days, 99),
        from_slider_form: 'true',
        create_your_own_id: 'false',
        new_form: 'true',
        start_date: (values.start_date_flexible || values.start_date_noidea) ? '' : values.start_date,
        adminComments: adminComments,
        referer: referrer,
        addtl_info: add_info,
        attribution_attributes: {
          trip_origin_product: 'public_mweb',
          trip_origin_uri: prepareEventOriginUri(pageName, section, object, cta),
          trip_origin_package_id: packageId,
          context_page_url: getFormFilledOn(adminComments, query),
          context_campaign_source: queryParams.utm_source,
          context_campaign_medium: queryParams.utm_medium,
          context_campaign_name: queryParams.utm_campaign,
          context_campaign_term: queryParams.utm_term,
          context_campaign_content: queryParams.utm_content,
          session_uuid: getCookie(SESSION_UUID_COOKIE_KEY),
          page_uuid: getCookie(PAGE_UUID_COOKIE_KEY),
          landing_page_uuid: getCookie(LANDING_UUID_COOKIE_KEY),
          referer_page_uuid: getCookie(REFERER_UUID_KEY),
          funnel_uuid: getCookie(FUNNEL_UUID_KEY),
        }
      }
    };
    if (enabledForSubmit) {
      data = {
        redis_key: redisKey,
        isSubmit: enabledForSubmit,
        ...rtProps
      };
    } else {
      data = {
        redis_key: redisKey,
        to_loc: values.to_loc,
        time_stamp: sentTime,
        card_number: this.props.commonProperties.sliderDisplayMode.toString(),
        isSubmit: enabledForSubmit,
        card_data: {
          ...rtProps
        }
      };
    }
    if (nextSlide === SEQUENTIAL_FORM_SEVEN) {
      const segmentData = {
        event: LEAD_FUNNEL,
        category: `Destination:${values.to_loc || 'unknown'}`,
        section: '',
        cta: '',
        form_variant: getFormType(this.props.formType),
        funnel_step: 6, // 6 for MS for Trip Created
        start_date: (values.start_date_flexible || values.start_date_noidea) ? '' : values.start_date,
        trip_days: Math.min(values.trip_days, 99),
        to_loc: data.to_loc,
        trip_id: data.trip_id,
        label: getLeadFunnelName(6)
      };
      trackSegment(segmentData);
    }

    const handleSliderResponse = this.handleSliderResponse;
    const finalData = { data: { ...data } };
    const callBackParams = {
      requestParams: nextSlide === SEQUENTIAL_FORM_END ? finalData : data,
      values, nextSlide, rtProps, enabledForSubmit, requestLoad, commonProperties,
      handleSliderResponse, createTripOnRedis, updateFields, openFormState, redisKey
    };

    if (nextSlide === SEQUENTIAL_FORM_END) {
      trackSegment({
        event: LEAD_FUNNEL,
        category: `Destination:${values.to_loc || 'unknown'}`,
        section: '',
        cta: 'Submit',
        form_variant: getFormType(this.props.formType),
        funnel_step: 7, // 7 for flow completed
        start_date: (values.start_date_flexible || values.start_date_noidea) ? '' : values.start_date,
        trip_days: Math.min(values.trip_days, 99),
        to_loc: data.to_loc,
        trip_id: data.trip_id,
        label: getLeadFunnelName(7),
        funnel_uuid: getCookie(FUNNEL_UUID_KEY)
      });
      if (window.postLeadHandlersSequentialForm && window.postLeadHandlersSequentialForm.length) {
        if (this.checkForExperiment(callBackParams, this.callApiToBackEnd)) {
          return;
        } else {
          this.props.handleThankYou();
          this.callApiToBackEnd(callBackParams);
        }
      } else {
        this.props.handleThankYou();
        this.callApiToBackEnd(callBackParams);
      }
    } else {
      this.callApiToBackEnd(callBackParams);
    }
  };

  callApiToBackEnd({
                     requestParams, values, nextSlide, rtProps, enabledForSubmit,
                     requestLoad, commonProperties, handleSliderResponse, createTripOnRedis, updateFields, openFormState, redisKey
                   }) {

    const sentTime = new Date().getTime();
    const dataParams = requestParams.data ? requestParams.data : requestParams;

    requestLoad(dataParams)
      .then(function (response) {
        handleSliderResponse(response, dataParams, values, nextSlide);
      }.bind(this), (err) => {
        requestParams = {
          redis_key: redisKey,
          to_loc: values.to_loc,
          time_stamp: sentTime,
          card_number: commonProperties.sliderDisplayMode.toString(),
          isSubmit: enabledForSubmit,
          card_data: {
            ...rtProps
          }
        };

        trackSegment({
          event: 'Redis Downtime',
          section: '',
          object: '',
          redis_data: requestParams,
          error_msg: err.message
        });

        createTripOnRedis(requestParams).then(
          (response) => {
            handleSliderResponse(response, requestParams, values, nextSlide, true);
          })
          .catch((e) => {
            //this.setState({ disableSubmitButton: false });
            handleSliderResponse(null, requestParams, values, nextSlide, true);
            console.log('error :: ', e);
            updateFields({
              type: UPDATE_TO_DESTINATION,
              value: {
                fromDestination: commonProperties.fromDestination || values.from_loc,
                toDestination: commonProperties.toDestination || values.to_loc,
                currentInteractionTime: commonProperties.currentInteractionTime
                  || requestParams.time_stamp
              }
            });
          });
      });

    updateFields({
      type: SET_DISPLAY_MODE,
      value: nextSlide
    });

    openFormState(nextSlide);
  }

  renderHelmet = () => (
    <Helmet>
      <link
        rel="canonical"
        href="https://traveltriangle.com/requested_trips/new"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta property="fb:app_id" content="168534953203541" />
      <meta name="category" content="Destination:Unknown" />
      <meta name="destination_id" content="" />
      <meta name="destination_type" content="" />
      <title>Travel Triangle</title>
      <link
        href="//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link
        href="//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico"
        rel="icon"
        type="image/x-icon"
      />
      <meta name="Author" content="TravelTriangle.com" />
      <meta name="Copyright" content="TravelTriangle.com" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta
        property="al:android:url"
        content="tt://traveltriangle.com/requested_trips/new"
      />
      <meta
        property="al:android:package"
        content="com.traveltriangle.traveller"
      />
      <meta
        property="al:android:app_name"
        content="TravelTriangle-Holiday Package"
      />
      <meta property="og:title" content="lead creation form" />
      <meta property="og:type" content="website" />
      <meta
        property="al:android:url"
        content={`tt://traveltriangle.com/requested_trips/new`}
      />
      <meta
        property="al:ios:url"
        content={`ttiosapp://applinks?al_applink_data=${iosDeepLink(
          'https://traveltriangle.com/requested_trips/new'
        )}`}
      />
      <meta property="should_fallback" content="false" />
      <meta property="al:ios:app_store_id" content="1152358066" />
      <meta property="al:ios:app_name" content="TravelTriangle" />
      <meta name="page_fullname" content="F1 Page" />
      <meta name="destination_list" content="" />
      <meta name="num_destinations" content="" />
    </Helmet>
  );

  asynValidate = (values, enabledForSubmit, nextSlide, isValidRequired, variation, variationStep) => {
    let fields = [];
    if (isValidRequired && this.props.commonProperties.sliderDisplayMode === SLIDER_1) {
      fields = ['start_date', 'to_loc', 'email', 'trip_days_temp'];
    } else if (isValidRequired && this.props.commonProperties.sliderDisplayMode === SLIDER_2) {
      fields = ['hotel_category_answers_attributes'];
    } else if (isValidRequired && this.props.commonProperties.sliderDisplayMode === SEQUENTIAL_FORM_ONE) {
      fields = ['to_loc'];
    } else if (isValidRequired && this.props.commonProperties.sliderDisplayMode === SEQUENTIAL_FORM_TWO) {
      fields = ['start_date', 'trip_days_temp'];
    } else if (isValidRequired && this.props.commonProperties.sliderDisplayMode === SEQUENTIAL_FORM_THREE) {
      fields = ['hotel_category_answers_attributes'];
    } else if (isValidRequired && this.props.commonProperties.sliderDisplayMode === SEQUENTIAL_FORM_SIX) {
      fields = ['email', 'phone_no'];
    }

    this.checkErrors(fields, isValidRequired)
      .then((response) => {
        console.log("----------", response, variation);
        // eslint-disable-line consistent-return
        if (response) {

          if (variation) {
            if (variationStep === SEQUENTIAL_FORM_END || variationStep === DEALS) {
              this.submitForm(values, true, variationStep);
              if (typeof document !== 'undefined') {
                document.dispatchEvent(new CustomEvent('SEQUENTIAL_FORM_FINAL'));
              }
            } /*else if (variationStep === DEALS) {
              this.props.handleThankYou();
              setTimeout(() => {
                this.props.goBack();
              }, 6000);
              this.dispatchRxFormAction('', 'start_date');
              this.dispatchRxFormAction(false, 'start_date_noidea');
              this.dispatchRxFormAction('', 'start_date_flexible');
            } */ else {
              enabledForSubmit ? this.submitForm(values, false, variationStep) :
                this.props.updateFields({
                  type: SET_DISPLAY_MODE,
                  value: variationStep
                });
            }
            //dispatch event
            if (typeof document !== 'undefined') {
              if (enabledForSubmit) {
                document.dispatchEvent(new CustomEvent('LEAD_CREATED'));
              }
              document.dispatchEvent(new CustomEvent(variationStep));
            }

          } else {
            this.submitForm(values, enabledForSubmit, nextSlide);
          }
        } else { // eslint-disable-line no-else-return
          console.log('validation errors in form');
        }
      })
      .catch((e) => {
        console.log('Error in asynValidate...', e);
      });
  };

  getHeaderText = () => {
    const { commonProperties: { sliderDisplayMode }, location: { search } } = this.props;
    let heading = '';
    let subHeading = '';
    let progressBarCount = 0;
    const isDeal = useQuery(search).deals;

    switch (sliderDisplayMode) {
      case SEQUENTIAL_FORM_ONE: {
        heading = 'Start Planning';
        progressBarCount = 1;
        break;
      }
      case SEQUENTIAL_FORM_TWO: {
        heading = 'Select Departure Date';
        progressBarCount = 2;
        break;
      }
      case SEQUENTIAL_FORM_THREE: {
        heading = 'Select Inclusions';
        progressBarCount = 3;
        break;
      }
      case SEQUENTIAL_FORM_FOUR: {
        heading = 'Set Budget';
        subHeading = this.props.isFlightSelected ? '(with airfare)' : '(without airfare)';
        progressBarCount = 4;
        break;
      }
      case SEQUENTIAL_FORM_FIVE: {
        heading = 'Add Travelers';
        progressBarCount = isDeal ? 3 : 5;
        break;
      }
      case SEQUENTIAL_FORM_SIX: {
        heading = 'Share Contact Details';
        progressBarCount = isDeal ? 4 : 6;
        break;

      }
      case SEQUENTIAL_FORM_SEVEN:
      case  SEQUENTIAL_FORM_END: {
        heading = 'Additional Details';
        progressBarCount = isDeal ? 5 : 7;
        break;
      }
    }

    return {
      heading,
      subHeading,
      progressBarCount
    };
  };

  goBackHandler = () => {
    //handling of mview for amp-sequential-form
    const { location : { action, search } } = this.props;
    action === 'POP' && ! useQuery(search).mview ? this.props.history.push('/') : this.props.goBack();
    document.dispatchEvent(new CustomEvent('FORM_BACK_CLICKED'));
    trackSegment({
      event: 'Lead Pop Up Form Closed',
      cta: 'Lead Pop Up Form Closed',
      section: 'Lead Pop Up',
      object: '',
      label: 'Lead Pop Up Closed',
      funnel_uuid: getCookie(FUNNEL_UUID_KEY),
    });
  };

  render() {
    const fuuid = getCookie(FUNNEL_UUID_KEY);
    const variationHeaderInfo = this.getHeaderText();
    return (
      <div className="row row-">
        {this.renderHelmet()}
        <form>
          <div className="form-header-fixed pl0 pr0 row row- sbcw">
            <div className="col-xs-7 pr0">
              <p className="f16 ellipsis fw9 at_sequential_title">{variationHeaderInfo.heading}
                {
                  variationHeaderInfo.subHeading ?
                    <small
                      className="pfc4 fw4 f12 hide-iphone-five ml4">
                      {variationHeaderInfo.subHeading}
                    </small> : ''
                }
              </p>
            </div>
            <div className="col-xs-5 pl0">
                <span className="header-logo-right fright ml8">
                  <button type="button" className="cross-common" onClick={this.goBackHandler}>
                    <CloseIcon />
                  </button>
                </span>
              <span className="header-logo-right fright ml15">
                  <a onClick={openChatHandler} href="">
                    <ChatIcon className="absolute-center wfull" />
                  </a>
                </span>
              <span className="header-logo-right fright">
                  <a href="tel:18001235555">
                    <CallUs className="absolute-center wfull" />
                  </a>
                </span>
            </div>
          </div>
          {(() => {
            switch (this.props.commonProperties.sliderDisplayMode) {
              case SEQUENTIAL_FORM_ONE:
              case SEQUENTIAL_FORM_TWO:
              case SEQUENTIAL_FORM_THREE:
              case SEQUENTIAL_FORM_FOUR:
              case SEQUENTIAL_FORM_FIVE:
              case SEQUENTIAL_FORM_SIX:
              case SEQUENTIAL_FORM_SEVEN: {
                return (<SequentialForm
                  enableReinitialize
                  updateFields={this.props.updateFields}
                  formValues={this.props.formValues}
                  goBack={this.props.goBack}
                  onSubmit={this.submitForm}
                  funnel_uuid={fuuid}
                  disableSubmitButton={this.state.disableSubmitButton}
                  dispatchRxFormAction={this.dispatchRxFormAction}
                  asynValidate={this.asynValidate}
                  rtData={this.props.rtData}
                  days={this.props.days}
                  handleBlur={this.props.handleBlur}
                  handleEmailChange={this.props.handleEmailChange}
                  email={this.props.email}
                  syncErrors={this.props.initialValues.syncErrors}
                  sliderDisplayMode={this.props.commonProperties.sliderDisplayMode}
                  location={{...this.props.location, query: useQuery(this.props.location.search)}}
                  sliderQuestions={this.props.sliderQuestions}
                  commonProperties={this.props.commonProperties}
                  isFlightSelected={this.props.isFlightSelected}
                  getBudgetOptions={this.props.getBudgetOptions}
                  changeFormField={this.props.changeFormField}
                  openFormState={this.props.openFormState}
                  handleThankYou={this.props.handleThankYou}
                  touch={this.props.touch}
                  progressBarCount={variationHeaderInfo.progressBarCount}
                />);
              }
              case SLIDER_2:
                return (
                  <div className="clearfix">
                    <LeadFormTwo
                      sliderQuestions={
                        this.props.sliderQuestions
                      }
                      updateFields={this.props.updateFields}
                      submitSliderTwo={
                        this.props.submitSliderTwo
                      }
                      commonProperties={
                        this.props.commonProperties
                      }
                      formValues={this.props.formValues}
                      dispatchRxFormAction={
                        this.dispatchRxFormAction
                      }
                      getBudgetOptions={
                        this.props.getBudgetOptions
                      }
                      getSelectedBudget={
                        this.props.getSelectedBudget
                      }
                      isFlightSelected={
                        this.props.isFlightSelected
                      }
                      sliderTitle={getTitle(
                        this.props.sliderQuestions,
                        this.props.commonProperties
                          .sliderDisplayMode
                      )}
                      asynValidate={this.asynValidate}
                      openFormState={this.props.openFormState}
                      formType={this.props.formType}
                      disableSubmitButton={
                        this.state.disableSubmitButton
                      }
                      location={this.props.location}
                    />
                  </div>
                );
              case SLIDER_3:
                return (
                  <div className="clearfix">
                    <LeadFormThree
                      sliderQuestions={this.props.sliderQuestions}
                      updateFields={this.props.updateFields}
                      commonProperties={this.props.commonProperties}
                      setPropertiesOnSliderForm={this.setPropertiesOnSliderForm}
                      formValues={this.props.formValues}
                      sliderTitle={getTitle(
                        this.props.sliderQuestions,
                        this.props.commonProperties.sliderDisplayMode
                      )}
                      handleThankYou={this.props.handleThankYou}
                      openFormState={this.props.openFormState}
                      formType={this.props.formType}
                      disableSubmitButton={this.state.disableSubmitButton}
                    />
                  </div>
                );
              default:
                return (
                  <SequentialForm
                    enableReinitialize
                    updateFields={this.props.updateFields}
                    formValues={this.props.formValues}
                    goBack={this.props.goBack}
                    onSubmit={this.submitForm}
                    funnel_uuid={fuuid}
                    disableSubmitButton={this.state.disableSubmitButton}
                    dispatchRxFormAction={this.dispatchRxFormAction}
                    asynValidate={this.asynValidate}
                    rtData={this.props.rtData}
                    days={this.props.days}
                    handleBlur={this.props.handleBlur}
                    handleEmailChange={this.props.handleEmailChange}
                    email={this.props.email}
                    syncErrors={this.props.initialValues.syncErrors}
                    sliderDisplayMode={this.props.commonProperties.sliderDisplayMode}
                    location={this.props.location}
                    sliderQuestions={this.props.sliderQuestions}
                    commonProperties={this.props.commonProperties}
                    isFlightSelected={this.props.isFlightSelected}
                    getBudgetOptions={this.props.getBudgetOptions}
                    changeFormField={this.props.changeFormField}
                    openFormState={this.props.openFormState}
                    handleThankYou={this.props.handleThankYou}
                    touch={this.props.touch}
                    progressBarCount={variationHeaderInfo.progressBarCount}
                  />);
            }
          })()}
        </form>
      </div>
    );
  }
}

const RxFormSlider = reduxForm({
  form: 'LeadForm',
  validate,
  destroyOnUnmount: false,
  onSubmitFail,
  enableReinitialize: true,
})(FormOneLeadAsync);

FormOneLeadAsync.propTypes = {
  variation: PropTypes.bool,
  isRequestLoaded: PropTypes.bool,
  redirectUrl: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  requestLoad: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired,
  signedInUserEmail: PropTypes.string,
  location: PropTypes.object.isRequired,
  rtData: PropTypes.object,
  updateFromOneProps: PropTypes.func.isRequired,
  updateFields: PropTypes.func.isRequired,
  changeFormField: PropTypes.func,
  getFunnelUuid: PropTypes.string.isRequired,
  commonProperties: PropTypes.object.isRequired,
  loadUserDetails: PropTypes.func.isRequired,
  formType: PropTypes.string,
  openFormState: PropTypes.func,
  loadSliderQuestions: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  formValues: PropTypes.object,
  touch: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitSliderTwo: PropTypes.func.isRequired,
  sliderQuestions: PropTypes.object,
  getBudgetOptions: PropTypes.object,
  getSelectedBudget: PropTypes.string,
  isFlightSelected: PropTypes.bool,
  initialValues: PropTypes.object.isRequired,
  handleThankYou: PropTypes.func.isRequired,
  days: PropTypes.number,
  handleBlur: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  email: PropTypes.string,
  createTripOnRedis: PropTypes.func.isRequired,
  packageData: PropTypes.object,
};

FormOneLeadAsync.defaultProps = {
  isRequestLoaded: false,
  redirectUrl: '',
  signedInUserEmail: null,
  rtData: {},
  formType: 'Slider Close',
  openFormState: value => value,
  form: 'LeadForm',
  formValues: {},
  sliderQuestions: {},
  days: '',
  email: ''
};

export default RxFormSlider;
