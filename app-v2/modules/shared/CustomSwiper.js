import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const GContainerDiv = styled.div({
  height: '48px',
  '& .swiperContainer': {
    overflowX: 'scroll',
    paddingBottom: '30px',
  }
});

class CustomSwiper extends Component {
  render() {
    const { containerStyle, isDoubleLine, styles } = this.props;
    return (
      <GContainerDiv style={containerStyle} className={'overflowh row'}>
        <div className={`swiperContainer pl15 ${isDoubleLine ? styles.doubleLine : ''}`}>
          <div className={`flex ${isDoubleLine ? styles.doubleLineFlex : ''}`}>
            {this.props.children}
          </div>
        </div>
      </GContainerDiv>
    );
  }
}

CustomSwiper.defaultProps = {
  containerStyle: {},
  styles: {},
  isDoubleLine: false,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object
  ])
};

CustomSwiper.propTypes = {
  containerStyle: PropTypes.object,
  isDoubleLine: PropTypes.bool,
  styles: PropTypes.object,
  children: []
};

export default CustomSwiper;
