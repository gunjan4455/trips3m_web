import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import './Faq.scss';
import { getListingItemsHeading } from 'amp/helpers/utils';
import Action from 'amp/helpers/Action';

const parser = new Parser();

class Faq extends Component {
  state = {
    visible: 6,
  };

  _loadMore = () => {
    this.setState((prevState) => {
      return { visible: prevState.visible + 3 };
    });
  };

  render() {
    const { faqs, destination, title, isMultiDestination, destinations } = this.props;
    if (!faqs.length) {
      return null;
    }

    const firstFaqs = faqs && faqs.length > 6 ? faqs.slice(0,6) : faqs;
    const secondFaqs = firstFaqs.length ? faqs.slice(6,faqs.length) : [];
    return (
      <div className='row row- pl8 pr8 pt15 pb15 sbcw' itemScope itemType="http://schema.org/FAQPage">
        <amp-state id="faq">
          <script type="application/json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              showFaqIndex: 6
            })
          }}>
          </script>
        </amp-state>
        <h2
          className='heading-common-center faq-heading'>{getListingItemsHeading(title, destination.name, isMultiDestination, destinations)} </h2>
        <div className='row row- faq-box'>
          {
            firstFaqs.map((faq, index) =>
              <div
                key={faq.id}
                className="faq-element at_faq_questions show"
                itemType="http://schema.org/Question"
                itemProp="mainEntity"
                itemScope
                id={index === 1 ? 'faq_box-triggerlink' : ''}
              >
                <input type="radio" name="faq-radio" id={`faq_${faq.id}`} className='faq-input'
                />
                <label htmlFor={`faq_${faq.id}`}>
                  <div className='faq-question'>
                    <span className='question-mark absolute l0 absolute-center-v iblock' />
                    <h3 className='f14p fw7' itemProp="name">{faq.question}</h3>
                    <span className='arrow-down smooth absolute r0 iblock'/>
                  </div>
                  <div
                    className='faq-answer'
                    itemType="http://schema.org/Answer"
                    itemProp="acceptedAnswer"
                    itemScope
                  >
                    <div className='f14p fw4' itemProp="text">
                      {parser.parse(faq.answer)}
                    </div>
                  </div>
                </label>
              </div>
            )
          }
          {
            secondFaqs.map((faq, index) =>
              <div
                key={faq.id}
                className="faq-element at_faq_questions"
                data-amp-bind-class={`showSecondFaqs ? 'faq-element at_faq_questions show' : 'faq-element at_faq_questions'`}
                itemType="http://schema.org/Question"
                itemProp="mainEntity"
                itemScope
              >
                <input type="radio" name="faq-radio" id={`faq_${faq.id}`} className='faq-input'
                />
                <label htmlFor={`faq_${faq.id}`}>
                  <div className='faq-question'>
                    <span className='question-mark absolute l0 absolute-center-v iblock' />
                    <h3 className='f14p fw7' itemProp="name">{faq.question}</h3>
                    <span className='arrow-down smooth absolute r0 iblock'/>
                  </div>
                  <div
                    className='faq-answer'
                    itemType="http://schema.org/Answer"
                    itemProp="acceptedAnswer"
                    itemScope
                  >
                    <div className='f14p fw4' itemProp="text">
                      {parser.parse(faq.answer)}
                    </div>
                  </div>
                </label>
              </div>
            )
          }
          {
            this.state.visible < faqs.length ?
              <div className="faqLoadMoreContainer relative flex alignCenter justifyCenter p8 pl0 pr0"
              data-amp-bind-class={`showSecondFaqs ? 'hide' : 'faqLoadMoreContainer relative flex alignCenter justifyCenter p8 pl0 pr0'`}>
                <Action events={{ tap: ['AMP.setState({showSecondFaqs : true})'] }}>
                  {(props) => (
                    <button {...props} className="z2 btn-sec-load wfull pl64 pr64">Load More</button>
                  )}
                </Action>
              </div> : null
          }
        </div>
      </div>
    );
  }
}

Faq.propTypes = {
  faqs: PropTypes.array,
  destination: PropTypes.object,
  title: PropTypes.string,
  isMultiDestination: PropTypes.bool,
  destinations: PropTypes.array
};

Faq.defaultProps = {
  faqs: [],
  destination: null,
  title: 'FAQs',
  isMultiDestination: false,
  destinations: []
};

export default Faq;
