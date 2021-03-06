import React from 'react';
import PropTypes from 'prop-types';

import PackagePrice from './PackagePrice';
import PackageDaysDiscount from 'components/Listing/PackageDaysDiscount';
import PackageCities from './PackageCities';
import PackageIncExc from 'components/Listing/PackageIncExc';
import StarMonthFilter from 'components/PackageDetails/StarMonthFilter';

const PackageDetailsPrice = ({ pkg, dealsInfo, isDeal, isLuxury, update, pushState, selectedMonth, updateSelectedMonth, updatePriceCallBack, animationPrice}) => {
  const { package_options, hideDiscount } = pkg;
  const { hotel_price_details } = package_options;
  const hotelRatings = hotel_price_details.map(hotel => hotel.hotel_star).sort((a, b) => a - b);
  const filteredHotelRatings = hotelRatings.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);

  return (
    <div className="mb8 sbcw">
      {
        isDeal || isLuxury ? null :<StarMonthFilter
          update={update}
          pushState={pushState}
          selectedMonth={selectedMonth || 0}
          packageDetails={pkg}
          updateSelectedMonth={updateSelectedMonth}
        />
      }
      <div className="sbcw p15">
        <PackageCities cities={pkg.city_list_with_days || {}} />
      </div>
      <div className="p15 pb4 pt0 sbcw">
        <div className="row row-">
          
          <div className='flex alignCenter mb8'>
            <p className='f12 fw9 sbco'>
              {pkg.covers.days} Days & {pkg.covers.nights} Nights
            </p>
            { (isDeal || isLuxury) && pkg.hotels.length ?
              <div className='flex alignCenter'><span className='ml5 mr5 iblock'>|</span>
                <p className='flex alignCenter at_hotelstar'>
                  {filteredHotelRatings.join(', ')}
                  <span className='f12 fw4 ml5'>Star Hotels Included</span>
                </p>
              </div> : null
            }
          </div>
          
          <div className={`flex alignCenter pl0 col-xs-12 pr0`}>
            <PackagePrice
              price={pkg.price.total}
              priceUnit={pkg.price.miniDesc}
              currency={pkg.price.currency}
              discount={pkg.price.discount}
              priceFrom={pkg.price.from}
              priceTo={pkg.price.to}
              dealsInfo={isDeal || isLuxury}
              days={pkg.covers.days}
              nights={pkg.covers.nights}
              animationPrice={animationPrice}
              hideDiscount={hideDiscount}
            />
          </div>
          <div className='col-xs-12 p0'>
            {
              isDeal && dealsInfo.itinerary ?
                <p className='f12 mt8'><strong>Validity: </strong> {dealsInfo.itinerary}</p> :
                null
            }
          </div>
        </div>
        <span className="divider-line"></span>
        <h4 className="fw9 fw9 mt15 mb15">Price Inclusive of</h4>
        <div className="row inclusion-height-box">
          <PackageIncExc inclusions={pkg.inclusions} id={`details_${pkg.id}`} />
        </div>
      </div>
    </div>
  );
};

PackageDetailsPrice.propTypes = {
  pkg: PropTypes.object.isRequired,
  dealsInfo: PropTypes.bool,
  isDeal: PropTypes.bool,
  isLuxury: PropTypes.bool,
  update: PropTypes.func,
  pushState: PropTypes.func,
  selectedMonth: PropTypes.number,
  updateSelectedMonth: PropTypes.func,
  updatePriceCallBack: PropTypes.func,
  animationPrice: PropTypes.bool
};

PackageDetailsPrice.defaultProps = {
  dealsInfo: false,
  isDeal: false,
  isLuxury: false
};

export default PackageDetailsPrice;
