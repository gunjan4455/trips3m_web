import React from 'react';
import { PropTypes } from 'prop-types';

import { GRosterDiv } from './G';

/**
 * Roster is to display messages for dynamic layouts.
 * - rosterType - String: Defines type of message. Currently we support
 * rosterSuccess, rosterError and rosterInfo
 * - text - String [optional]: Single line message for user.
 * - message - Object [optional]: For more complex messages which might contain link for user action.
 * For ex: {
 *     header: "New trip created!",
 *     message: "Please activate your email address. To resend activation mail {{send_activation_mail}}",
 *     links: [{type: 'send_activation_mail', label: 'Click here'} ]
 *   }
 * - timeout - Number [optional]: if provided, Message will disappear after timeout in milliseconds
 * - callback - Function [optional]: Callback to pass event based on which action is to be called by parent.
 *
 *  P.S. - Either rosterText or rosterMessage should be present. If both are present rosterText would have priority.
 */
export default class Roster extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    message: PropTypes.string,
    timeout: PropTypes.number,
    isRosterOpen: PropTypes.bool,
    hideRoster: PropTypes.func.isRequired,
    allowTimeOut: PropTypes.bool
  };

  /**
   * rosterType could have two types:
   *  - sucessRoster
   *  - errorRoster
   *  - infoRoster
   */
  static defaultProps = {
    type: 'infoRoster',
    isRosterOpen: false,
    allowTimeOut: true
  };

  constructor(props) {
    super(props);
    this.state = {
      isRosterOpen: props.isRosterOpen
    };
    this.closeRoster = this.closeRoster.bind(this);
  }

  componentDidMount() {
    if (this.state.isRosterOpen) {
      this.showRoster();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.isRosterOpen && nextProps.isRosterOpen) {
      this.showRoster();
    }
  }

  showRoster() {
    this.setState({ isRosterOpen: true }, () => {
      if (this.props.timeout && this.props.allowTimeOut) {
        setTimeout(() => {
          this.closeRoster();
        }, this.props.timeout);
      }
    });
  }

  closeRoster() {
    this.setState({ isRosterOpen: false });
    this.props.hideRoster();
  }

  render() {
    const { type, message } = this.props;

    return this.state.isRosterOpen && message ? (
      <GRosterDiv className="fixed">
        <div className={`toaster ${type}`}>
          <div className="container dynamicTextInherit p0">
            {message}
            <span className="rosterClose" onClick={this.closeRoster} />
          </div>
        </div>
      </GRosterDiv>
    ) : null;
  }
}
