import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BlueDownArrow } from 'app/helpers/Icon/Icon';
import CompareList from './CompareList';
import CompareTextSection from './CompareTextSection';
import { GCompareCardContentDiv, GCardViewActionDiv } from '../G';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

class InclusionExclusion extends Component {
  static propTypes = {
    quotes: PropTypes.object.isRequired,
    trackSegment: PropTypes.func.isRequired,
    isExclusion: PropTypes.bool
  };

  static defaultProps = {
    isExclusion: false
  };

  state = {
    showMore: false,
    text: 'View More'
  };

  showAndHideSection = () => {
    if (this.state.showMore) {
      this.setState({ showMore: !this.state.showMore, text: 'View More' });
    } else {
      this.setState({ showMore: !this.state.showMore, text: 'View Less' });
    }

    this.props.trackSegment({
      event: ORGANISM_CLICKED,
      section: this.props.isExclusion ? 'Exclusion' : 'Inclusion',
      cta: this.state.showMore ? 'View More' : 'View Less',
      miscId1: Object.keys(this.props.quotes).join('::'),
      miscType1: 'quote_id_left::quote_id_right'
    });
  };

  render() {
    const { isExclusion, quotes } = this.props;
    const { showMore } = this.state;
    let isViewMore = false;

    const compareItems = Object.keys(quotes).map((id) => {
      const quote = quotes[id];
      let inclusions = isExclusion ? quote.inclusions['0'] : quote.inclusions['1'];
      if (inclusions === undefined) {
        return (<CompareTextSection
          key={`inc_${id}`}
          text={isExclusion ? quote.exclusionsText : quote.inclusionsText}
        />);
      }

      if (inclusions.length > 5) {
        isViewMore = true;
        if (!showMore) {
          inclusions = inclusions.slice(0, 5);
        }
      }

      return (
        <CompareList
          key={`inc_${id}`}
          inclusions={inclusions}
          isExclusion={isExclusion}
        />
      );
    });

    return (
      <div>
        <GCompareCardContentDiv className="flex at_compareCardContent">
          {compareItems}
        </GCompareCardContentDiv>
        {
          isViewMore
            ? <GCardViewActionDiv className="clearfix">
              <button
                className={`f14 fw7 sfc1 mr15 mb15 fright flex alignCenter at_qcp_viewMore ${showMore ? 'cardViewLess' : ''}`}
                onClick={this.showAndHideSection}>
                {this.state.text}
                <span className="relative iblock icon-14 ml8">
                    <BlueDownArrow />
                  </span>
              </button>
            </GCardViewActionDiv>
            : null
        }
      </div>
    );
  };
}

export default InclusionExclusion;
