import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

import Swiper from 'app-v2/modules/shared/Swiper';
import Card from './components/Card';

export default class Agents extends Component {
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
      <div className="col-xs-12 p0 pt24 pb24 text-center sbcw mb2">
        <h2 className="f18 fw9 text-center pfc3 mb8">{heading}</h2>
        {
          <Swiper type="dots" spaceBetween={10} isFullWidthSwiper={true} ssrAnimation={{ width: 80, height: 80 }}>
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
