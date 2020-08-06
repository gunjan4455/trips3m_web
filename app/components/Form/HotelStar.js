import React from 'react';
import PropTypes from 'prop-types';
import './HotelStar.scss';


const hotelPrefCustomizations = {
  star2: 32,
  star3: 8,
  star4: 7,
  star5: 6,
  noHotel: 96
};

class HotelStar extends React.Component {
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
  }

  getHotelPrefs() {
    return Object.keys(this.state.hotels)
      .filter(hotelStar => this.state.hotels[hotelStar])
      .map(hotelStar => hotelPrefCustomizations[hotelStar]);
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
    }, () => { this.props.input.onChange(this.getHotelPrefs()); }
    );
  }

  render() {
    return (
      <div className="row row-">
        <p className="fw9">Hotel
        <input
          type="checkbox"
          name="noHotel"
          id="noHotel"
          className="nohotel-checkbox"
          checked={this.state.hotels.noHotel}
          onChange={this.handleChange}
        />
          <label htmlFor="noHotel">No Hotel</label>
        </p>
        <div className="row row- pt15 pb15 filter-box-options">
          <div className="col-xs-3 p0">
            <input
              type="checkbox"
              name="star2"
              id="hotelFilterOne"
              className="filter-options-type-two"
              onChange={this.handleChange}
              checked={this.state.hotels.star2}
            />
            <label htmlFor="hotelFilterOne">
              <div className="hotel-rating-star">
                <ul className="hotel-rating-star-list">
                  <li><span /></li>
                  <li><span /></li>
                </ul>
              </div>
              <p>2 star</p>
            </label>
          </div>
          <div className="col-xs-3 p0">
            <input
              type="checkbox"
              name="star3"
              id="hotelFilterTwo"
              className="filter-options-type-two"
              onChange={this.handleChange}
              checked={this.state.hotels.star3}
            />
            <label htmlFor="hotelFilterTwo">
              <div className="hotel-rating-star">
                <ul className="hotel-rating-star-list">
                  <li><span /></li>
                  <li><span /></li>
                  <li><span /></li>
                </ul>
              </div>
              <p>3 star</p>
            </label>
          </div>
          <div className="col-xs-3 p0">
            <input
              type="checkbox"
              name="star4"
              id="hotelFilterThree"
              className="filter-options-type-two"
              onChange={this.handleChange}
              checked={this.state.hotels.star4}
            />
            <label htmlFor="hotelFilterThree">
              <div className="hotel-rating-star">
                <ul className="hotel-rating-star-list">
                  <li><span /></li>
                  <li><span /></li>
                  <li><span /></li>
                  <li><span /></li>
                </ul>
              </div>
              <p>4 star</p>
            </label>
          </div>
          <div className="col-xs-3 p0">
            <input
              type="checkbox"
              name="star5"
              id="hotelFilterFour"
              className="filter-options-type-two"
              onChange={this.handleChange}
              checked={this.state.hotels.star5}
            />
            <label htmlFor="hotelFilterFour">
              <div className="hotel-rating-star">
                <ul className="hotel-rating-star-list">
                  <li><span /></li>
                  <li><span /></li>
                  <li><span /></li>
                  <li><span /></li>
                  <li><span /></li>
                </ul>
              </div>
              <p>5 star</p>
            </label>
          </div>
          {
            this.props.meta
            && this.props.meta.touched
            && (this.props.meta.error
            && <span className="input-error-text">{this.props.meta.error}</span>)
          }
        </div>
      </div>
    );
  }
}
HotelStar.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};
export default HotelStar;
