import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import {
  CalendarIcon, Clock, BudgetIcon, Visa2 as VisaIcon,
  InternationalIconBlack, CallUs, LocationMarkerIcon, DownArrow
} from 'helpers/Icon/Icon';
import Modal from '../shared/Modal';
import SeeMapPopUp from './SeeMapPopUp/SeeMapPopUp';

import styles from './mapInformation.cm.scss';

const parser = new Parser();

class MapInformation extends Component {
  static handleClick() {
    const parentDiv = document.getElementById('quickInfoBox');
    parentDiv.classList.toggle(`${styles.quickinfoExpandCollapse}`);
  }

  render() {
    const { mapInformation, tab, isExpandedInfo } = this.props;
    return (
      <div className={`border radius2 sbcw p8 pl15 pr15 clearfix relative ${styles.mapInfo}`}>
        <div id="quickInfoBox"
             className={(tab === 'overview' || isExpandedInfo) ? '' : styles.quickinfoExpandCollapse}>

          <div className="wfull">
            <div className="flex spaceBetween alignCenter">
              <h4 className="heading-quickInfo ellipsis flexFull f16 pfc3 fw7 p0 m0">{mapInformation.title || 'Quick Information'}</h4>
              {!mapInformation.hideMap && <div className="z2 ml8 mr2">
                <Modal fullView={false} trigger={<span className={`radius2 block pt5 pb5 pl15 pr15 ${styles.seeMap}`}>See Map</span>}>
                  <div className={`flex wfull hfull flexFull ${styles.mapContainer}`}>
                    <SeeMapPopUp  {...mapInformation} />
                  </div>
                </Modal>
              </div>}
              <button onClick={MapInformation.handleClick} className={`z2 flex alignCenter justifyCenter ${styles.arrowButton}`}><DownArrow /></button>
            </div>


            <div className='clearfix m0 mt15'>
              <div className={`col-xs-6 ${styles.data}`}>
                <span className={`absolute l0 t5 ${styles.iconBox}`}><CalendarIcon /></span>
                <h6 className="m0 pfc4 f12 fw4">Best time to visit</h6>
                <h6 className="f12 m0 ellipsis">{mapInformation.bestTimeToVisit}</h6>
              </div>

              <div className={`col-xs-6 ${styles.data}`}>
                <span className={`absolute l0 t5 ${styles.iconBox}`}><Clock /></span>
                <h6 className="m0 pfc4 f12 fw4">Ideal Duration</h6>
                <h6 className="f12 m0">{mapInformation.idealDuration ? mapInformation.idealDuration: '-'}</h6>
              </div>

              <div className={`col-xs-6 ${styles.data}`}>
                <span className={`absolute l0 t5 ${styles.iconBox}`}><VisaIcon /></span>
                <h6 className="m0 pfc4 f12 fw4">Visa</h6>
                <h6 className="f12 m0 ellipsis">{mapInformation.visa}</h6>
              </div>

              <div className={`col-xs-6 ${styles.data}`}>
                <span className={`absolute l0 t5 ${styles.iconBox}`}><BudgetIcon /></span>
                <h6  className="m0 pfc4 f12 fw4">Starting from</h6>
                <h6 className="f12 mPackageCard0 ellipsis">
                  Rs. {mapInformation.startingPrice}
                </h6>
              </div>

              {
                mapInformation.phone ?
                <div className={`col-xs-6 ${styles.data}`}>
                  <span className={`absolute l0 t5 ${styles.iconBox}`}><CallUs/></span>
                  <p className="m0 pfc4 f12 fw4">Phone</p>
                  <h6 className="f12 m0 break-word">{mapInformation.phone}</h6>
                </div> : null
              }
              {
                mapInformation.website ?
                <div className={`col-xs-6 ${styles.data}`}>
                  <span className={`absolute l0 t5 ${styles.iconBox}`}><InternationalIconBlack /></span>
                  <p className="m0 pfc4 f12 fw4">Website</p>
                  <h6 className="f12 m0 break-word">
                    <a href={'http://' + mapInformation.website} rel="nofollow">
                      {mapInformation.website}
                    </a>
                  </h6>
                </div> : null
              }
              {
                mapInformation.websiteUrl ?
                <div className={`col-xs-6 ${styles.data}`}>
                  <span className={`absolute l0 t5 ${styles.iconBox}`}><InternationalIconBlack /></span>
                  <p className="m0 pfc4 f12 fw4">Website</p>
                  <h6 className="f12 m0 break-word">
                    <a href={'http://' + mapInformation.websiteUrl} rel="nofollow">
                      {mapInformation.websiteUrl}
                    </a>
                  </h6>
                </div> : null
              }

              {
                mapInformation.address ?
                <div className={`col-xs-12 p0 ${styles.data}`}>
                  <span className={`absolute l0 t5 ${styles.iconBox}`}><LocationMarkerIcon /></span>
                  <p className="m0 pfc4 f12 fw4">Address</p>
                  <h6 className="f12 m0 break-word">{mapInformation.address}</h6>
                </div> : null
              }
            </div>
            <div className="wfull clearfix mt8 flex alignCenter">
              <div className={styles.tags}>
                <ul className="clearfix overflowh">
                  {mapInformation.labels && mapInformation.labels.map((label, i) => {
                    if (label instanceof Object) {
                      return <li className="iblock" key={i}><h6 className="fw4">{label.name}</h6></li>;
                    } else {
                      return <li className="iblock" key={i}><h6 className="fw4">{label}</h6></li>;
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MapInformation.propTypes = {
  mapInformation: PropTypes.object.isRequired,
  tab: PropTypes.string,
  isExpandedInfo: PropTypes.bool
};

MapInformation.defaultProps = {
  tab: '',
  isExpandedInfo: false
};

export default MapInformation;
