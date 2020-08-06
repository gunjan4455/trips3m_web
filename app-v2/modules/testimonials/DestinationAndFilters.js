import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Filters from 'modules/testimonials/Filters';
import FiltersView from 'modules/testimonials/FiltersView';
import { parseFilters } from 'screens/testimonials/reducer';
import Destination from 'modules/testimonials/Destination';
import DestinationView from './DestinationView';
import config from 'appConfig';
import Img from 'components/Common/Img';
import { useQuery } from 'containers/Listing/parseFilters';

class DestinationAndFilters extends Component {
  constructor(props) {
    super(props);
    const query = useQuery(this.props.location.search);
    this.state = {
      showFilterPopup: false,
      showDestinationPopup: false,
      selectedFilters: parseFilters(query, ['ratings[]']).ratings || [],
    };
  }

  destinationToggle = () => {
    this.setState((state) => ({ showDestinationPopup: !state.showDestinationPopup }));
  };

  filterToggle = () => {
    this.setState((state) => ({ showFilterPopup: !state.showFilterPopup }));
  };

  render() {
    const { filters, location, updateUrl, breadcrumbs, totalRating, testimonialDisplay, params } = this.props;
    const icon = `${config.assets.images}/public-product/Group_2.png`;
    return (
      <div>
        <div className="sbcw flex bs4 fleft wfull">
          <div className='at_destination flexFull br' onClick={this.destinationToggle}>
            <Destination breadcrumbs={breadcrumbs} />
          </div>
          <div className='at_filter flexFull bl' onClick={this.filterToggle}>
            <Filters initialFilters={this.state.selectedFilters} />
          </div>
        </div>
        <div className={this.state.showDestinationPopup ? '' : 'hide'}>
          <DestinationView
            filters={filters}
            destinationToggle={this.destinationToggle}
            location={location}
            params={params}
            breadcrumbs={breadcrumbs}
          />
        </div>
        <div className={this.state.showFilterPopup ? '' : 'hide'}>
          <FiltersView
            ratingFilters={filters.ratings}
            location={location}
            updateUrl={updateUrl}
            initialFilters={this.state.selectedFilters}
            filterToggle={this.filterToggle}
          />
        </div>

        <div className="sbc5 pt15 pr15 pb15 pl15 clear wfull">
          <h3 className="f16a pfc2 pfc3 pb2">What People Say</h3>
          {
            totalRating > 25 ?
              <p className="pfc4 fw7 f10">Displaying Testimonial {`1-${testimonialDisplay}`} of {totalRating} in total
              </p> :
              <p className="pfc4 fw7 f10 ">{`Displaying ${totalRating} Testimonials`} </p>
          }
        </div>
        {
          totalRating === 0 ?
            <div className='text-center'>
              <div className='relative'>
                <Img width={320} height={100} src={icon} ikSrc={icon} alt={'no result found'} />
              </div>
            </div> : null
        }
      </div>
    );
  }
}

DestinationAndFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  updateUrl: PropTypes.func.isRequired,
  breadcrumbs: PropTypes.array,
  totalRating: PropTypes.number.isRequired,
  testimonialDisplay: PropTypes.number.isRequired,
  params: PropTypes.object,
};

export default DestinationAndFilters;


