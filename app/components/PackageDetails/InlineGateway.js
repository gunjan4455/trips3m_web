import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const InlineGateway = ({ title, destination, trip_type, package_filters }) => {
  if (!package_filters.length) {
    return null;
  }
  function createPath (paramName, value) {
    let url = '';
    if (trip_type) {
      url = `/${trip_type}-packages`;
    }
    if(destination) {
      url = `${url}/${destination}`;
    }
    if(value) {
      url = `${url}?${paramName}[]=${value}`;
    }
    return url;
  }
  const renderList = (paramName, filters) => filters.map((listItem) =>
    <Link className="pills" key={listItem.value}
          value={listItem.value}
          target="_blank"
          to={createPath(paramName, listItem.value)}>{listItem.name}</Link>
  );
  return (
      <div className="mb8 overflowh">
      <div className="clearfix sbcw">
        <h4 className="fw9 mb4 p15">{title}</h4>
        <div className="pills-container-inline pb15 inline-day-selector">
          {
            package_filters.map((filter) => {
              return renderList(filter.param_name, filter.filters);
            })
          }
        </div>
      </div>
    </div>
  );
};
InlineGateway.propTypes = {
  title: PropTypes.string,
  destination: PropTypes.string,
  trip_type: PropTypes.string,
  package_filters: PropTypes.array
};
export default InlineGateway;
