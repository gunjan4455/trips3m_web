import React from 'react';
import PropTypes from 'prop-types';
import {
  BlueDownArrow
} from 'helpers/Icon/Icon';
import { PACKAGE_INTERACTED } from "../../actions/segmentEvents";

class ShowMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    });
    this.props.trackSegment(PACKAGE_INTERACTED, 'Overview', (this.state.checked ?
      this.props.showLessText : this.props.showMoreText ));
  }

  render() {
    const { isRatingSchemaEnabled, showLessText, showMoreText } = this.props;
    return (
      <div>
        <input type="checkbox" className="read-more-state" checked={this.state.checked} id="post-1"/>
        <div className="read-more-wrap" property={isRatingSchemaEnabled ? 'description' : null}>{this.props.wrapText}<span className="read-more-target">{this.props.moreText}</span></div>
        <label htmlFor="post-1" className="read-more-trigger">
          <button className="read-more-button" onClick={this.handleChange}>
            {(this.state.checked) ? showLessText : showMoreText}
            <BlueDownArrow />
          </button>
        </label>
      </div>
    );
  }
}
ShowMore.propTypes = {
  wrapText: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  moreText: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  showMoreText: PropTypes.string,
  showLessText: PropTypes.string,
  trackSegment: PropTypes.func,
  isRatingSchemaEnabled: PropTypes.bool
};

ShowMore.defaultProps = {
  moreText: '',
  showMoreText: 'Read More',
  showLessText: 'Read Less',
  trackSegment: () => {},
  isRatingSchemaEnabled: false
};

export default ShowMore;
