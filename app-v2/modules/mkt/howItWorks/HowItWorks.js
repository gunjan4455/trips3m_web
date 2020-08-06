import React, { Component } from 'react';

import styles from './howItWorks.cm.scss';

import * as Icons from 'helpers/Icon/Icon';



const card = {
  heading: 'How It Works',
  items: [
    {
      icon: 'MktSelectPackage',
      title: 'Select your package',
    },
    {
      icon: 'MktQuotes',
      title: 'Get multiple free quotes',
    },
    {
      icon: 'MktTravelers',
      title: 'Customize & book',
    },
  ]
};

export default class HowItWorks extends Component {

  render() {
    return (
      <div className="col-xs-12 p0 pt24 pb24 pl0 pr0 text-center sbcw mb2">
        <h2 className="f18 fw9 text-center mb24">{card.heading}</h2>
        <div className="col-xs-12 p0">
          {
            card.items.map((item, i) => {
              const IconComponent = Icons[item.icon];
              return (
                <div className={`col-xs-4 pl8 pr8 ${styles.worksBox}`} key={i}>
                  <span className="flex justifyCenter"><IconComponent /></span>
                  <p className="f14 fw9 pfc3">{item.title}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
