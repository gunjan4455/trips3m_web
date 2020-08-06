import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { TriangleIcon } from 'helpers/Icon/Icon';

const GIconDiv = styled.div({
  width: '40px',
  paddingTop: '40px',
});

class CanceledCard extends Component {
  reactivateBooking = () => {
    const { reactivateBooking, params, location } = this.props;
    reactivateBooking({ tripId: params.requestedTripId, query: location.search }).then((results) => {
      if (results) {
        window.location.reload();
      }
    });
  };

  render() {
    return (
      <div className='pl15 pr15 pb15 mb8 sbcw'>
        <GIconDiv className='mlauto mrauto mb24 lineHeight0'><TriangleIcon /></GIconDiv>
        <p className='m0 f14p text-center sfc6'>We’re sorry that you had to cancel this request. Travel plans change all the
          time and we’d be happy to assist you with your next holiday plan</p>
        <div className='mt64'>
          <p className='f14p mb8 text-center sfc6'>Incase you changed your mind</p>
          <button className='btn-filled-pri wfull' onClick={this.reactivateBooking}>Undo Cancel</button>
        </div>
      </div>
    );
  }
}

CanceledCard.propTypes = {
  reactivateBooking: PropTypes.func,
  params: PropTypes.object,
  location: PropTypes.object
};

export default CanceledCard;
