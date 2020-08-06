import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { CloseDark } from 'helpers/Icon/Icon';
import { parseDestinationId } from 'screens/testimonials/reducer';
import ErrorBoundary from 'modules/common/ErrorBoundary';
import { ALL_DESTINATION, POPULAR_DESTINATION} from './constants';
import { country } from 'constants/destination';
import { useQuery } from 'containers/Listing/parseFilters';

export const Gdestination = styled.span({
  '& > a': {
    '&:hover': {
      color: '#20A397',
    },
  }
});

export const isDropDownOpen = (filter, location, params) => {
  const currentDestination = isNaN(parseDestinationId(params.destination)) ?
    params.destination : useQuery(location.search).destination;
  const index = currentDestination ?
    filter.findIndex(destination => destination.toLowerCase() === currentDestination.toLowerCase()) : -1;
  return index !== -1;
};

export const titleFormatting = title => {
  if (title === ALL_DESTINATION) {
    return 'All';
  } else if (title === POPULAR_DESTINATION) {
    return 'Popular';
  } else {
    return title;
  }
};

const renderDestination = (data, params) => {
  return (
    <div>
      {
        data && Object.keys(data)
          .filter(subtitle => data[subtitle].length)
          .map((subtitle, i) => {
            return (
              <div key={subtitle + i}>
                <p className="pl24 pr24 fw7 bt pt15 pb8 fw9">{titleFormatting(subtitle)}</p>
                {
                  data[subtitle].sort().map(option => {
                    return (
                    <Gdestination > 
                      <Link key={option} to={`/testimonials/${option}`}
                        className={`text-capitalize iblock wfull pl24 pr24 pt8 pb8 ${params.destination && params.destination.toLowerCase() === option.toLowerCase() ? 'pfc1' : 'pfc3' }`}>
                        <span className='pt3 pb3 iblock wfull'>{option}</span>
                      </Link>
                    </Gdestination>
                    );
                  })
                }
              </div>
            );
          })
      }
    </div>
  );
};

class DestinationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.breadcrumbs.length > 2 ? props.breadcrumbs[2].name.toLowerCase() : country.INDIA
    };
  }

  handleChange = (title) => {
    this.setState({ active: title });
  };

  render() {
    const { filters, destinationToggle, params } = this.props;
    return (
      <div className="fixed t0 l0 sbcw z16 wfull hfull overflowa">
        <ErrorBoundary width="90%" height="200px">
          <div>
            <div className="p15 bb">
              <div className='at_close iblock icon-14' onClick={destinationToggle}>
                <CloseDark />
              </div>
              <div className="f16 fw4 pfc3 pl24 iblock">Destination</div>
            </div>
            <div className='bb clearfix'>
              {
                Object.keys(filters).map((title, i) => {
                  if (title !== 'ratings') {
                    return (
                      <div
                        key={i}
                        className={this.state.active === title ? `p15 activeFilter relative text-capitalize col-xs-6 text-center fw7` : `p15 col-xs-6 text-capitalize text-center fw7`}
                        onClick={() => this.handleChange(title)}
                      >
                        {title}
                      </div>
                    );
                  }
                })
              }
            </div>
            <div>
              {renderDestination(filters[this.state.active], params )}
            </div>
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}
  
DestinationView.propTypes = {
  filters: PropTypes.object.isRequired,
  destinationToggle: PropTypes.func.isRequired,
  location: PropTypes.object,
  params: PropTypes.object,
  breadcrumbs: PropTypes.array
};

export default DestinationView;

