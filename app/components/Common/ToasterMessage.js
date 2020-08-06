import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

class ToasterMessages extends React.Component {
  static propTypes = {
    toasterContent: PropTypes.string,
    callbackAction: PropTypes.func,
    timeInMS: PropTypes.number
  };
  static defaultProps = {
    toasterContent: '',
    callbackAction: () => {},
    timeInMS: 5000
  };
  constructor(props) {
    super(props);
    this.state = {
      toasterShown: false,
    };
  }
  componentDidMount() {
    if (!this.state.toasterShown) {
      this.setState({
        toasterShown: true,
      }, () => {
        setTimeout(() => {
          this.setState({
            toasterShown: false,
          }, this.props.callbackAction());
        }, this.props.timeInMS);
      });
    }
  }
  render() {
    return (
      <div>
        {
          (this.state.toasterShown)
            ? <div className="fixed wfull t50 z16 sbc1 p8"><p className="wfull text-center f12 sfcw">
              {this.props.toasterContent}
            </p></div>
            : null
        }
      </div>
    );
  }
}

export default (ToasterMessages);
