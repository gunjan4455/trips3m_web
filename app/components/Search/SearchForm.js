import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';

import SearchResultsGroup from './SearchResultsGroup';
import { suggest, clear } from '../../actions/search';
import { CloseDark } from 'helpers/Icon/Icon';

const SearchInputMain = styled.div({
  width: '100%',
  padding: '0px',
  background: '#FFF',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '1',
  right: '0',
});

const SearchInput = styled.div({
  width: '100%',
  padding: '20px',
  zIndex: '2',
  background: '#FFF',
  position: 'relative',
});
const SearchButton = styled.button({
  display: 'none',
  width: '56px',
  background: '#20A397',
  height: '48px',
  marginLeft: '15px',
  cursor: 'pointer',
  position: 'relative',
  '& svg': {
    display: 'block',
  }
});

const SearchInputInner = styled.div({
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
  position: 'relative',
  background: '#F2F2F2',
  '& input': {
    border: '0 none',
    fontSize: '12px',
    paddingRight: '50px',
  },
});

const ButtonClose = styled.button({
  border: '0 none',
  cursor: 'pointer',
  width: '20px',
  height: '20px',
  zIndex: '2',
  background: 'transparent',
  '& svg': {
    width: '14px !important',
    margin: '3px',
    height: '14px !important',
  }
});

const SearchResults = styled.div({
  top: '68px',
  left: '0',
  position: 'fixed',
  height: '100%',
  width: '100%',
  zIndex: '3',
  '& .search-results-main': {
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    position: 'relative',
    background: '#fff',
    zIndex: '2',
  },
});

const LayerButton = styled.button({
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  position: 'fixed',
  height: '100%',
  width: '100%',
  background: 'rgba(0,0,0,0.7)',
});

class SearchForm extends Component {
  static propTypes = {
    searchResults: PropTypes.object.isRequired,
    suggest: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      q: '',
      showSearchForm: false
    };

    this.searchLoadPropFunc = debounce(this.props.suggest, 50);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
    this.closeSearchForm = this.closeSearchForm.bind(this);
  }

  searchChangeHandler(e) {
    this.setState({ q: e.target.value }, () => {
      if (this.state.q) {
        this.searchLoadPropFunc(this.state.q);
      } else {
        this.props.clear();
      }
    });
  }

  closeSearchForm() {
    this.setState({ showSearchForm: false, q: '' }, () => {
      document.body.classList.remove('overflowh');
    });
  }

  render() {
    const { searchResults } = this.props;

    return (
      <div>
        <SearchButton onClick={() => this.setState({ showSearchForm: true }, () => {
          this._searchInput.focus();
          document.body.classList.add('overflowh');
        })}>
          <span className="search-white iblock absolute-center" />
        </SearchButton>
        {
          this.state.showSearchForm ?
            <SearchInputMain>
              <SearchInput>
                <SearchInputInner>
                  { /* <span className="search-black iblock absolute-center-v l0" /> */}
                  <input
                    className="input"
                    placeholder="Please type your destination"
                    onChange={this.searchChangeHandler}
                    value={this.state.q}
                    type="text"
                    ref={i => this._searchInput = i}
                    onKeyDown={(e) => {
                      if (e.nativeEvent.keyCode === 13) {
                        this.props.history.push({
                          pathname: '/search_results',
                          query: {
                            q: this.state.q
                          }
                        });
                        this.closeSearchForm();
                      } else if (e.nativeEvent.keyCode === 27) {
                        this.closeSearchForm();
                      }
                    }}
                />
                  <ButtonClose onClick={this.closeSearchForm}
                    className="iblock absolute-center-v r15 pointer"><CloseDark /></ButtonClose>
                </SearchInputInner>
              </SearchInput>
              <LayerButton onClick={this.closeSearchForm} />
            </SearchInputMain> : null
        }
        {
          this.state.q ?
            <SearchResults>
              <div className="search-results-main">
                {
                  Object.keys(searchResults.parsed)
                    .filter(key => searchResults.parsed[key].length > 0)
                    .filter(key => key.toLowerCase() !== 'city_block' &&
                      key.toLowerCase() !== 'testimonial')
                    .map(key =>
                      <SearchResultsGroup closeSearchResults={this.closeSearchForm}
                        key={key} groupKey={key}
                        results={searchResults.parsed[key]} />
                    )
                }
              </div>
            </SearchResults> : null
        }
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  searchResults: state.search
}), { suggest, clear })(SearchForm));
