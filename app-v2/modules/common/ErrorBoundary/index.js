import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import logger from '../../../../app/utils/logger';

const logError = console.error;
const defaultWidth = '100%';
const defaultHeight = '100px';


// todo: move this image to cloudinary
const style = {
  backgroundImage:
    'url(https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png)',
  border: 'solid 2px black',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  maxWidth: '100%'
};

/**
 * ErrorBoundary component used to handle
 * A javaScript error in a part of the UI shouldn’t break the whole app.
 */
class ErrorBoundary extends Component {
  constructor (props) {
    super(props);
    const width = props.width ? props.width : defaultWidth;
    const height = props.height ? props.height : defaultHeight;
    this.state = {
      hasError: false,
      style: Object.assign(
        {
          width,
          height
        },
        style
      )
    };
  }

  componentDidCatch (error, info) {
    this.setState({
      hasError: true
    });

    this.logError({ error, info });
  }

  render () {
    if (this.state.hasError) {
      return (
        <div style={this.state.style} className={this.props.className}>
          {this.props.name && (
            <div className={'message'}>
              {' '}
              Component Failed is {this.props.name}
            </div>
          )}
        </div>
      );
    }
    return this.props.children;
  }

  logError ({ error, info }) {
    // custom error string to use in SENTRY
    let props;
    if (this.props.children) {
      if (this.props.children instanceof Array) {
        props = [];
        this.props.children.forEach(child => {
          props.push(child.props);
        });
      } else if (this.props.children.props) {
        props = this.props.children.props;
      }
    }

    if (props) {
      info.props = props;
    }
    error.message = `Error Boundry ${error.message}`;
    logError({ error, info });
  }
}

//todo: custom validator for width and height

ErrorBoundary.propTypes = {
  /** one or more children elements. */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  /** width for the fallback UI can be in % or px. i.e 20px or 20% */
  width: PropTypes.string.isRequired,
  /** height for the fallback UI only in px. i.e 220px */
  height: PropTypes.string.isRequired,
  /** name of the classes we want to add to default UI i.e */
  className: PropTypes.string,
  /** name of the identifier to be shown in error message i.e Avatar, ChatBox */
  name: PropTypes.string
};

ErrorBoundary.defaultProps = {
  height: '100px',
  className: ''
};

export default ErrorBoundary;
