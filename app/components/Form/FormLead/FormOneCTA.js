import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SEGMENT_ADMIN_COMMENT, setCookie } from 'actions/segmentEvents';
import { withRouter } from 'react-router-dom';
import { updateFromOneProps } from 'reducers/formOneLead';

class FormOneCTA extends Component {
  static propTypes = {
    rtProps: PropTypes.object,
    updateFromOneProps: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    deals: PropTypes.bool,
    clickHandler: PropTypes.func,
    tag: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.object
    ]),
    budget: PropTypes.string
  };

  static defaultProps = {
    rtProps: {},
    clickHandler: () => {},
    children: [],
    deals: false,
    tag: '',
    budget: ''
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { rtProps, tag, deals, budget } = this.props;
    // merge admin comments with the existing ones
    let adminComments = rtProps.adminComments || '';
    if (typeof window !== 'undefined') {
      adminComments = `${adminComments} #Form_filled_on ${window.location.href}`;
    }
    adminComments = ` ${adminComments} ${SEGMENT_ADMIN_COMMENT}`;
    const rtripProps = {
      ...rtProps,
      adminComments,
    };
    setCookie('to_loc', rtProps.to_loc);
    setCookie('trip_days', rtProps.trip_days);
    this.props.clickHandler();
    // update the value on store
    this.props.updateFromOneProps(rtripProps);
    // change the url
    if (deals) {
      this.props.history.push(`/requested_trips/new?deals=true&tag=${tag}&budget=${budget}`);
    } else {
      this.props.history.push('/requested_trips/new');
    }
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
