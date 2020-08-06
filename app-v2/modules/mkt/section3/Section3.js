import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';


import Card from '../common/components/Card';

import styles from './section3.cm.scss';
import Swiper from 'app-v2/modules/shared/Swiper';
import { animateScroll } from 'react-scroll/modules';


export default class Section3 extends Component {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {}
  };

  renderCards = (items, heading) => {
    if (items.length === 1) {
      return items.map((item, i) =>
        <div className="bb pb15" key={`section3_box_${i}`}>
          <h2 className="f18 fw9 p15 text-center">{heading || 'Recently Booked Packages'}</h2>
          <div className={`${styles.sliderContent} ${styles.sliderSpace} section-cards`}>
            <Swiper spaceBetween={10}
                    loop
                    slidesPerView="auto"
                    ssrAnimation={{ width: 280, height: 122 }}
                    rebuildOnUpdate
            >
              {
                item.cards.map((card, i) =>
                  <div key={`section3_${i}`} >
                    <Card card={card} />
                  </div>
                )
              }
            </Swiper>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h2 className="f18 fw9 p15 bb">{heading} </h2>
        {
          items.map((item, i) =>
            <div className={styles.dropdownContent} key={`section3_box_${i}`}>
              <input type="checkbox" id={`sliderData_${i}`} className={styles.check} />
              <label className="f16 pfc3 p15 bb" htmlFor={`sliderData_${i}`}>
                {item.title}
                <span className={styles.arrow} />
              </label>
              <div className={`${styles.sliderContent} ${styles.sliderSpace} section-cards`}>
                <Swiper spaceBetween={10}
                        loop
                        slidesPerView="auto"
                        ssrAnimation={{ width: 280, height: 122 }}
                        rebuildOnUpdate
                >
                  {
                    item.cards.map((card, i) =>
                      <div key={`section3_${i}`} >
                        <Card card={card} />
                      </div>
                    )
                  }
                </Swiper>
              </div>
            </div>
          )
        }
      </div>
    );
  };

  render() {
    const { data } = this.props;

    if (_isEmpty(data)) {
      return null;
    }

    const { heading, buttonText, items } = data;
    return (
      <div className="mb2 sbcw">
        {this.renderCards(items, heading)}
        {/*<div className={`pl8 pr8 z9 ${styles.btnFixed}`}>
          <button type="button"
                  className="text-capitalize text-center f16 btn-filled-pri-large wfull"
                  onClick={this.scrollToFormHandler}>{buttonText}</button>
        </div>*/}
      </div>
    );
  }
}
