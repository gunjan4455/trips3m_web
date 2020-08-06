import React from 'react';
import PropTypes from 'prop-types';

import { HotelDefaulImg } from 'helpers/Icon/Icon';
import BookableHeader from 'modules/hotel/components/BookableHeader';

import styles from './HotelSoldOut.cm.scss';
import { format } from 'helpers/DateTime';
import HotelDeals from 'modules/hotel/deals';
import { useQuery } from 'containers/Listing/parseFilters';

const HotelSoldOut = ({ location }) => {

  const query = useQuery(location.search);

  const { hotelName, checkInDate, checkOutDate, travelMonth } = query;

  return <div>
    <BookableHeader heading={hotelName} />

    <div className={`flex justifyCenter text-center pt48 pb48 pl24 pr24 ${styles.belowBorder}`}>
      <div>
        <span className={`mb24 block ${styles.hotelSold}`}><HotelDefaulImg /></span>
        <h4 className="fw9 f16 mb8">Oops! It’s sold out!</h4>
        {
          checkInDate && checkOutDate
            ? <p
              className="pfc4">{`This hotel is sold out for ${format(checkInDate, 'DD MMM')} - ${format(checkOutDate, 'DD MMM')}. We have found similar hotels you may like.`}</p>
            : null
        }
      </div>
    </div>

    <HotelDeals.container title="Similar Hotels" showBookNow={false} />

  </div>;
};

HotelSoldOut.propTypes = {
  location: PropTypes.object.isRequired
};

export default HotelSoldOut;

