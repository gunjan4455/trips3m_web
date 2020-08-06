import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import Swiper from 'app-v2/modules/shared/Swiper';
import Card from './components/Card';

export default class Testimonials extends Component {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {}
  };

  render() {
    const { data } = this.props;

    if (_isEmpty(data)) {
      return null;
    }

    const { heading, items } = data;

    return (
      <div className="col-xs-12 p0 p24 pl0 pr0 text-center sbcw mb2">
        <h2 className="f18 fw9 text-center pfc3 mb15">{heading}</h2>
        {
          <Swiper type="dots" isFullWidthSwiper={true} ssrAnimation={{ width: 330, height: 225 }} >
            {
              items.map((card, i) => {
                return (<Card card={card} key={i} />);
              })
            }
          </Swiper>
        }
      </div>
    );
  }
}
