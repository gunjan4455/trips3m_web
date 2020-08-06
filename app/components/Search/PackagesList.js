import React from 'react';
import PropTypes from 'prop-types';
// import TripsContainer from '../../containers/Home/components/tripsByFilter/TripsContainer';

class PackagesList extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    isFetched: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    totalEntries: PropTypes.number.isRequired,
    packages: PropTypes.array.isRequired,
    trackPackageListClicked: PropTypes.func.isRequired,
    analyticsDetail: PropTypes.object.isRequired,
    sliderId: PropTypes.string.isRequired,
    trackingSectionName: PropTypes.string.isRequired,
    infoClassName: PropTypes.string.isRequired,
    viewAllLinkClassName: PropTypes.string.isRequired,
    heading: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]).isRequired
  };

  static defaultProps = {
    isFetched: true,
    isFetching: false,
    totalEntries: 0,
    analyticsDetail: {},
    trackPackageListClicked: () => {
    },
    trackingSectionName: '',
    infoClassName: '',
    viewAllLinkClassName: '',
    to: '',
  };

  render() {
    const {
      isFetched, isFetching, totalEntries, packages, heading,
      analyticsDetail, trackPackageListClicked,
      sliderId, trackingSectionName, infoClassName, viewAllLinkClassName, to
    } = this.props;

    return (
      <div> Trips Container </div> 
      // <TripsContainer isFetched={isFetched} isFetching={isFetching}
      //   totalEntries={totalEntries} packages={packages}
      //   analyticsDetail={analyticsDetail}
      //   trackPackageListClicked={trackPackageListClicked}
      //   sliderId={sliderId}
      //   trackingSectionName={trackingSectionName}
      //   infoClassName={infoClassName}
      //   viewAllLinkClassName={viewAllLinkClassName} to={to}
      //   showInfo={false} showSearchHeading
      //   showPackageSearchHeading={heading}
      //   showViewAll={false}
      // />
    );
  }
}

export default PackagesList;
