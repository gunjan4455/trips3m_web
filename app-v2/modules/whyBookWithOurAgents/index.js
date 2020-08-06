import React, { PureComponent } from 'react';

import styles from 'modules/howItWorks/howitworks.cm.scss';

import * as Icons from  'helpers/Icon/Icon';

const card = {
  heading: 'Why Book With Our Agents?',
  items: [
    {
      icon: 'IllusAgent',
      title: 'Only The Best Agents',
      paragraph: 'Travelers deal with only the top 10% reviewed agents who are selected after a 23 step rigorous assessment procedure by TravelTriangle.'
    },
    {
      icon: 'IllusQualityCheck',
      title: 'Ensuring Quality',
      paragraph: 'TravelTriangle ensures quality service via verified partners by releasing the payment only after the booking vouchers/receipts are received by the traveler.'
    },
    {
      icon: 'IllusSupport',
      title: '24*7 On-trip assistance by Local Travel Agents',
      paragraph: 'Travelers deal with only the top 10% reviewed agents who are selected after a 23 step rigorous assessment procedure by TravelTriangle.'
    },
  ]
};


export default class WhyBookWithOurAgents extends PureComponent {
  render() {
    return (
      <div className="col-xs-12 p0 sbcw">
        <h2 className="f16 fw9 p15 pfc5 bb">{card.heading}</h2>
        <div className={`col-xs-12 p0 ${styles.tiles}`}>
          {
            card.items.map((item, i) => {
              const IconComponent = Icons[item.icon];
              return (
                <div className={`col-xs-12 flex pl15 pr15 pt24 pb24 ${styles.worksBox}`} key={i}>
                  <div className={ `flex justifyCenter ${styles.image}`}><IconComponent /></div>
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

