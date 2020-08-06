import React from 'react';
import { Link } from 'react-router-dom';
import config from 'appConfig';

import Img from 'components/Common/Img';
import HeaderCommon from 'modules/header/HeaderCommon';
import { BriefcaseWhiteIcon, FamilyWhiteIcon, HoneymoonWhiteIcon } from 'helpers/Icon/Icon';

import './NotFound.scss';

const ErrorImages = [
  {
    'imgUrl':`${config.assets.images}//attachments/pictures/1091173/original/error_small_tt_1.png`,
    'imgAlt': 'travel triangle error image 1',
    'imgHeight': 540,
    'imgWidth': 720
  },
  {
    'imgUrl':`${config.assets.images}//attachments/pictures/1091174/original/error_small_tt_2.png`,
    'imgAlt': 'travel triangle error image 2',
    'imgHeight': 464,
    'imgWidth': 720
  },
  {
    'imgUrl':`${config.assets.images}//attachments/pictures/1091178/original/error_small_tt_3.png`,
    'imgAlt': 'travel triangle error image 3',
    'imgHeight': 526,
    'imgWidth': 720
  },
  {
    'imgUrl':`${config.assets.images}//attachments/pictures/1091179/original/error_small_tt_4.png`,
    'imgAlt': 'travel triangle error image 4',
    'imgHeight': 516,
    'imgWidth': 720
  },
  {
    'imgUrl':`${config.assets.images}//attachments/pictures/1091180/original/error_small_tt_5.png`,
    'imgAlt': 'travel triangle error image 5',
    'imgHeight': 606,
    'imgWidth': 720
  },
  {
    'imgUrl':`${config.assets.images}//attachments/pictures/1091181/original/error_small_tt_6.png`,
    'imgAlt': 'travel triangle error image 6',
    'imgHeight': 534,
    'imgWidth': 720
  },
  {
    'imgUrl':`${config.assets.images}//attachments/pictures/1091182/original/error_small_tt_7.png`,
    'imgAlt': 'travel triangle error image 7',
    'imgHeight': 533,
    'imgWidth': 720
  },
  {
    'imgUrl':`${config.assets.images}//attachments/pictures/1091183/original/error_small_tt_8.png`,
    'imgAlt': 'travel triangle error image 8',
    'imgHeight': 500,
    'imgWidth': 720
  },
  {
    'imgUrl':`${config.assets.images}//attachments/pictures/1091184/original/error_small_tt_9.png`,
    'imgAlt': 'travel triangle error image 9',
    'imgHeight': 532,
    'imgWidth': 720
  }
];

const randomItem = ErrorImages[Math.floor(Math.random()*ErrorImages.length)];

const NotFound = () => (
  <div className="row row-">
    <HeaderCommon />
    <div className="text-center sbcw">
      <div className='row row- pbc3'>
        <Img src={randomItem.imgUrl} alt={randomItem.imgAlt} ikSrc={randomItem.imgUrl} height={randomItem.imgHeight} width={randomItem.imgWidth} />
      </div>
      <div className="pbc3 p15">
        <h2 className="f24 fw9 sfcw">Page Not Found</h2>
        <p className="f14p sfcw pt8 pb15">Maybe you slipped into our time-travel experiment?</p>
        <p className="f14p sfcw pb24">Double check the link, or please visit <Link to="/">HOME</Link> to start afresh.</p>
        <ul className="not-found-list row-8 pb32 flex">
          <li className="iblock list-style-no flex alignCenter flexFull flexDColumn mt0 mb0 ml4 mr4">
            <Link to="/honeymoon-packages" className="p8 pt15 pb15 iblock wfull">
              <span className='input-24 block relative  mt0 mlauto mb0 mrauto'><HoneymoonWhiteIcon /></span>
              <span className="f14 block sfcw fw7 pt8">Honeymoon Packages</span>
            </Link>
          </li>
          <li className="iblock list-style-no flex alignCenter flexDColumn flexFull mt0 mb0 ml4 mr4">
            <Link to="/family-packages" className="p8 pt15 pb15 iblock wfull">
              <span className='input-24 block relative  mt0 mlauto mb0 mrauto'><FamilyWhiteIcon /></span>
              <span className="f14 block sfcw fw7 pt8">Family Packages</span>
            </Link>
          </li>
          <li className="iblock list-style-no flex alignCenter flexDColumn flexFull mt0 mb0 ml4 mr4">
            <Link to="/tour-packages" className="p8 pt15 pb15 iblock wfull">
              <span className='input-24 block relative mt0 mlauto mb0 mrauto'><BriefcaseWhiteIcon /></span>
              <span className="f14 block sfcw fw7 pt8">Holiday Packages</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default NotFound;
