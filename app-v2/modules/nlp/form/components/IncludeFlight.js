import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import styles from './IncludeFlight.cm.scss';

class IncludeFlight extends PureComponent {

  handleChange = () => {
    const { keyValue, value,  onChange } = this.props;
    onChange(keyValue, !value);
  };

  render() {
    return (
      <div className={`at_includeFlight p24 flex mb64 spaceBetween ${styles.bottomSpacing}`}>
        <p className="fw9">Flights</p>
        <div className={styles.toggleBtn}>
          <label className={styles.switch}>
            <input name="flights" type="checkbox" checked={this.props.value} onChange={this.handleChange}/>
              <span className={styles.slider}/>
          </label>
        </div>
      </div>
    );
  }
}

IncludeFlight.propTypes = {
  value: PropTypes.bool,
  keyValue: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

IncludeFlight.defaultProps = {
  value: false,
  onChange: () => {},
};


export default IncludeFlight;
