import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

import { calculateNights, calculateGuests } from '../helpers';
import { format } from 'helpers/DateTime';


class HotelSearchInfo extends PureComponent {
  static propTypes = {
    params: PropTypes.object.isRequired,
    redirect: PropTypes.bool,
    redirectUrl: PropTypes.string,
    scrollTo: PropTypes.string,
    showEdit: PropTypes.bool,
  };

  static defaultProps = {
    redirect: false,
    redirectUrl: '/',
    scrollTo: '',
    showEdit: true
  };

  getDateString = (dateStr) => {
    return dateStr ? format(dateStr, 'DD-MMM') : 'dd/mm';
  };

  handleScrollTo = () => {
    scroller.scrollTo(this.props.scrollTo, {
      duration: 500,
      smooth: true
    });
  };

  renderEditButton = () => {
    const { redirect, redirectUrl } = this.props;

    return redirect
      ? <Link to={redirectUrl} className="fw7">Edit</Link>
      : <a className="fw7" onClick={this.handleScrollTo}>Edit</a>;
  };

  render() {
    const { showEdit, params } = this.props;

    return (
      <div className="flex spaceBetween alignCenter" style={{ background: '#eef7fe' }}>
        <ul className="flex list-style-no">
          <li className={`f12 fw7 p8 mr8 radius20 border`}>
            {`${this.getDateString(params.checkInDate)} - ${this.getDateString(params.checkOutDate)}`}
          </li>
          <li className="f12 fw7 p8 mr8 radius20 border">
            {`${calculateNights(params.checkInDate, params.checkOutDate)} Nights`}
          </li>
          <li className="f12 fw7 p8 radius20 border">
            {`${calculateGuests(params.rooms)} Guests`}
          </li>
        </ul>
        {
          showEdit
            ? this.renderEditButton()
            : null
        }
      </div>
    );
  }
}

export default HotelSearchInfo;
