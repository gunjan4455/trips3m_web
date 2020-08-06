import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import withTheme from '../../containers/Home/hoc/withTheme';
// import Slider from '../../containers/Home/common/Slider';
// import SlideItem from '../../containers/Home/components/honeymoon/SlideItem';
import { trackPackageListClicked } from '../../actions/segmentEvents';

const TrendingList = ({ destinationType, sliderId,
  analystPackageListClick, destinations }) => (
    <div className="clearfix">
      <div className="col-md-12 pl0 pr0 at_bestsellerdesti">
        <div className="clearfix common-heading-sliders">
          <h2 className="fw7">Trending Destinations</h2>
        </div>
        {/* <Slider key={sliderId} id={`bestseller_destinations_${destinationType}`}
          ssrAnimation={{ width: 148, height: 190, }}>
          {
            destinations.map((item, index) =>
              <div key={index} style={{ width: '148px' }}>
                <SlideItem {...item} trackPackageListClicked={analystPackageListClick} />
              </div>
            )
          }
        </Slider> */}
      </div>
    </div>
  );

TrendingList.propTypes = {
  destinationType: PropTypes.string.isRequired,
  sliderId: PropTypes.string.isRequired,
  analystPackageListClick: PropTypes.func.isRequired,
  destinations: PropTypes.array.isRequired
};

TrendingList.defaultProps = {
  destinationType: 'INDIAN',
};

export default TrendingList;

// export default connect(null, dispatch => ({
//   analystPackageListClick: params => dispatch(trackPackageListClicked(params))
// }))(withTheme(TrendingList));
