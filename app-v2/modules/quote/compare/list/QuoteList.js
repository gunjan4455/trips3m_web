import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { WARNING_TOASTER } from 'constants/rosterTypes';
import RatingStar from 'modules/shared/RatingStar';
import { GModalFullViewContainerDiv, GAgentCompayImgDiv } from './../G';
import { compareQuotesPath } from 'helpers/urlHelpers';
import { ORGANISM_VIEWED, ORGANISM_CLICKED } from 'actions/segmentEvents';
import Header from '../components/Header';
import { getQuotesBasicInfo } from 'modules/quote/reducers/quoteList';
import QuotePrice from 'modules/quote/shared/price/QuotePrice';
import { useQuery } from 'containers/Listing/parseFilters';

class QuoteList extends Component {

  state = {
    quoteIds: [],
    disable: true
  };

  componentDidMount() {
    const { location } = this.props;
    const stateObj = { disable: false };
    const query = useQuery(location.search);
    if (query.qIds) {
      stateObj.quoteIds = query.qIds;
    }
    this.setState(stateObj);

    this.props.trackSegment({
      event: ORGANISM_VIEWED,
      category: 'QCP - Select Quotes',
      section: 'Quote List',
      cta: '',
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { location } = nextProps;
    const query = useQuery(location.search);
    if (query.qIds) {
      this.setState({ quoteIds: query.qIds });
    }
  }

  handleChange = (e, id) => {
    let quoteIds = this.state.quoteIds;
    if (e.target.checked) {
      if (this.state.quoteIds.length === 2) {
        e.target.checked = false;
        this.props.showRoster({ type: WARNING_TOASTER, message: 'Only 2 quotes can be selected' });
        return;
      }

      quoteIds.push(id.toString());

      this.props.trackSegment({
        event: ORGANISM_CLICKED,
        category: 'QCP - Select Quotes',
        section: 'Quote Card',
        cta: 'Checkbox',
        miscId1: id,
        miscType1: 'quote_id'
      });
    } else {
      quoteIds = quoteIds.filter(quoteId => quoteId !== id.toString());
    }
    this.setState({ quoteIds: quoteIds });
  };

  compareQuotes = () => {
    const queryString = this.state.quoteIds.reduce((finalString, quoteId) =>
      (`${finalString}&quoteIds=${quoteId}`), '?'
    );
    this.props.history.push(`${compareQuotesPath(this.props.match.params.requestedTripId)}${queryString}`);

    this.props.trackSegment({
      event: ORGANISM_CLICKED,
      category: 'QCP - Select Quotes',
      section: 'Bottom Sticky',
      cta: 'Compare Quotes',
      miscId1: this.state.quoteIds.join('::'),
      miscType1: 'quote_id_left::quote_id_right'
    });
  };

  render() {
    const { quotes, goBack } = this.props;
    const { quoteIds } = this.state;

    return (
      <div>
        <Header goBack={goBack} />
        <GModalFullViewContainerDiv className="sbc5 pb64">
          <div className="p15 sbc5">
            <p className="m0 f14 pfc3 at_compareLimitationMessage">You can compare upto 2 quotes</p>
          </div>
          {
            quotes && Object.keys(quotes).map(quoteId => {
              const quote = quotes[quoteId];
              const quoteInfo = getQuotesBasicInfo(quote);
              return (
                <div className="p15 pr0 mb8 sbcw flex alignCenter at_quoteList" key={quoteId}>
                  <GAgentCompayImgDiv className="mr15 border at_agentCompanyImage">
                    <img src={quote.agent.profilePicture} alt={quote.agent.displayName} />
                  </GAgentCompayImgDiv>
                  <div className="flexFull flex alignCenter">
                    <div className="flexFull">
                      <h4 className="f14 fw7 mb2 at_agentCompanyName">{quote.agent.companyName}</h4>
                      <RatingStar rating={quote.agent.displayRating} />
                      <div className="flexFull quotePriceInfo">
                        <QuotePrice {...quoteInfo.priceInformation} {...quoteInfo.discountInformation} />
                      </div>
                    </div>

                    <div className="ml8">
                      <input id={`q${quote.id}`} className="checkbox-common at_quoteSelect_input"
                             type='checkbox'
                             disabled={this.state.disable}
                             checked={quoteIds.includes(quoteId.toString())}
                             onClick={(e) => this.handleChange(e, quote.id)} />
                      <label htmlFor={`q${quote.id}`} className="pt0 at_quoteSelect_label" />
                    </div>

                  </div>
                </div>
              );
            })
          }

          <div className="fixed b0 l0 r0 p8 z10 sbcw bs4">
            <button className="btn-filled-pri-large wfull at_compareBtn_main"
                    disabled={this.state.quoteIds.length < 2}
                    onClick={this.compareQuotes}>Compare Quotes
            </button>
          </div>

        </GModalFullViewContainerDiv>
      </div>
    );
  }
}

QuoteList.propTypes = {
  quotes: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
  showRoster: PropTypes.func,
  goBack: PropTypes.func,
  trackSegment: PropTypes.func.isRequired,
};

export default QuoteList;
