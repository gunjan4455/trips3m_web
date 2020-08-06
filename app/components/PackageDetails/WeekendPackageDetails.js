import React from 'react';
// import PropTypes from 'prop-types';
class WeekendPackageDetails extends React.Component {
  componentDidMount() {
    if (!window.location.search.match('pprod')) {
      window.location.search += '&pprod=f';
    }
  }
  render() {
    return (
      <div />
    );
  }
}

export default WeekendPackageDetails;
