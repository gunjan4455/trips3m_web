import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './FromLocationSearch.scss';

import {
  load as loadSuggestions,
  suggestions
} from 'reducers/citySearch';

@connect(
  state => ({
    suggestions: suggestions(state)
  }),
  {
    loadSuggestions,
  }
)
class FromLocationSearch extends React.Component {
  static propTypes = {
    suggestions: PropTypes.object,
    loadSuggestions: PropTypes.func.isRequired,
    initialValue: PropTypes.string,
    itemSelected: PropTypes.func.isRequired,
    trackFormOneInteracted: PropTypes.func.isRequired,
    handleFocus: PropTypes.func,
    id: PropTypes.string,
    handleBlur: PropTypes.func.isRequired
  };
  static defaultProps = {
    suggestions: {
      destinations: [],
      cities: [],
    },
    initialValue: '',
    handleChange: () => {},
    handleFocus: () => {},
    id: 'toLocation',
    handleBlur: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      listShown: false,
      term: props.initialValue,
    };
    this.handleChange = this.handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.inputBlur = this.inputBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.initialValue !== prevProps.initialValue) {
      this.setState({
        term: this.props.initialValue,
      });
    }
  }
  handleChange(e) {
    this.setState({
      term: e.target.value,
      listShown: true,
    });
    this.props.trackFormOneInteracted();
    this.props.loadSuggestions(e.target.value);
    this.props.handleBlur();
  }

  handleFocus() {
    this.props.handleFocus();
  }

  inputBlur(e) {
    this.props.itemSelected(e.target.value);
  }

  blurHandler(e) {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.setState({
          listShown: false,
        });
      }
    }, 0);
  }
  _handleClick(item) {
    this.setState({
      listShown: false,
      term: item.target.value,
    });
    this.props.itemSelected(item.target.value);
  }

  render() {
    const renderList = (listItem, list) => {
      if (list.length) {
        return (
          <div className="row row- formlocation-box"
            key={listItem}>
            <p className="p8 list-heading">{listItem}</p>
            <ul>
              {
                list.map(item => (
                  <li key={item.id}>
                    <button onClick={this._handleClick} value={item.key}>{item.key}</button>
                  </li>
                ))
              }
            </ul>
          </div>
        );
      }
      return '';
    };
    return (
      <div className="row row-" onBlur={this.blurHandler}>
        <input onFocus={this.handleFocus} autoComplete="off" onChange={this.handleChange} type="text" onBlur={this.inputBlur} value={this.state.term} placeholder="Where You Want To Go ?" id={this.props.id} />
        <div className="row row- formlocation-box-data">
          {(this.state.listShown)
            ? [renderList('Destinations', this.props.suggestions.destinations || []),
              renderList('Cities', this.props.suggestions.cities || [])]
            : ''
          }
        </div>
      </div>
    );
  }
}

export default FromLocationSearch;
