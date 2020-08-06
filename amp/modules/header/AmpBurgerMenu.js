import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AmpBurgerMenuLinks from './AmpBurgerMenuLinks';
import Action from 'amp/helpers/Action';

class AmpBurgerMenu extends React.Component {

  render() {
    const { items, ui } = this.props;
    const listings = items.listing && items.listing.length ? items.listing : [];
    const category = items.category && items.category.length ? items.category : [];
    const destination = items.destination && items.destination.length ? items.destination : [];
    return (
      <div itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement">
        <amp-sidebar id="sidebar-left" layout="nodisplay" side="left">
          <div className="pbc1 relative pt24 pl15 pr15 pb24 headerAmp">
            <a href="" className="sfcw flex alignCenter">
              <div className="col-xs-3 pl0 pr0">
                <div className="user-img-loggedin radius100">
                  <amp-img
                    src="https://img.traveltriangle.com/attachments/pictures/901194/original/male3-96.png?tr=w-48,h-48"
                    alt="avtar"
                    height="48"
                    width="48"
                    layout="responsive">
                  </amp-img>
                </div>
              </div>
              <div className="col-xs-9 relative pl0 pr0 user-loggedin-name-box">
                <p className="sfcw text-capitalize f18p m0 ml15">Guest</p>
              </div>
            </a>
          </div>
          <ul className="amp-list-side-menu m0">
            <li>
              <meta itemProp="name" content="Login/Sign up" />
              <a itemProp="url" content="/users/sign_in" href="/users/sign_in">
                <span className="sidenav-icons iconOne" />
                Login/Signup
              </a>
            </li>
            <li>
              <meta itemProp="name" content="Home" />
              <a itemProp="url" content="/" href="/">
                <span className="sidenav-icons iconTwo" />
                Home
              </a>
            </li>
          </ul>
          <ul>
            {
              listings.map((entity, index) => {
                return (
                  <AmpBurgerMenuLinks entity={entity} title={entity.title} key={index} />
                );
              })
            }
            {
              destination.map((entity, index) => {
                return (
                  <AmpBurgerMenuLinks entity={entity} title='Destination Guide' key={index} />
                );
              })
            }
            {
              category.map((entity, index) => {
                return (
                  <AmpBurgerMenuLinks entity={entity} title='Holiday Themes' key={index} />
                );
              })
            }
          </ul>
          <ul className="amp-list-side-menu m0 bb pb15 mb24">
            <li>
              <meta itemProp="name" content="Holiday Deals" />
              <a itemProp="url" href="/deals-tour-packages">
                <span className="sidenav-icons iconNine" />
                Holiday Deals
              </a>
            </li>
            <li>
              <meta itemProp="name" content="Luxury  Holidays" />
              <a itemProp="url" href="/luxury-tour-packages">
                <span className="sidenav-icons iconNine" />
                Luxury Holidays
              </a>
            </li>
          </ul>
          <div>
            <ul className="amp-list-side-menu bb pb15 mb0">
              <li>
                <meta itemProp="name" content="How It Works" />
                <a itemProp="url" content="https://traveltriangle.com/how_it_works"
                   href="https://traveltriangle.com/how_it_works">
                  <span className="sidenav-icons iconTen" />
                  How It Works
                </a>
              </li>
              <li>
                <meta itemProp="name" content="Offers" />
                <a itemProp="url" content="https://traveltriangle.com/offers"
                   href="https://traveltriangle.com/offers">
                  <span className="sidenav-icons iconEleven" />
                  Offers
                </a>
              </li>
              <li>
                <meta itemProp="name" content="Blog" />
                <a itemProp="url" content="https://traveltriangle.com/blog"
                   href="https://traveltriangle.com/blog">
                  <span className="sidenav-icons iconTwelve" />
                  Blog
                </a>
              </li>
              <li>
                <meta itemProp="name" content="Testimonials" />
                <a itemProp="url" content="https://traveltriangle.com/testimonials"
                   href="https://traveltriangle.com/testimonials">
                  <span className="sidenav-icons iconThirteen" />
                  Testimonials
                </a>
              </li>
              <li>
                <meta itemProp="name" content="FAQ" />
                <a itemProp="url" content="https://traveltriangle.com/FAQs"
                   href="https://traveltriangle.com/FAQs">
                  <span className="sidenav-icons iconFourteen" />
                  FAQ
                </a>
              </li>
              <li>
                <meta itemProp="name" content="Contact Us" />
                <a itemProp="url" content="https://traveltriangle.com/contact_us"
                   href="https://traveltriangle.com/contact_us">
                  <span className="sidenav-icons iconFifteen" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="p15">
            <p className="f14 mb8">For any help</p>
            <p className="f16 m0 fw9"><a content="tel:18001235555" className="link">1800-123-5555</a></p>
          </div>
        </amp-sidebar>
        <Action events={{ tap: ['sidebar-left.toggle'] }}>
          {(props) => (
            <button {...props} className='sidebar-button'>
              <span className='hide'>
              sidebar
              </span>
            </button>)}
        </Action>
        <div id="target-element-left">
        </div>
      </div>
    );
  }
}

AmpBurgerMenu.propTypes = {
  ui: PropTypes.object,
  items: PropTypes.object,
};

const mapStateToProps = state => ({
  ui: state.topNavigation && state.topNavigation.ui,
  items: state.topNavigation && state.topNavigation.items,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AmpBurgerMenu);
