import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { goBack } from 'react-router-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {CloseDark, SearchIcon, SearchBlack} from 'helpers/Icon/Icon';
import Loader from 'components/Generic/Loader';
import {toggle, getRedirectUrl, resetData} from 'reducers/search';
import { search } from 'actions/search';

import _isEqual from 'lodash/isEqual';
import _get from "lodash/get";

import './Search.scss';
import { useQuery } from 'containers/Listing/parseFilters';

const SEARCH_VALUE_LENGTH = 8;

@connect(state => ({ searchUrl: getRedirectUrl(state), loading: state.search.loading || false }),
  { search, toggle, goBack, resetData })
class Search extends Component {

  static propTypes = {
    searchUrl: PropTypes.string,
    search: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    goBack:  PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    resetData: PropTypes.func.isRequired,
    onSearch: PropTypes.func,
    alwaysvisible: PropTypes.bool,
    location: PropTypes.object,
    isLargeSearch: PropTypes.bool,
    isHomePageSearch: PropTypes.bool
  };

  static defaultProps = {
    searchUrl: undefined,
    isLargeSearch: false,
    location: undefined,
    isHomePageSearch: false,
    onSearch: undefined
  };

  constructor(props) {
    super(props);
    const query = props.location ? useQuery(props.location.search) : {};
    this.state = {
      query:  Object.keys(query).length ? query.q: '',
      isLayerVisible: false,
      showResetBtn: this.isValidSearch(this.props),
      isHomePageSearch: this.props.isHomePageSearch
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleResetSearch = this._handleResetSearch.bind(this);
    this._handleLayerVisibility = this._handleLayerVisibility.bind(this);
    this.isValidSearch = this.isValidSearch.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {searchUrl, history} = this.props;
    const isEqualData = _isEqual(prevProps.searchUrl, searchUrl);
    if (!isEqualData && searchUrl) {
      history.push(searchUrl);
      this.props.toggle();
    }
    const prevLoc = useQuery(_get(prevProps, 'location.search' , ''));
    const nextLoc = useQuery(_get(this.props, 'location.search', ''));
    if (
      (prevLoc.q || '') !== (nextLoc.q || '')
    ) {
      this.setState({
        query: nextLoc.q || '',
        showResetBtn: this.isValidSearch(this.props)
      });
    }
  }

  isValidSearch(props) {
    const query = useQuery(props.location && props.location.search);
    const searchValue = query.q || '';
    return searchValue && searchValue.length >= SEARCH_VALUE_LENGTH;
  };

  _handleChange(e) {
    this.setState({ query: e.target.value });
  }

  _handleSubmit() {
    const { onSearch } = this.props;
    if (this.state.query) {
      onSearch && onSearch();
      this.props.search(this.state.query);
    }
  }

  _handleKeyDown(e) {
    if (e.nativeEvent.keyCode === 13) { // enter key pressed
      document.getElementsByTagName('body')[0].classList.remove('overflowh');
      this._handleSubmit();
    };
    if(this.state.query.length >= SEARCH_VALUE_LENGTH) {
      this.setState({showResetBtn: true});
    }
    else {
      this.setState({showResetBtn: false});
    }
  }

  _handleBackArrow = () => {
    if (this.props.alwaysvisible) {
      // this.props.resetData();
      this.props.goBack();
      // todo: verify use case
      setTimeout(() => {
        this.props.resetData();
      }, 1000);
    } else {
      this.props.toggle();
    }
  };

  _handleResetSearch = () => {
    this.setState({ query: '', showResetBtn: false });
    this.searchInput.focus();
  };

  _handleLayerVisibility = () => {
    this.setState({isLayerVisible: false});
    document.getElementsByTagName('body')[0].classList.remove('overflowh');
  };

  _handleFocus = () => {
    this.setState({isLayerVisible: true});
    document.getElementsByTagName('body')[0].classList.add('overflowh');
    if(this.state.isHomePageSearch) {
      window.scrollTo({
        top: 100,
        behavior: 'smooth',
      });
    }
  };

  _handleBlur = () => {
    this.setState({isLayerVisible: false});
    document.getElementsByTagName('body')[0].classList.remove('overflowh');
  };

  render() {
    const { loading, isLargeSearch, isHomePageSearch } = this.props;
    return (
      <div className={"row row- relative z10 " + (this.props.alwaysvisible ? 'always-visible' : '')}>
        <div className="row row- relative z2 search-container-main">
          <div className={`${isHomePageSearch ? ' homgePageSearch radius4 ' : ''}`}>
          <div className={`sbcw flex overflowh alignCenter spaceBetween search-bar ${isHomePageSearch ? ' radius4 ' : ' radius2 '}`}>
            <input autoComplete="on" onKeyDown={this._handleKeyDown} onChange={this._handleChange} onFocus={this._handleFocus} onBlur={this._handleBlur} type="text" value={this.state.query} placeholder="Type a Destination"
                   className={`at_inputSearch input-search flexFull ${isLargeSearch ? "input-search-large" : "input-search-small"}`} ref={input => { this.searchInput = input; }} />
            {
              this.state.showResetBtn ?
              <button className={`clear-form mr5 flex flexCenter ${isLargeSearch ? '' : 'smallHeight'}`} onClick={this._handleResetSearch}><CloseDark /></button> :
              null
            }
            {
              loading ?
                <div className={"search-button-loader " + (isLargeSearch ? '' : 'smallHeight')}>
                  {isHomePageSearch ?
                    <Loader color={'#3e3e3e'} loaderStyle={{ width: '20px', height: '20px', position: 'relative' }} /> :
                    <Loader loaderStyle={{ width: '20px', height: '20px', position: 'relative' }} />
                  }
                </div> :
                <button type="submit" onClick={this._handleSubmit}
                  className={`at_searchButton flex alignCenter justifyCenter search-button relative ${isLargeSearch ? '' : 'smallHeight'}`}
                >
                  {
                    isHomePageSearch ?
                      <SearchBlack /> : <SearchIcon />
                  }
                </button>
            }

          </div>
          </div>
        </div>
{/*        <div onClick={this._handleLayerVisibility} className={"destination-search-container-box-layer z1 " + (this.state.isLayerVisible ? 'block' : 'hide')} />*/}
      </div>
    );
  }
}


export default withRouter(Search);
