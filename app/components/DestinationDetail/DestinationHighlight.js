/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  BlueDownArrow
} from 'helpers/Icon/Icon';
// import './DestinationType.scss';
import PropTypes from 'prop-types';
import ShowMore from '../Generic/ShowMore';

const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

function breakDescription(description) {
  return {
    wrapText: htmlToReactParser.parse(description.substring(0, description.length/2)),
    moreText: htmlToReactParser.parse(description.substring(description.length/2, description.length))
  }
}

const DestinationHighlight = ({ name, description, isVisaRequired }) => (
  <div className='row row- p8'>
    <div className='row row- pb15'>
      <h2 className='f16 fw9 pb15'>{name}</h2>
      <div className='mb8 text-justify'>
        <ShowMore {...breakDescription(description)} />
      </div>
    </div>
    <p className='pt15 pb8'>
      <span className='fw9'>Visa  On Arrival:</span>
      {(isVisaRequired) ? "Visa Required" : "Visa Not Requied"}
    </p>
  </div>
);

DestinationHighlight.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isVisaRequired: PropTypes.bool

};
DestinationHighlight.defaultProps = {
  isVisaRequired: false
}
export default DestinationHighlight;
