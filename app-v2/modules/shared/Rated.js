import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const P = styled.p({
  lineHeight: '16px',
});

class Rated extends React.Component {
  render() {
    const { rated } = this.props;
    const link = "Tourism in " + this.props.destination;
    return (
      <div className="col-xs-12 p0" vocab="https://schema.org/" typeof="Product" >
        <span className="hide" property="name">{link}</span>
        <P className="f10 m0 pfc3" property="aggregateRating" typeof="AggregateRating">Rated <span property="ratingValue">{rated.currentRating}</span>/{rated.outOf} (based on <span property="reviewCount">{rated.totalReviews}</span> reviews )</P>
      </div>
    );
  }
}

Rated.propTypes = {
  rated: PropTypes.object,
  destination : PropTypes.string
};

Rated.defaultProps = {
  rated: {},
  destination: ''
};

export default Rated;
