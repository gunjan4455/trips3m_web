import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './readMoreByHeight.scss';
import Action from 'amp/helpers/Action';

class ReadMoreByHeight extends Component {
  constructor() {
    super();
    this.content = '';
  }

  UNSAFE_componentWillMount() {
    const data = this.props.content.split('&lt;readmore&gt;');
    this.content = data[0] + data[1];
    this.content = this.content.replace('!important', '');
  }

  render() {
    const { maxHeight, content, heading, showTitle, hotelDisplayName, isRatingSchemaEnabled } = this.props;
    return (
      <div className="row row-">
        <div property={isRatingSchemaEnabled ? 'description' : ''}>
          {
            showTitle ?
              <h2
                className="f16 pb0 m0 fwb mb15">{heading} {hotelDisplayName ? `at ${hotelDisplayName}` : null}</h2> : null
          }
          <div className={`readMoreContent block relative pt8 readMoreByHeight`}
               data-amp-bind-class={`expanded ? 'readMoreContent block relative pt8': 'readMoreContent block relative pt8 readMoreByHeight'`}>
            <span className="block dynamicTextInherit pfc3 f14p">
             <div dangerouslySetInnerHTML={{
               __html: this.content
             }} />
            </span>
          </div>
          <Action events={{ tap: [`AMP.setState({expanded:!expanded})`] }}>
            {(props) => (
              <button
                className="readMore-dropdown cursorP f14 pr15 flex relative alignCenter spaceBetween mt8  fw9"
                {...props}>
                <span data-amp-bind-text="expanded ?'Read Less':' Read More'">Read More</span>
                <span data-amp-bind-class="expanded ?
                'rotate180 downArrow relative block ' : 'rotate0 downArrow relative block '"
                      className="rotate0 downArrow relative block">
                </span>
              </button>
            )}
          </Action>
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
  hotelDisplayName: PropTypes.string,
  isRatingSchemaEnabled: PropTypes.bool
};
ReadMoreByHeight.defaultProps = {
  maxHeight: 83,
  showTitle: true,
  isRatingSchemaEnabled: false
};
export default ReadMoreByHeight;
