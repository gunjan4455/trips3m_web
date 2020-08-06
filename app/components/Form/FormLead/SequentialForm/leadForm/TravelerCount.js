import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styled from '@emotion/styled';

import { Travelers } from 'helpers/Icon/Icon';
import Footer from '../footer';
import {
  SEQUENTIAL_FORM_FOUR, SEQUENTIAL_FORM_SEVEN,
  SEQUENTIAL_FORM_SIX, SEQUENTIAL_FORM_TWO
} from 'constants/Slider';
import TravelerInputField from './TravelerInputField';
import { useQuery } from 'containers/Listing/parseFilters';

const GTravCountDiv = styled.div({
  '&  .Dropdown-menu': {
    maxHeight: '116px',
  },
});

function getChildCount(formValues, index) {
  try {
    return formValues.child_age_answers_attributes[index].user_input;
  } catch (e) {
    return '0';
  }
}

class TravelerCount extends React.Component {
  constructor(props) {
    super(props);
    this.handleDefaultValues();
  }

  updateChildCountInRedux = () => {
    const { child, infant } = this.state;
    const totalCount =
      parseInt(child.value, 10) +
      parseInt(infant.value, 10);
    this.props.dispatchRxFormAction(totalCount.toString(), 'child');
  }

  handleTravelerCount(value, fieldName) {
    let childAgeAttributes;
    if (fieldName === 'infant') {
      this.setState({ infant: { value: value, label: value } }, () =>
        this.updateChildCountInRedux()
      );
      childAgeAttributes = {
        option_id: '29',
        customization_id: '7',
        user_input: value.toString(),
      };
      this.props.dispatchRxFormAction(
        childAgeAttributes,
        'child_age_answers_attributes[0]'
      );
    } else if (fieldName === 'child') {
      this.setState({ child: { value: value, label: value } }, () =>
        this.updateChildCountInRedux()
      );
      childAgeAttributes = {
        option_id: '31',
        customization_id: '7',
        user_input: value.toString(),
      };
      this.props.dispatchRxFormAction(
        childAgeAttributes,
        'child_age_answers_attributes[2]'
      );
    } else {
      this.props.dispatchRxFormAction(value, fieldName);
    }
  }

  handleDefaultValues = () => {
    this.state = {
      adults: {
        value: this.props.formValues.adult || '2',
        label: this.props.formValues.adult || '2',
      },
      child: {
        value: getChildCount(this.props.formValues, 2),
        label: getChildCount(this.props.formValues, 2),
      },
      infant: {
        value: getChildCount(this.props.formValues, 0),
        label: getChildCount(this.props.formValues, 0),
      },
    };
  };

  goBack = () => {
    const query = useQuery(this.props.location.search);
    const isDeal = query.deals;
    const slider = isDeal ? SEQUENTIAL_FORM_TWO : SEQUENTIAL_FORM_FOUR;
    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: slider,
      isBackButton: true
    });
  };

  goForward = () => {
    const { location : { search } } = this.props;
    const query = useQuery(search);
    let step = SEQUENTIAL_FORM_SIX;
    if(query.variation === '3') {
      step = SEQUENTIAL_FORM_SIX;
    }else if(query.variation === '4') {
      step = SEQUENTIAL_FORM_SEVEN;
    }

    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: step,
    });
  };

  render() {
    return (
      <GTravCountDiv className="trav-count form-body p15">
        <div className="traveller-icon-container">
          <Travelers />
        </div>
        <div className="p15 clearfix">
          <div className="col-xs-12 p8 pt0 mb15">
            <label htmlFor="From" className="f14 fw9 pb8 block pfc3">
              Adults <span className="pfc4 fw4 f12">(12+ yrs)</span>
            </label>
            <Field
              fieldName="adult"
              component={TravelerInputField}
              dispatch={this.props.meta.dispatch}
              form={this.props.meta.form}
              dispatchRxFormAction={this.props.dispatchRxFormAction}
              formValues={this.props.formValues}
              inputValue={this.state.adults.value}
              label="Adults"
            />
          </div>
          <div className="col-xs-12 p8 pt0 mb15">
            <label htmlFor="From" className="f14 fw9 pb8 block pfc3">
              Infant <span className="pfc4 fw4 f12">(0-2yrs)</span>
            </label>
            <Field
              fieldName="infant"
              component={TravelerInputField}
              dispatch={this.props.meta.dispatch}
              form={this.props.meta.form}
              dispatchRxFormAction={this.props.dispatchRxFormAction}
              formValues={this.props.formValues}
              inputValue={this.state.infant.value}
              handleTravelerCount={(value) => this.handleTravelerCount(value, 'infant')}
            />
          </div>
          <div className="col-xs-12 p8 pt0 mb15">
            <label htmlFor="From" className="f14 fw9 pb8 block pfc3">
              Children <span className="pfc4 fw4 f12">(2-12yrs)</span>
            </label>
            <Field
              fieldName="child"
              component={TravelerInputField}
              dispatch={this.props.meta.dispatch}
              form={this.props.meta.form}
              dispatchRxFormAction={this.props.dispatchRxFormAction}
              formValues={this.props.formValues}
              inputValue={this.state.child.value}
              handleTravelerCount={(value) => this.handleTravelerCount(value, 'child')}
            />
          </div>
        </div>
        <Footer goBack={this.goBack} goForward={this.goForward} />
      </GTravCountDiv>
    );
  }
}

TravelerCount.propTypes = {
  formValues: PropTypes.object.isRequired,
  dispatchRxFormAction: PropTypes.func.isRequired,
  callNextSlide: PropTypes.func.isRequired,
  meta: PropTypes.object.isRequired,
  location: PropTypes.object,
  formStage: PropTypes.number,
  progressBar: PropTypes.func
};

export default TravelerCount;

