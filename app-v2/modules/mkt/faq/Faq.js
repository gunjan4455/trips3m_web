import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
import _isEmpty from 'lodash/isEmpty';
import styles from './faq.cm.scss';

const htmlToReactParser = new Parser();

export default class Faq extends Component {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {}
  };

  render() {
    const { data } = this.props;

    if (_isEmpty(data)) {
      return null;
    }

    const { heading, items } = data;

    return (
      <div className="col-xs-12 p0 sbcw pt24 row row-">
        <h2 className="pfc3 f18 fw9 text-center mb4">{heading}</h2>
        {
          items.map((item, i) => {
            return (
              <div className={ `bb ${styles.dropdown} ${styles}`} key={i}>
                <input type="checkbox" defaultChecked={i === 0} id={`drop_${i}`} className={styles.check} />
                <label className="f14 fw9 pfc3 p15 pl48 pr24 block relative" htmlFor={`drop_${i}`}>
                  <span className={`absolute l15 absolute-center-v iblock ${styles.search}`} />
                  {item.question}
                  <span className={styles.arrow} />
                </label>
                <p className={`row row- pl24 ${styles.sliderContent}`}>{htmlToReactParser.parse(item.answer)}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}
