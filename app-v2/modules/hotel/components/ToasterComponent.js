import React from 'react';
import PropTypes from 'prop-types';

class ToasterComponent extends React.Component {
  static propTypes = {
    callbackAction: PropTypes.func,
    children: PropTypes.node,
    timeInMS: PropTypes.number,
    customStyle: PropTypes.object
  };
  static defaultProps = {
    callbackAction: () => {
    },
    timeInMS: 2000,
    customStyle: {}
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
    const customStyle = this.props.customStyle;
    return (
      <div>
        {
          (this.state.toasterShown)
            ? <div className="fixed z16 l0 r0" style={customStyle}>
                {this.props.children}
              </div>
            : null
        }
      </div>
    );
  }
}

export default (ToasterComponent);
