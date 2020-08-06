import React from 'react';
import PropTypes from 'prop-types';

import { timeFromNow } from 'helpers/DateTime';
import Img from 'components/Common/Img';

class TestimonialsUser extends React.Component {

  static propTypes = {
    author: PropTypes.object.isRequired,
    time: PropTypes.string
  };

  static defaultProps = {
    time: ''
  };

  render() {
    const { author, time } = this.props;
    return (
      <div className="flex flexCenterItems">
          <div className="radius100 pbc4 overflowh hide">
            <Img src={author.authorPic} alt={author.authorName} />
          </div>
        <div>
          <h6 className="f14 fw7 mb2">{author.authorName}</h6>
          <p className="m0 f12 pfc4">{time && timeFromNow(time)}</p>
        </div>
      </div>
    );
  }
}

export default TestimonialsUser;
