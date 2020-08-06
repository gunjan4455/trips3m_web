import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HoneymoonPackages, FamilyIcon, Friends, AdvantureIconNew, NatureIcon, PlusInclusionIcon } from 'helpers/Icon/Icon';

const HomeBannersSecondary = ({ trackCategoryClick }) => {
  const trackClickEvent = (cta) => {
    const ctaFixed = (cta === 'Honeymoon') ? 'Romantic' : cta;
    const section = 'Theme List';
    trackCategoryClick({
      section,
      object: '',
      cta,
      category: ctaFixed
    });
    return true;
  };
  return (
    <div className="pt15 pb4 col-md-12 sbcw home_page_theme_ui_">
      <h2 className="theme-heading f16 fw9 text-center pb15">Explore Destinations through Holiday Themes</h2>
      <ul className="col-md-12 p0 iblock text-center wfull">
        <li className="col-xs-4 p0 text-center list-style-no mb15" data-id="504" data-name="Honeymoon">
          <Link onClick={() => trackClickEvent('Honeymoon')} to="/Honeymoon-Places" className="col-xs-12 p4 flex alignCenter justifyCenter flexDColumn">
            <div className="input-24">
              <HoneymoonPackages />
            </div>
            <p className="f14 pfc3 mt8">Honeymoon</p>
          </Link>
        </li>
        <li className="col-xs-4 p0 text-center list-style-no mb15" data-id="503" data-name="Family">
          <Link onClick={() => trackClickEvent('Family')} to="/Family-Places" className="col-xs-12 p4 flex alignCenter justifyCenter flexDColumn">
            <div className="input-24">
              <FamilyIcon />
            </div>
            <p className="f14 pfc3 mt8">Family</p>
          </Link>
        </li>
        <li className="col-xs-4 p0 text-center list-style-no mb15" data-id="505" data-name="Friends">
          <Link onClick={() => trackClickEvent('Friends')} to="/Friends-Places" className="col-xs-12 p4 flex alignCenter justifyCenter flexDColumn">
            <div className="input-24">
              <Friends />
            </div>
            <p className="f14 pfc3 mt8">Friends</p>
          </Link>
        </li>
        <li className="col-xs-4 p0 text-center list-style-no mb15" data-id="506" data-name="Adventure">
          <Link onClick={() => trackClickEvent('Adventure')}  to="/Adventure-Places" className="col-xs-12 p4 flex alignCenter justifyCenter flexDColumn">
            <div className="input-24">
              <AdvantureIconNew />
            </div>
            <p className="f14 pfc3 mt8">Adventure</p>
          </Link>
        </li>
        <li className="col-xs-4 p0 text-center list-style-no mb15" data-id="507" data-name="Nature">
          <Link onClick={() => trackClickEvent('Nature')} to="/Nature-Places" className="col-xs-12 p4 flex alignCenter justifyCenter flexDColumn">
            <div className="input-24">
              <NatureIcon />
            </div>
            <p className="f14 pfc3 mt8">Nature</p>
          </Link></li>
        <li className="col-xs-4 p0 text-center list-style-no mb15" data-id="508" data-name="All Destinations">
          <Link onClick={() => trackClickEvent('All')} to="/All-Places" className="col-xs-12 p4 flex alignCenter justifyCenter flexDColumn">
            <div className="input-24">
              <PlusInclusionIcon />
            </div>
            <p className="f14 pfc3 mt8">All Destinations</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

HomeBannersSecondary.propTypes = {
  trackCategoryClick: PropTypes.func,
};

HomeBannersSecondary.defaultProps = {
  trackCategoryClick: () => {},
};

export default HomeBannersSecondary;
