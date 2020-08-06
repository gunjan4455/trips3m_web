import PropTypes from 'prop-types';
import React from 'react';
import { ScrollPercentage } from 'react-scroll-percentage';

const layoutActions = WrappedComponent => {
  class LayoutActions extends React.Component {
    constructor(props) {
      super(props);

      this.timeouts = [];
      this.addTimeout = this.addTimeout.bind(this);
      this.clearTimeouts = this.clearTimeouts.bind(this);

      this.state = {
        enableScroll: false,
        scrollPercentage: 50,
        scrollAction: 'showPopup'
      };

      this.actions = {
        showPopup1: this.showPopup1,
        showPopup2: this.showPopup2
      };
    }

    showPopup1() {
      alert('Popup1');
    }

    showPopup2() {
      alert('Popup2');
    }

    addTimeout(actionName, delay) {
      const action = this.actions[actionName];
      this.timeouts.push(setTimeout(action, delay));
    }

    clearTimeouts() {
      this.timeouts.forEach(clearTimeout);
    }

    onScroll(percentage, inView) {
      const percentValue = Math.ceil(percentage * 100) || Math.floor(percentage * 100);

      if (percentValue > this.state.scrollPercentage && this.state.enableScroll) {
        const action = this.actions[this.state.scrollAction];
        this.setState({ enableScroll: false }, action());
      }
    }

    handleScroll(isEnable, actionName, scrollPercentage) {
      this.setState({ enableScroll: isEnable });
      this.setState({ scrollPercentage: scrollPercentage });
      this.setState({ scrollAction: actionName });
    }

    render() {
      return (
        <ScrollPercentage onChange={(percentage, inView) => {
          this.onScroll(percentage, inView);
        }}>
          <WrappedComponent
            addTimeout={this.addTimeout}
            clearTimeouts={this.clearTimeouts}
            handleScroll={(isEnable, actionName, scrollPercentage) => this.handleScroll(isEnable, actionName, scrollPercentage)}
            {...this.props}
          />
        </ScrollPercentage>
      );
    }

    componentWillUnmount() {
      this.clearTimeouts();
    }
  }

  LayoutActions.propTypes = {
    actions: PropTypes.array
  };

  return LayoutActions;
};

export default layoutActions;
