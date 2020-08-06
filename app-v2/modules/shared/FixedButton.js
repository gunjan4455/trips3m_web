import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';

export default class FixedButton extends Component {
  static propTypes = {
    ctaText: PropTypes.string,
    destination: PropTypes.string,
  }

  static defaultProps = {
    ctaText: 'Plan My Holiday',
    destination: '' 
  }
  render() {
    const { ctaText, destination } = this.props;
    return (
      <div className="fixed b0 l0 r0 sbc5 z6 bs6 p8">
        <FormOneCTA rtProps={{ to_loc: destination }}><span className="btn-filled-pri-large wfull">{ctaText}</span></FormOneCTA>
      </div>
    );
  }
}

