import React from 'react';
import { PropTypes } from 'prop-types';

class CompareTextSection extends React.Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    return (
      <div className="flexFull p15">
        <div className="mb24 contentList">
          <p className="f14 at_text">
            {this.props.text || 'Not Included'}
          </p>
        </div>
      </div>
    );
  }
}

export default CompareTextSection;
