import React, { PureComponent } from 'react';

import styles from './howitworks.cm.scss';
import * as Icons from 'helpers/Icon/Icon';

const card = {
  heading: 'How it Works',
  items: [
    {
      icon: 'PdpSelectPackage',
      title: 'Personalise This Package',
      paragraph: 'Make changes as per your travel plan & submit the request.',
    },
    {
      icon: 'PdpQuotes',
      title: 'Get Multiple Quotes',
      paragraph: 'Connect with top 3 agents, compare quotes & customize further.',
    },
    {
      icon: 'IllusTraveler',
      title: 'Book The Best Deal',
      paragraph: 'Pay in easy installments & get ready to enjoy your holiday.',
    },
  ]
};


export default class HowItWorks extends PureComponent {
  render() {
    return (
      <div className="col-xs-12 p0 sbcw">
        <h2 className="f16 fw9 p15 pfc5 bb">{card.heading}</h2>
        <div className={`col-xs-12 p0 ${styles.tiles}`}>
          {
            card.items.map((item, i) => {
              const IconComponent = Icons[item.icon];
              return (
                <div className={`col-xs-12 flex alignCenter pl15 pr15 pt24 pb24 ${styles.worksBox}`} key={i}>
                  <span className="flex justifyCenter"><IconComponent /></span>
                  <div className="pl24 dark-font">
                    <h4 className="f14 fw9 pb8">{item.title}</h4>
                    <p className="f12">{item.paragraph}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

