import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

const InputSearchConOuter = styled.div({
  paddingTop: '100px',
  paddingBottom: '100px',
});

const InputSearchCon = styled.div({
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  '& .input': {
    paddingRight: '50px',
    borderRadius: '50px',
    paddingLeft: '20px',
  },
  '& .search-button': {
    display: 'block',
    border: '0 none',
    background: 'transparent',
    borderRadius: '50px',
    width: '48px',
    height: '48px',
    cursor: 'pointer',
    position: 'absolute',
    right: '0',
    top: '0',
    zIndex: '2',
    '& span': {
      position: 'absolute',
      right: '20px',
      '& svg': {
        maxWidth: '100%',
      }
    },
  },
});

class SearchBannerForm extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      q: this.props.location.query.q
    };

    this.doSearch = this.doSearch.bind(this);
  }

  static getDerivedStateFromProps (props, state) {
    if (props.location.query.q !== state.q) {
      return {
        q: props.location.query.q
      };
    }
    return null;
  }

  doSearch() {
    this.props.history.push({
      pathname: '/search_results',
      query: {
        q: this.state.q
      }
    });
  }

  render() {
    return (
      <div className="row clearfix">
        <InputSearchConOuter className="clearfix">
          <InputSearchCon className="clearfix relative">
            <input type="text" className="input wfull" value={this.state.q}
              onChange={e => this.setState({ q: e.target.value })}
              placeholder="Please type your destination"
              onKeyDown={(e) => {
                if (e.nativeEvent.keyCode === 13) {
                  this.doSearch();
                }
              }}
            />
            <button type="button" className="search-button" onClick={this.doSearch}>
              <span className="absolute-center-v r10 search-black" />
            </button>
          </InputSearchCon>
        </InputSearchConOuter>
      </div>
    );
  }
}

export default connect(null )(SearchBannerForm);
