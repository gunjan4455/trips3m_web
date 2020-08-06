import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import styled from '@emotion/styled';
import { Parser } from 'html-to-react';

import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import HotelCard from './components/HotelCard';
import QuoteCardHeader from 'modules/quote/shared/QuoteCardHeader';
import { PDM_CATEGORY_HOTEL } from 'helpers/pdmHelpers';
import { BlueDownArrow, Hotel as HotelIcon } from 'helpers/Icon/Icon';

const parser = new Parser();

const GDownArrowSpan = styled.span({
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    position: 'absolute',
    top: '0',
    left: '0'
  }
});

class Hotel extends Component {
  static propTypes = {
    hotels: PropTypes.array,
    hotelText: PropTypes.string,
    setPdmCategory: PropTypes.func,
    showHidePdmView: PropTypes.func,
    trackSegment: PropTypes.func
  };

  static defaultProps = {
    hotels: [],
    setPdmCategory: () => {},
    showHidePdmView: () => {},
    trackSegment: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      viewAllHotels: false
    };
  }

  trackSegmentEvent = (event, cta, hotelId = '') => {
    this.props.trackSegment({
      event,
      section: 'Hotels',
      object: hotelId || '',
      cta
    });
  };


  handleViewAll = () => {
    this.setState({ viewAllHotels: !this.state.viewAllHotels });

    this.trackSegmentEvent(ORGANISM_CLICKED, 'View All Hotels');
  };

  handleChatClick = () => {
    this.props.setPdmCategory(PDM_CATEGORY_HOTEL);
    this.props.showHidePdmView(true);

    this.trackSegmentEvent(ORGANISM_CLICKED, 'Edit Package');
  };

  render() {
    const { hotels, hotelText } = this.props;
    if (!hotels.length && !hotelText) {
      return null;
    }

    const filteredHotel = this.state.viewAllHotels ? hotels : hotels.slice(0, 1);

    return (
      <Element name="hotels-sec">
        <div className="pfc3 f14 sbcw pb15 mt8">
          <QuoteCardHeader icon={<HotelIcon />} heading='Hotels' chatButtonName='Edit Package'
                           handleChatClick={this.handleChatClick} />
          <div className="sbcw">
            {
              hotels.length
                ? filteredHotel.map((hotel, index) => (<HotelCard
                  key={index}
                  hotels={hotel}
                  viewAllHotels={this.state.viewAllHotels}
                  trackSegment={this.trackSegmentEvent}
                />))
                : <div className="sbcw p15 pl48 pt0 at_hoteltext">{parser.parse(hotelText)}</div>
            }
          </div>
          {
            hotels.length && (hotels.length > 1 || hotels[0].hotelInfos.length > 1)
              ? <div className="p15 bt">
                <a
                  className='block wfull flex alignCenter justifyCenter text-center at_viewallhotelclick'
                  onClick={this.handleViewAll}>
                  <span className="relative mr8 f14 fw7 at_viewallhotel">View All Hotels</span>
                  <GDownArrowSpan className={`${this.state.viewAllHotels ? 'rotate180' : ''} relative`}>
                    <BlueDownArrow /></GDownArrowSpan>
                </a>
              </div> : null
          }
        </div>
      </Element>
    );
  }
}

export default Hotel;
