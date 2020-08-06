import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from '@emotion/styled';

import MapPopup from '../hotel/MapPopup';
import Modal from '../shared/GenericModal';

const GMapDiv = styled.div({
  position: 'relative',
});

const GViewMapA = styled.a({
  backgroundColor: '#009688',
  fontSize: '14px',
  lineHeight: '14px',
  padding: '9px 15px',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#009688',
    color: '#fff',
  }
});

const GMapDataDiv = styled.div({
  width: '100%',
});

const HotelLocationMap = ({ title, proximity, hotel }) => (
  <div className="iblock">
    <GMapDiv className="radius2 overflowh relative">
      <Modal
        trigger={
          <a className="sfc1 f12 fw7">View Map</a>
        }
        fullView={true}
      >
        <GMapDataDiv className="flex wfull hfull flexFull">
          <MapPopup hotel={hotel} />
        </GMapDataDiv>
      </Modal>
    </GMapDiv>
  </div>
);

HotelLocationMap.propTypes = {
  proximity: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  hotel: PropTypes.object.isRequired
};

export default HotelLocationMap;

