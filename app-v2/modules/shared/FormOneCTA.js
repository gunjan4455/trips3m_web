import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SEGMENT_ADMIN_COMMENT } from 'actions/segmentEvents';
import { updateFromOneProps } from 'reducers/formOneLead';
import { withRouter } from 'react-router-dom';

class FormOneCTA extends Component {
  static propTypes = {
    rtProps: PropTypes.object,
    updateFromOneProps: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    clickHandler: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.object
    ]),
  };

  static defaultProps = {
    rtProps: {},
    clickHandler: () => {},
    children: []
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // merge admin comments with the existing ones
    let adminComments = this.props.rtProps.adminComments || '';
    if (typeof window !== 'undefined') {
      adminComments = `${adminComments} #Form_filled_on ${window.location.href}`;
    }
    adminComments = ` ${adminComments} ${SEGMENT_ADMIN_COMMENT}`;
    const rtripProps = {
      ...this.props.rtProps,
      adminComments
    };
    this.props.clickHandler();
    // update the value on store
    this.props.updateFromOneProps(rtripProps);
    // change the url
    this.props.history.push('/requested_trips/new');

  }

  render() {
    return (
      <button className="wfull" onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

export default withRouter(connect(null, { updateFromOneProps })(FormOneCTA));
