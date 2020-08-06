import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import './Faq.scss';
import { DownArrow } from 'helpers/Icon/Icon';
import { FAQS_CLICKED, trackSegment, DEFAULT_VALUE } from '../../actions/segmentEvents';
import { getListingItemsHeading } from 'helpers/utils';
const parser = new Parser();

class Faq extends Component {
  state = {
    visible: 6,
  };

  _loadMore = () => {
    this.setState((prevState) => {
      return {visible: prevState.visible + 3};
    });
  };

  trackSegmentEvent = (event, index, title, destinationName, destinationId) => {
    trackSegment({
      event: event,
      section: 'FAQs Clicked',
      object: '',
      cta: title,
      value: DEFAULT_VALUE,
      category: `Destination:${destinationName}`,
      label: `Index:${index}`,
      destination_id: destinationId
    });
  };

  render(){
    const { faqs, destination, title, isMultiDestination, destinations } = this.props;
    if (!faqs.length) {
      return null;
    }

    return (
    <div className='row row- pl8 pr8 pt15 pb15 sbcw' itemScope itemType="http://schema.org/FAQPage">
      <h2
        className='heading-common-center'>{getListingItemsHeading(title, destination.name, isMultiDestination, destinations)} </h2>
      <div className='row row- faq-box'>
        {
          faqs instanceof Array && faqs.map((faq, index) =>
            <div
               key={faq.id}
               className={`faq-element at_faq_questions ${index < this.state.visible ? 'show': '' }`}
               itemType="http://schema.org/Question"
               itemProp="mainEntity"
               itemScope
            >
              <input type="radio" name="faq-radio" id={`faq_${faq.id}`} className='faq-input'
                     onClick={() => this.trackSegmentEvent(FAQS_CLICKED, index,  faq.question, destination.name)} />
              <label htmlFor={`faq_${faq.id}`}>
                <div className='faq-question'>
                  <span className='question-mark absolute l0 absolute-center-v iblock' />
                  <h3 className='f14p fw7' itemProp="name">{faq.question}</h3>
                  <span className='arrow-down smooth absolute r0 absolute-center-v iblock'><DownArrow /></span>
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
            <div className="faqLoadMoreContainer relative flex alignCenter justifyCenter p8 pl0 pr0">
              <button onClick={this._loadMore} className="z2 btn-sec-load wfull pl64 pr64">Load More</button>
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
