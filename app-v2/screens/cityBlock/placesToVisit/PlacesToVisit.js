import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ToVisitCard from './ToVisitCard';
import CityBlockFilters from 'modules/cityBlock/CityBlockFilters';
import NoPackageCard from 'modules/shared/NoPackageCard';
import Guide from 'modules/shared/Guide';
import LoadMorePackages from 'modules/shared/loadMorePackages';
import parseFilters from 'helpers/parseCityBlockFilters';
import { useQuery } from 'containers/Listing/parseFilters';
import { showPopUp } from 'helpers/exitIntent';

class PlacesToVisit extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
    this.resetFilters = this.resetFilters.bind(this);
  }

  resetFilters() {
    const values = {};
    this.props.resetFilters(values);
  }

  loadMoreCards = (destination, city, tab, experience, query) => {
    const { filters } = parseFilters({
      query: query || {}
    });
    const queryParams = {
      offset: this.state.currentPage === 1 ? (this.state.currentPage * 10) : ((this.state.currentPage * 5) + 5),
      limit: 5,
      places_to_visit: true,
      lookup_parent: false,
      city: city,
      tab: tab,
      experience: experience
    };
    const payload = { destination, filters, queryParams };
    this.props.loadMoreCards(payload);
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  render() {
    const { data, location, applyFilters, resetPath, match: { params }, exitIntent, route, history } = this.props;
    const { destination, city, tab } = params;
    const experience = route.experience;
    const indexTab = route.indexTab;
    const query = useQuery(location.search);
    return (
      <div className="clearfix">
        <div className="m8 mt0">
          <Guide
            guide={{ title: data.title, heading: data.heading, description: data.description }} />
        </div>
        <div id="reactExitIntentImage" className="mkt-mob-exit-intent relative pl8 pr8 mb8" onClick={showPopUp} />
        <div className="m8 mt0">
            <div className="col-xs-12 p0">
              {
                data.destinationSchemes && data.destinationSchemes.map((item, i) => (
                  <div className="mb8" key={i}>
                    <ToVisitCard item={item} key={i} />
                  </div>
                ))
              }
            </div>
        </div>
        {
          data.destinationSchemes && data.destinationSchemes.length ?
            <div className="m8 mt0">
              <LoadMorePackages
                packagesRemaining={data.totalDestinationSchemes - data.destinationSchemes.length}
                loadMorePackages={() => this.loadMoreCards(destination, city, tab || indexTab, experience, query)}
                currentPage={this.state.currentPage}
                title='remaining Places To Visit)'
              />
            </div> :
            <div className="m8 mt0 p15 sbcw"><NoPackageCard destination={destination} /></div>
        }
        {
          data.filters && (data.filters.filterCategories || data.filters.filteredCities) ?
            <CityBlockFilters
              filters={data.filters}
              applyFilters={applyFilters}
              tab="places-to-visit"
              params={params}
              enableReinitialize
              resetPath={resetPath}
              onSubmit={values => {
                applyFilters({ values, location, filters: data.filters, params, push: history.push });
              }}
              resetForm={this.resetFilters}
            /> : null
        }
      </div>
    )
      ;
  }
}

PlacesToVisit.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  exitIntent: PropTypes.object.isRequired,
  applyFilters: PropTypes.func.isRequired,
  resetPath: PropTypes.func.isRequired,
  loadMoreCards: PropTypes.func,
  resetFilters: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

PlacesToVisit.defaultProps = {
  loadMoreCards: () => {},
};

export default PlacesToVisit;
