import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Swiper from 'components/Swiper/Swiper';
import Heading from '../../../modules/shared/Heading';
import PropTypes from 'prop-types';

class LoadMore extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: props.isSlider ? props.children.length : props.pageSize,
      allShown: props.children.length <= props.pageSize
    };
  }

  showMore = () => {
    let {
      state: { count }
    } = this;
    count = count * 2;
    this.setState({ count, allShown: count >= this.props.children.length });
  }

  render () {
    const {
      props: { children, name, isSlider, heading, subHeading, viewAll }
    } = this;
    const count = this.state ? this.state.count : 0;
    const {
      state: { allShown }
    } = this;

    const visibleChildren = children.filter((child, index) => {
      return count > index;
    });

    const loadMoreButton =
      !allShown && !isSlider ? (
        <button className='wfull btn-sec-load ripple' onClick={this.showMore}>
          Load More <span>{name}</span>
        </button>
      ) : null;

    return (
      <div className="search-result radius2 m8 mt0">
        {isSlider ? (
          <div className="p15 sbcw">
            <div className="flex relative">
              <Heading
                data={{
                  title: heading,
                  heading: subHeading
                }}
              />
              {viewAll ? (
                <Link
                  to={viewAll}
                  className="absolute t2 r0 iblock f14 fw7"
                >
                  View All
                </Link>
              ) : null}
            </div>
            <Swiper
              slideClass="slide"
              spaceBetween={15}
              slidesPerView="auto"
              rebuildOnUpdate
              ssrAnimation={{ width: 344, height: 355 }}
            >
              {visibleChildren}
            </Swiper>
          </div>
        ) : (
          <div className="mt15">
            <div className="flex spaceBetween relative">
              <div className="flexFull">
                <Heading
                  data={{
                    title: heading,
                    heading: subHeading
                  }}
                />
              </div>
              {viewAll ? (
                <Link to={viewAll} className="iblock f14 fw7">
                  View All
                </Link>
              ) : null}
            </div>
            <div className="radius2 sbc5">
              <div className="sbc5">{visibleChildren}</div>
              <div>{loadMoreButton}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

LoadMore.propTypes = {
  children: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  name: PropTypes.string,
  isSlider: PropTypes.bool.isRequired,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  viewAll: PropTypes.string
};

LoadMore.defaultProps = {
  name: ''
};

export {LoadMore};
