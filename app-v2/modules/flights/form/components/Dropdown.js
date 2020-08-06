import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import styled from '@emotion/styled';

const SEARCH_MINIMUM_LENGTH = 3;
const SEARCH_DEBOUNCE_TIME = 250;

const GDropDownListDiv = styled.div({
  maxHeight: '205px',
  overflowY: 'auto'
});

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false, inputValue: '', items: props.options };
    this.loadOptions = debounce(this.searchTerm, SEARCH_DEBOUNCE_TIME);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleSelection = (e) => {
    const { input } = this.props;
    this.toggleMenu();
    input.onChange(e.target.getAttribute('data-val'));
  };

  searchTerm = () => {
    const { inputValue } = this.state;
    const { getOptions, options } = this.props;
    if (
      inputValue &&
      inputValue.length >= SEARCH_MINIMUM_LENGTH &&
      getOptions
    ) {
      return getOptions(inputValue)
        .then((res) => this.setState({items: res.data.results }));
    }
    return this.setState({ items: options });
  };

  handleChange = (e) => {
    const {  input, fetchSuggestions } = this.props;
    const val = e.target.value;
    input.onChange(val);
    this.setState({ inputValue: val, isOpen: true }, () => {
      if (fetchSuggestions) {
        this.loadOptions();
      }
    });
  };

  handleClickOutside = event => {
    if (!(this.listElement_ && this.listElement_.contains && this.listElement_.contains(event.target))
      && !(this.inputElement_ && this.inputElement_.contains && this.inputElement_.contains(event.target))
    ) {
      this.setState({ isOpen: false });
    }
  };

  handleClick = () => {
    const { trackSegment } = this.props;
    this.toggleMenu();
    trackSegment();
  };

  render() {
    const { input, options, meta: { touched , error }, disabled, placeholder, readOnly, inputClassName } = this.props;
    const { isOpen, inputValue, items } = this.state;
    const newItems = (input.value || inputValue) ? items : options;

    return (
      <div className={`relative pb15 ${touched && (error && 'mb8')}`}>
        <input
          placeholder={placeholder}
          value={input.value || inputValue}
          className={`${inputClassName} text-capitalize ${'select'} ${touched && (error && 'input-error mb2')}`}
          disabled={disabled}
          onChange={this.handleChange}
          onClick={this.handleClick}
          readOnly={readOnly}
          ref={(ref) => this.inputElement_ = ref}
        />
        { isOpen ?
          <GDropDownListDiv className="border sbcw absolute z10 l0 r0 showScroll" ref={(ref) => this.listElement_ = ref}>
            {
              newItems.map(option => (
                <div className="p8 bb" data-val={option.value} key={`isd_${option.value}`} onClick={this.handleSelection}>
                  {option.label}
                </div>
              ))
            }
          </GDropDownListDiv>
        : null}
        {
          touched &&
          (error && <span className="input-error-text absolute b0

          ">{error}</span>)
        }
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  getOptions: PropTypes.func,
  trackSegment: PropTypes.func,
  fetchSuggestions: PropTypes.bool,
  readOnly: PropTypes.bool,
  inputClassName: PropTypes.string
};

Dropdown.defaultProps = {
  disabled: false,
  placeholder: '',
  trackSegment: () => {},
  readOnly: false,
  fetchSuggestions: true,
  inputClassName: 'pl48'
};

export default Dropdown;
