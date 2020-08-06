import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import _isEmpty from 'lodash/isEmpty';

import { BlueDownArrow } from 'helpers/Icon/Icon';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

const GreadmoreLabel = styled.label({
  '& button.read-more-button': {
    lineHeight: '20px',
    padding: '0',
  },
});

const GDownArrowSpan = styled.span({
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    top: '1px'
  }
});

class ShowMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultOpen
    };
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      checked: false
    });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      checked: !this.state.checked
    }, () => {
      this.state.checked && this.props.trackSegment({ cta: 'Read More' });
    });
  }

  render() {
    const textLength = 195;
    const { alignCenter, noOverwrite } = this.props;
    return (
      <div className="row row- text-left">
        <input type="checkbox" className="read-more-state" checked={this.state.checked} id="post-1" />
        <div
          className={`read-more-wrap ${this.props.isDefaultShowMore ? 'p-last-no-margin pfc3 f14p dynamicTextInherit' : ''} ${noOverwrite ? 'noOverwrite' : ''}`}>
          {
            // TODO: find a better way for truncate the string
            !this.state.checked && this.props.appendText && this.props.wrapText.length >= textLength
              ? this.props.wrapText + this.props.appendText
              : this.props.wrapText
          }
          <span className="read-more-target">
            {this.props.moreText}
          </span>
        </div>
        {
          this.props.moreText.length > 0 || !_isEmpty(this.props.moreText) ?
            <GreadmoreLabel htmlFor="post-1" className={`${alignCenter ? 'flex justifyCenter p15 bt row' :'read-more-trigger'} relative`}>
              <button
                className="read-more-button flex alignCenter spaceBetween relative f12 fw7"
                onClick={this.handleChange}>
                <span className="flexFull f14 fw7">
                  {(this.state.checked) ? this.props.showLessText : this.props.showMoreText}
                  {this.state.checked}
                </span>
                <GDownArrowSpan
                  className="flex ml8 relative alignCenter justifyCenter"><BlueDownArrow /></GDownArrowSpan>
              </button>
            </GreadmoreLabel>
            : ''
        }
      </div>
    );
  }
}

ShowMore.propTypes = {
  wrapText: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  moreText: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object
  ]),
  showMoreText: PropTypes.string,
  showLessText: PropTypes.string,
  alignCenter: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  isDefaultShowMore: PropTypes.bool,
  trackSegment: PropTypes.func,
  appendText: PropTypes.string,
  noOverwrite: PropTypes.bool,
};

ShowMore.defaultProps = {
  wrapText: '',
  moreText: '',
  showMoreText: 'Read More',
  showLessText: 'Read Less',
  defaultOpen: false,
  isDefaultShowMore: true,
  alignCenter: false,
  trackSegment: () => {
  },
  noOverwrite: false
};

export default ShowMore;
