import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const GUl = styled.div({
  'overflowX': 'scroll',
  boxShadow: '0px 3px 6px #ccc',
  '& ul li': {
    listStyle: 'none',
    '& a': {
      whiteSpace: 'nowrap',
      '&:after': {
        height: '2px',
        width: '100%',
        content: '\' \'',
        position: 'absolute',
        bottom: '0',
        left: '0',
      },
      '&:hover': {
        backgroundColor: '#efefef',
        '&:after': {
          backgroundColor: '#009688',
        }
      },
      '&.active': {
        backgroundColor: '#efefef',
        '&:after': {
          backgroundColor: '#009688'
        }
      }
    }
  }
});


const HotelDetailNav = ({ options, Link, destination, hotelId, type }) => (
  <GUl className="flex spaceBetween">
    <div className="row noBeforeAfter flexFull flex alignCenter">
      <div className="col-xs-12 pr8">
        <ul className="flex alignCenter m0 p0">
          {
            options.map((newLi, index) =>
              <li key={index}>
                <Link activeClass="active" className="relative f14 fw7 pfc3 block p24 pt15 pb15"
                      to={newLi.section_name} spy smooth isDynamic duration={500} offset={-60}>
                  {newLi.title}
                </Link>
              </li>
            )
          }
        </ul>
      </div>
      <div className="col-xs-4 pl8 text-right nav-cta">
        {/*<Modal*/}
          {/*trigger={<button*/}
            {/*className="btn-filled-pri radius2 f12"*/}
            {/*onClick={ () => window.isLeadPopupOpened = true }*/}
          {/*>*/}
            {/*<span className="wave" />Get Quotes For This {type}</button>}*/}
          {/*onRequestCloseCustom={ () => window.isLeadPopupOpened = false }>*/}
          {/*<GCoverPopupForm>*/}
            {/*<HomeLeadForm*/}
              {/*destinations={[{name: capitalizeEveryFirstLetter(destination)}]}*/}
              {/*analyticsInfo={{*/}
                {/*packageId: hotelId,*/}
                {/*object: `Hotel/${hotelId}`,*/}
                {/*page: 'Hotel Detail Page'*/}
              {/*}} />*/}
          {/*</GCoverPopupForm>*/}
        {/*</Modal>*/}
      </div>
    </div>
  </GUl>
);

HotelDetailNav.propTypes = {
  options: PropTypes.array.isRequired,
  Link: PropTypes.func.isRequired,
  destination: PropTypes.string.isRequired,
  hotelId: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default HotelDetailNav;

