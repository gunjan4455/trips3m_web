import React from 'react';
import PropTypes from 'prop-types';

const hotelPrefCustomizations = {
  star2: 32,
  star3: 8,
  star4: 7,
  star5: 6,
  noHotel: 96,
  customizationId: 2,
  noHotelCustomizationId: 22
};

class HotelRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: {
        star2: false,
        star3: false,
        star4: false,
        star5: false,
        noHotel: false
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.getHotelPrefs = this.getHotelPrefs.bind(this);
    this.checkInitialValues = this.checkInitialValues.bind(this);
    this.checkInitialValues(props.formValues);
  }

  getHotelPrefs() {
    let isHotelSelected = false;
    const retValue = Object.keys(this.state.hotels)
      .filter(hotelStar => this.state.hotels[hotelStar])
      .map((hotelStar) => {
        const customizationId = hotelPrefCustomizations.customizationId;
        if (!this.state.hotels.noHotel) {
          isHotelSelected = true;
          return {
            option_id: hotelPrefCustomizations[hotelStar].toString(),
            customization_id: customizationId.toString()
          };
        }
        return {};
      });
    if (isHotelSelected) {
      this.props.dispatchRxFormAction({
        option_id: '95',
        customization_id: hotelPrefCustomizations.noHotelCustomizationId.toString()
      }, 'hotel_needed_answer_attributes');
    } else if (this.state.hotels.noHotel) {
      this.props.dispatchRxFormAction('', 'budget');
      this.props.dispatchRxFormAction({
        option_id: '96',
        customization_id: hotelPrefCustomizations.noHotelCustomizationId.toString()
      }, 'hotel_needed_answer_attributes');
    } else {
      this.props.dispatchRxFormAction('', 'hotel_needed_answer_attributes');
    }
    if (retValue.length < 1) {
      return '';
    }
    return retValue;
  }

  checkInitialValues(formValues) {
    const hotelAttributes = formValues.hotel_category_answers_attributes || [];
    const answerAttributes = formValues.hotel_needed_answer_attributes || {};
    hotelAttributes.forEach((obj) => {
      if (obj.option_id === hotelPrefCustomizations.star2.toString()) {
        this.state = {
          ...this.state,
          hotels: {
            ...this.state.hotels,
            star2: true
          }
        };
      } else if (obj.option_id === hotelPrefCustomizations.star3.toString()) {
        this.state = {
          ...this.state,
          hotels: {
            ...this.state.hotels,
            star3: true
          }
        };
      } else if (obj.option_id === hotelPrefCustomizations.star4.toString()) {
        this.state = {
          ...this.state,
          hotels: {
            ...this.state.hotels,
            star4: true
          }
        };
      } else if (obj.option_id === hotelPrefCustomizations.star5.toString()) {
        this.state = {
          ...this.state,
          hotels: {
            ...this.state.hotels,
            star5: true
          }
        };
      }
    });
    if (answerAttributes.option_id === '96') {
      this.state = {
        ...this.state,
        hotels: {
          ...this.state.hotels,
          noHotel: true
        }
      };
    }
  }

  handleChange(event) {
    const hotelPrefs = {};
    if (event.target.checked) {
      if (event.target.name === 'noHotel') {
        hotelPrefs.star2 = false;
        hotelPrefs.star3 = false;
        hotelPrefs.star4 = false;
        hotelPrefs.star5 = false;
      } else {
        hotelPrefs.noHotel = false;
      }
    }
    this.setState({
      hotels: {
        ...this.state.hotels,
        ...hotelPrefs,
        [event.target.name]: event.target.checked
      }
    }, () => { this.props.input.onChange(this.getHotelPrefs()); });
  }

  render() {
    return (
      <div className="hotelratingDiv at_hotelratingdiv">
        <p className="fw9 iblock m0 pfc3">Preferred Hotel Category
          <span className="pfc4 fw4 f12"> (Rating)</span>
          <em className="pfc2 f16 fwb">*</em>
        </p>
        <input
          type="checkbox"
          name="noHotel"
          id="No-hotel"
          className="No-hotel-input hide"
          checked={this.state.hotels.noHotel}
          onChange={this.handleChange}
        />
        <label htmlFor="No-hotel"
               className="text-uppercase pfc4 iblock fright fw4 cursorP pt3 f12 at_nohotel mb0">No Hotel</label>
        <div className="row row- pfc3">
          <div className="col-xs-3 p0">
            <input
              type="checkbox"
              id="hotel-checkbox5"
              name="star5"
              className="checkbox-common"
              onChange={this.handleChange}
              checked={this.state.hotels.star5}
            />
            <label htmlFor="hotel-checkbox5" className="cursorP">5 Star</label>
          </div>
          <div className="col-xs-3 p0">
            <input
              type="checkbox"
              id="hotel-checkbox4"
              name="star4"
              className="checkbox-common"
              onChange={this.handleChange}
              checked={this.state.hotels.star4}
            />
            <label htmlFor="hotel-checkbox4" className="cursorP">4 Star</label>
          </div>
          <div className="col-xs-3 p0">
            <input
              type="checkbox"
              id="hotel-checkbox3"
              name="star3"
              className="checkbox-common"
              onChange={this.handleChange}
              checked={this.state.hotels.star3}
            />
            <label htmlFor="hotel-checkbox3" className="cursorP">3 Star</label>
          </div>
          <div className="col-xs-3 p0">
            <input
              type="checkbox"
              id="hotel-checkbox2"
              name="star2"
              className="checkbox-common"
              onChange={this.handleChange}
              checked={this.state.hotels.star2}
            />
            <label htmlFor="hotel-checkbox2" className="cursorP">2 Star</label>
          </div>
          {
            this.props.meta
              && this.props.meta.touched
              && (this.props.meta.error && <span className="input-error-text">{this.props.meta.error}</span>)
          }
        </div>
      </div>
    );
  }
}
HotelRating.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  dispatchRxFormAction: PropTypes.func.isRequired,
  formValues: PropTypes.object
};

HotelRating.defaultProps = {
  formValues: {}
};

export default HotelRating;
