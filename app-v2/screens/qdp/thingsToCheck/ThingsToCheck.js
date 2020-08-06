import React, { Component } from 'react';

import styles from './thingsToCheck.cm.scss';
import { BudgetIconNew, TicketsIcon, Hotel, Tempotraveler, Cab } from 'helpers/Icon/Icon';

class ThingsToCheck extends Component {
  render() {
    return (
      <div className="row row-">
        <div className="col-xs-12 p0">
          <p className="sbc7 fw9 sfc8 text-center p24 f20 pr48 pl48">Things to check while comparing quotes</p>
          <div className={`relative sbcw p15 pt0 pb0 ${styles.list}`}>
            <ul>
              <li className="flex p15 pl5 bb alignCenter">
                <div className={styles.image}><BudgetIconNew /></div>
                All taxes are included or not
              </li>
              <li className="flex p15 pl5 bb alignCenter">
                <div className={styles.image}><TicketsIcon /></div>
                Entry tickets for activities
              </li>
              <li className="flex p15 pl5 bb alignCenter">
                <div className={styles.image}><Hotel /></div>
                Hotel rating & room category
              </li>
              <li className="flex p15 pl5 bb alignCenter">
                <div className={styles.image}><Tempotraveler /></div>
                Type of transport, Private vs Public
              </li>
              <li className="flex p15 pl5 alignCenter">
                <div className={styles.image}><Cab /></div>
                Type of car, Hatchback vs Sedan etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ThingsToCheck;
