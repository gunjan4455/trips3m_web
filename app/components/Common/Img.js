import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import styles from './img.cm.scss';

class Img extends Component {
  static propTypes = {
    defaultSrc: PropTypes.string,
    onDocumentLoad: PropTypes.bool,
    src: PropTypes.string,
    ikSrc: PropTypes.string,
    alt: PropTypes.string.isRequired,
    itemProp: PropTypes.string,
    itemType: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  };

  static defaultProps = {
    defaultSrc: null,
    onDocumentLoad: false
  };

  static addImageKitTransformation(url, { width, height }) {
    if (width && height) {
      return `${url}?tr=w-${width},h-${height}`;
    } else if (width) {
      return `${url}?tr=w-${width}`;
    } else if (height) {
      return `${url}?tr=h-${height}`;
    }

    return url;
  }

  static getImageKitImageSource({ ikSrc, width, height }) {
    return Img.addImageKitTransformation(ikSrc, { width, height });
  }

  componentDidMount() {
    if (this.props.onDocumentLoad && typeof window !== 'undefined'
      && typeof window.performance.timing !== 'undefined'
      && window.performance.timing.domComplete > 0) {
      window.loadDeferImages && window.loadDeferImages();
    }
  }

  render() {
    const {
      src, ikSrc, defaultSrc, alt, onDocumentLoad,
      height, width, itemProp, itemType
    } = this.props;

    const imageSource = Img.getImageKitImageSource({ ikSrc: ikSrc || src, width, height });

    if (defaultSrc && onDocumentLoad) {
      return (
        <img
          src={defaultSrc}
          data-src={imageSource}
          alt={alt}
          data-defer-load="true"
          style={{minWidth: '100%', minHeight: '100%'}}
        />
      );
    }

    return (
      <LazyLoad height={height || '200px'}>
        <img className={styles.img} src={imageSource} alt={alt} itemProp={itemProp} itemType={itemType} />
      </LazyLoad>
    );
  }
}

export default Img;
