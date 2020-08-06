import React, { Component } from 'react';
import styles from './placeholder.cm.scss';

class PlaceHolder extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }




  render() {

    return (
      <div id="sequential-form-placeholder" className={`${styles.formPlaceholder} sequential_form_placeholder_exp`}>
        <div className={styles.headerPlaceholder}>
          <h4>Start Planning</h4>
        </div>
        <div className={styles.bannerImagePlaceholder}>
          <div className={styles.loads}></div>
        </div>
        <div className={styles.fieldContainer}>
          <p>To</p>
          <div className={styles.inputContainerPlaceholder}>
            <div className={styles.loads}></div>
          </div>
        </div>
        <div className={styles.fieldContainer}>
          <p>From</p>
          <div className={`${styles.inputContainerPlaceholder} ${styles.from}`}>
            <div className={styles.loads}></div>
          </div>
        </div>
        <div className={styles.footerPlaceholder}>
          <div className={styles.footerPlaceholderButton}>
            <div className={styles.loads}></div>
          </div>
          <div className={styles.footerPlaceholderButton}>
            <div className={styles.loads}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceHolder;
