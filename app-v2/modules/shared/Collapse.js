import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

class Collapse extends React.Component {

  static propTypes = {
    collapsed:PropTypes.boolean,
    blocktext:PropTypes.string,
    children:PropTypes.isRequired
  }

  constructor(props) {
    super(props);


    this.initialState = {
      collapsed:props.collapsed||false
    };

    this.state = { ...this.initialState };
  }

  toggleCollapse = () => {
    console.log("clicked");
  }

  render() {
    return (
      <div className={'collapsable ' + (this.state.collapsed ? 'open':'')} >
          <div className="toggleBlock" onClick={this.toggleCollapse}>
            <span className="pfc3 f-16">{this.props.blocktext}</span>
          </div>
          <div className="slider-body">
            <p>daf</p>
          </div>
      </div>
    );
  }
}

export default Collapse;
