import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Sidenav.scss';
import {
  ProfileIcon, HomeIcon, FamilyIcon,
  WorkIcon, OffersIcon,
  BlogIcon, TestimonailsIcon, FAQIcon, AllTrips, ContactIcon,
} from 'helpers/Icon/Icon';
import { Link } from 'react-router-dom';
import {
  trackSegment,
  DFEAULT_VALUE,
  PACKAGE_LIST_CLICK
} from 'actions/segmentEvents';
import SidenavLinks from './SidenavLinks';

const TABS = {
  TRAVELLER_TYPE: 'travellerType',
  HOLIDAY_THEMES: 'holidayThemes',
  HOLIDAY_PACKAGES: 'holidayPackages',
  FAMILY_PACKAGES: 'familyPackages',
  HONEYMOON_PACKAGES: 'honeymoonPackages',
  HOTELS: 'hotels',
  WEEKEND_GETAWAYS: 'weekendGetaways',
  DESTINATION_GUIDES: 'destinationGuides',
};

const SidenavMenu = ({ selectHandler, isAuthenticated, handleLogout, items }) => {
  const section = 'Global Menu';

  const packageListClick = (category, cta) => {
    selectHandler();
    trackSegment({
      event: PACKAGE_LIST_CLICK,
      section: section,
      category: 'Destination:',
      cta: cta,
      object: 'Destination/0',
      label: `Package Type: ${category}`,
      destination_list: '',
      destination_id: 0,
      value: DFEAULT_VALUE
    });
  };
  const listings = items.listing && items.listing.length ? items.listing : [];
  const category = items.category && items.category.length ? items.category : [];
  const destination = items.destination && items.destination.length ? items.destination : [];
  return (
    <div className="row row-"  itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement">
      <ul className="list-side-menu mb24 pb15">
        {
          isAuthenticated ?
            <div>
              <li>
                <meta itemProp="name" content="Logout" />
                <a itemProp="url" content="Logout" onClick={handleLogout} className="ripple">
                  <div className="wave-dark" />
                  <span className="sidenav-icons"><ProfileIcon /></span>
                  Logout
                </a>
              </li>
              <li className="alltrips">
                <meta itemProp="name" content="All Trips" />
                <a itemProp="url" content="/travellers/dashboard" href="/travellers/dashboard" onClick={selectHandler} className="ripple">
                  <div className="wave-dark" />
                  <span className="sidenav-icons">
                      <AllTrips />
                    </span>
                  All Trips
                </a>
              </li>
            </div> :
            <li>
              <meta itemProp="name" content="Login/Sign up" />
              <Link itemProp="url" to="/users/sign_in" content="/users/sign_in" className="at_signUp ripple">
                <div className="wave-dark" />
                <span className="sidenav-icons"><ProfileIcon /></span>
                Login/Sign up
              </Link>
            </li>
        }

        <li index='home'>
          <meta itemProp="name" content="Home" />
          <Link itemProp="url" to="/" content="/" onClick={selectHandler} className="at_homeLink ripple">
            <div className="wave-dark" />
            <span className="sidenav-icons"><HomeIcon /></span>Home
          </Link>
        </li>

        {
          listings.map((entity, index) => {
            return (
              <li
                index={index}>
              <SidenavLinks entity={entity} title={entity.title} />
            </li>);
          })
        }
        {
          destination.map((entity, index) => {
            return (<li
              index={index}>
              <SidenavLinks entity={entity} title='Destination Guide' />
            </li>);
          })
        } {
        category.map((entity, index) => {
          return (<li
            index={index}>
            <SidenavLinks entity={entity} title='Holiday Themes' />
          </li>);
        })
      }
        <li>
          <meta itemProp="name" content="Holiday Deals" />
          <Link itemProp="url" to="/deals-tour-packages" onClick={() => packageListClick('Deals', 'Holiday Deals')}
                className="ripple">
            <div className="wave-dark" />
            <span className="sidenav-icons"><FamilyIcon /></span>Holiday Deals</Link>
        </li>
        <li>
          <meta itemProp="name" content="Luxury  Holidays" />
          <Link itemProp="url" to="/luxury-tour-packages" onClick={() => packageListClick('Luxury', 'Luxury Holidays')}
                className="ripple">
            <div className="wave-dark" />
            <span className="sidenav-icons"><FamilyIcon /></span>Luxury Holidays</Link>
        </li>
      </ul>
      <ul className="list-side-menu m0 pb15">
        <li>
          <meta itemProp="name" content="How It Works" />
          <a itemProp="url" content="https://traveltriangle.com/how_it_works"
             href="https://traveltriangle.com/how_it_works" className="ripple">
            <div className="wave-dark" />
            <span className="sidenav-icons"><WorkIcon /></span>How It Works</a>
        </li>
        <li>
          <a href="https://traveltriangle.com/offers" className="ripple">
            <div className="wave-dark" />
            <span className="sidenav-icons"><OffersIcon /></span>Offers</a>
        </li>
        <li>
          <meta itemProp="name" content="Blog" />
          <a itemProp="url" content="https://traveltriangle.com/blog"
             href="https://traveltriangle.com/blog" className="ripple">
            <div className="wave-dark" />
            <span className="sidenav-icons"><BlogIcon /></span>Blog</a>
        </li>
        <li>
          <meta itemProp="name" content="Testimonials" />
          <a itemProp="url" content="https://traveltriangle.com/testimonials"
             href="https://traveltriangle.com/testimonials" className="ripple">
            <div className="wave-dark" />
            <span className="sidenav-icons"><TestimonailsIcon /></span>Testimonials</a>
        </li>
        <li>
          <meta itemProp="name" content="FAQ" />
          <a itemProp="url" content="https://traveltriangle.com/FAQs"
             href="https://traveltriangle.com/FAQs"  className="ripple">
            <div className="wave-dark" />
            <span className="sidenav-icons"><FAQIcon /></span>FAQ</a>
        </li>
        <li>
          <meta itemProp="name" content="Contact Us" />
          <a itemProp="url" content="https://traveltriangle.com/contact_us"
             href="https://traveltriangle.com/contact_us" className="ripple">
            <div className="wave-dark" />
            <span className="sidenav-icons"><ContactIcon /></span>Contact Us</a>
        </li>
      </ul>
      <div className="p15">
        <p className="f14 mb8">For any help</p>
        <p className="f16 m0 fw9"><a content="tel:18001235555">1800-123-5555</a></p>
      </div>
    </div>
  );
};

SidenavMenu.propTypes = {
  selectHandler: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
  ui: PropTypes.object,
  items: PropTypes.object,
};

SidenavMenu.defaultProps = {
  selectHandler: () => {
  },
  isAuthenticated: false
};

const mapStateToProps = state => ({
  ui: state.topNavigation && state.topNavigation.ui,
  items: state.topNavigation && state.topNavigation.items,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SidenavMenu);
