import React, { Component } from 'react';
import * as Icons from 'helpers/Icon/Icon';
import Swiper from 'app-v2/modules/shared/Swiper';

const cards = [
  {
    heading: 'The Largest Travel Marketplace',
    items: [
      {
        icon: 'MktAgents',
        title: '650+',
        subtitle: 'Verified Agents',
      },
      {
        icon: 'MktTravelers',
        title: '10 Lac+',
        subtitle: 'Happy Travellers',
      },
      {
        icon: 'MktDestinations',
        title: '65+',
        subtitle: 'Destinations',
      },
    ]
  },
  {
    heading: 'Your Purchase is Reliable & Secure',
    items: [
      {
        icon: 'MktVerified',
        title: 'TravelTriangle',
        subtitle: 'Verified',
      },
      {
        icon: 'MktQualityControl',
        title: 'Stringent',
        subtitle: 'Quality Control',
      },
      {
        icon: 'MktSupport',
        title: '24/7',
        subtitle: 'Support',
      },
    ]
  }
];

export default class Marketplace extends Component {

  render() {
    return (
      <div className="col-xs-12 p0 p24 pl0 pr0 text-center sbcw mb2">
        <Swiper type="dots" isFullWidthSwiper={true} ssrAnimation={{ width: 360, height: 162 }}>
          {
            cards.map((card, i) => {
              return (
                <div className="col-xs-12" key={i}>
                  <h2 className="f18 fw9 text-center mb24">{card.heading}</h2>
                  <div className="col-xs-12 p0">
                    {
                      card.items.map((item, i) => {
                        const IconComponent = Icons[item.icon];
                        return (
                          <div key={i} className="col-xs-4 pl8 pr8">
                            <span><IconComponent /></span>
                            <p className="f14 fw9 pfc3">{item.title}</p>
                            <p className="f14 pfc3">{item.subtitle}</p>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              );
            })
          }
        </Swiper>
      </div>
    );
  }
}
