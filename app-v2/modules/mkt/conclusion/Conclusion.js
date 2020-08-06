import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

import ShowMore from 'app-v2/modules/shared/ShowMore';

export default class Conclusion extends Component {
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

    const { heading, content } = data;

    const [wrapText, moreText] = content.split('&lt;readmore&gt;');

    return (
      <div className="col-xs-12 p15 pt24 sbcw">
        <h2 className="pfc3 f18 fw9 text-center mb15">{heading}</h2>
        <ShowMore wrapText={wrapText} moreText={moreText} />
      </div>
    );
  }
}
