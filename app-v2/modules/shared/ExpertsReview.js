import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Parser } from 'html-to-react';

const parser = new Parser();

const GReviewTypeDiv = styled.div({
  minWidth: '48%',
  maxWidth: '48%',
  marginBottom: '6px',
});

const GReviewCountDiv = styled.div({
  height: '6px',
  width: '100%',
});

const GAuthorImgDiv = styled.div({
  width: '50px',
  height: '50px',
  '& img': {
    minWidth: '100%',
    minHeight: '100%',
  }
});

export default class ExpertsReview extends React.Component {
  static propTypes = {
    expertReviews: PropTypes.object.isRequired
  };

  render() {
    const { expertReviews } = this.props;
    const { author: {authorPic, authorName, userDesignation, userLocation} } = expertReviews;
    return (
      <div className="">
        <div className="flex alignCenter flexCenterItems">
          <GAuthorImgDiv className="radius100 pbc4 overflowh">
            <img src={`${authorPic}?tr=w-50,h-50`} alt={authorName} />
          </GAuthorImgDiv>
          <div className="ml15">
            <h6 className="f14 fw9 mb2">{authorName}</h6>
            <p className="m0 f12 pfc4">
              {userDesignation},
              {userLocation}
            </p>
          </div>
        </div>
        <div className="dynamicTextInherit f14p mt15 mb24">
          {parser.parse(expertReviews.body)}
        </div>
        <div className="flex flexWrap spaceBetween">
          {expertReviews.categoryRatings.map(category =>
            <GReviewTypeDiv key={expertReviews.id}>
              <p className="m0 mb8 f14 text-capitalize">{category.name.replace('_', ' ')} <span className="ml8 fw9">{category.rating}</span></p>
              <GReviewCountDiv className="relative radius20 overflowh sbc5">
                <span className="reviewCount absolute l0 t0 b0 sbc3" style={{ width: `${(category.rating*100) / 10}%` }} />
              </GReviewCountDiv>
            </GReviewTypeDiv>
          )}
        </div>
      </div>
    );
  }
}
