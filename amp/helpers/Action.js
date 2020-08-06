import React  from 'react';
import PropTypes from 'prop-types';

export const ON_ATTRIBUTE = 'customAmpEvent';
const Action = ({ children, events, }) => {
  const eventString = Object.entries(events).reduce((entireEventString, [eventName, eventActions], eventIndex) => {
    const actionString = eventActions.reduce((entireActionString, nextAction, actionIndex) => `${entireActionString}${actionIndex > 0 ? ',' : ''}${nextAction}`, '');

    return `${entireEventString}${eventIndex > 0 ? ';' : ''}${eventName}:${actionString}`;
  }, '');
  return children({ [ON_ATTRIBUTE]: eventString });
};

Action.propTypes = {
  children: PropTypes.func.isRequired,
  events: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string.isRequired).isRequired).isRequired,
};

export default Action;
