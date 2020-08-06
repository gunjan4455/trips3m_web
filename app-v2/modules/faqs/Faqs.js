import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import Heading from 'modules/shared/Heading';
import {
  DownArrow
} from 'helpers/Icon/Icon';
import scrollWindowByTwo from 'components/Common/ScrollWindowForSticky';

import styles from './faq.cm.scss';

const parser = new Parser();

class Faq extends Component {
  state = {
    visible: 6,
  };

  _loadMore = () => {
    this.setState((prevState) => {
      return {visible: prevState.visible + 3};
    });
  }

  render(){
    const { data,hotelDisplayName } = this.props;
    if(!(data.faqs && data.faqs.length)) {
      return <div />;
    };
    return(
      <div className="clearfix sbcw p15 faqs" itemScope itemType="http://schema.org/FAQPage">
        <div className="clearfix mb8">
          <Heading data={{
            title: data.title,
            heading: data.heading,
            forHeading: hotelDisplayName
          }}
          />
        </div>
        <div className="clearfix">
          {data.faqs instanceof Array && data.faqs.slice(0, this.state.visible).map((faq, index) =>
              <div
                 className={`clearfix at_faq_questions ${styles.faqs}`}
                 key={faq.id}
                 itemType="http://schema.org/Question"
                 itemProp="mainEntity"
                 itemScope
              >
                <input type="checkbox" id={`faq${index}`} defaultChecked={index === 0}
                  className="hide" onChange={scrollWindowByTwo} />
                <label className="relative flex spaceBetween" htmlFor={`faq${index}`}>
                  <h3 className="f14 fw7 flexFull m0" itemProp="name">{faq.question}</h3>
                  <span className={`z2 relative flex alignCenter justifyCenter ml8 ${styles.arrowButton}`}><DownArrow /></span>
                </label>

                <div
                   className={`${styles.answerBox} f14 dynamicTextInherit`}
                   itemType="http://schema.org/Answer"
                   itemProp="acceptedAnswer"
                   itemScope
                >
                  <div itemProp="text">{parser.parse(faq.answer)}</div>
                </div>
              </div>)
          }
          {this.state.visible < data.faqs.length ?
              <div className={`flex relative alignCenter justifyCenter p8 pl0 pr0 ${styles.loadMore}`}>
                <button onClick={this._loadMore} className="btn-sec-load wfull pl64 pr64">Load More</button>
              </div> : null
            }
        </div>
      </div>
    );
  }
}

Faq.propTypes = {
  data: PropTypes.object.isRequired,
  hotelDisplayName:PropTypes.string
};

export default Faq;
