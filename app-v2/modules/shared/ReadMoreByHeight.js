import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import styles from './readMoreByHeight.cm.scss';

const parser = new Parser();

import {
  BlueDownArrow
} from 'helpers/Icon/Icon';

class ReadMoreByHeight extends Component {
  constructor() {
    super();
    this.state = { expanded: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.setState({ expanded: !this.state.expanded });
  }

  render(){
    const { maxHeight, content, heading, showTitle, hotelDisplayName } = this.props;
    const { expanded } = this.state;
    return(
      <div className="row row-">
        <div>
          {
            showTitle ?
              <h2 className="f16 pb0 m0 fwb mb15">{heading} { hotelDisplayName ? `at ${hotelDisplayName}` : null}</h2> : null
          }
          <div style={{ 'maxHeight': expanded ? 'none' : maxHeight }}
               className={ `${styles.data} block relative pt8 ${expanded ? styles.expanded : ''}` }>
            <span className="block dynamicTextInherit pfc3 f14p">
              {parser.parse(content)}
            </span>
          </div>
          <button className={`${styles.readMore} cursorP flex alignCenter spaceBetween mt8 f12 fw9 `} onClick={this.handleSubmit}>
            <span className="flexFull block mr5">{ expanded ? 'Read Less' : 'Read More'}</span>
            <span className={`${styles.downArrow} relative block ${expanded ? 'rotate180' : 'rotate0'}`}><BlueDownArrow /></span>
          </button>
        </div>
      </div>
    );
  }
}

ReadMoreByHeight.propTypes = {
  content: PropTypes.string.isRequired,
  maxHeight: PropTypes.number,
  heading: PropTypes.string,
  showTitle: PropTypes.bool,
  hotelDisplayName: PropTypes.string
};

ReadMoreByHeight.defaultProps = {
  maxHeight: 83,
  showTitle: true
};

export default ReadMoreByHeight;
