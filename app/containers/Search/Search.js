import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSearchTerm } from '../../actions/Home';
import Logo from '../../components/Home/Logo';
import SearchBar from '../../components/Home/SearchBar';

@connect(state => ({ searchTerm: state.home.searchTerm, }), { updateSearchTerm })
class Home extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    updateSearchTerm: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange = (e) => {
    this.props.updateSearchTerm(e.target.value);
  };

  render() {
    return (
      <div className="row alignhome">
        <Logo />
        <SearchBar
          searchTerm={this.props.searchTerm}
          handleTextChange={this.handleTextChange}
        />
      </div>
    );
  }
}

export default Home;
