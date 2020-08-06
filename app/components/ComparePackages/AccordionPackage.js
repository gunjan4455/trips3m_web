import React from 'react';
import PropTypes from 'prop-types';
import './ComparePackages.scss';
import Hotels from './Hotels/Hotels';
import InclusionExclusion from './IncExc/InclusionExclusion';
import Itineraries from './Itineraries/Itineraries';
import { DownArrow } from 'helpers/Icon/Icon';


const AccordionPackage = ({ details }) => (
  <div className='accordian'>
    <div className='col-xs-12 p0 relative sbcw accordian-item'>
      <input type="checkbox" name="accordian-main" id="item1" defaultChecked />
        <label htmlFor="item1" className='accordian-tutolo'>Hotels <span className='downSideArrow'><DownArrow className='absolute r15 t15' /></span></label>
      <Hotels hotels={details.hotels} />
    </div>
    <div className='col-xs-12 p0 accordian-item'>
      <input type="checkbox" name="accordian-main" id="item2" />
        <label htmlFor="item2" className='accordian-tutolo'>Inclusions/Exclusions <span className='downSideArrow'><DownArrow /></span></label>
      <InclusionExclusion
        className='accordian-contenido'
        inclusions={details.inclusions}
        uniqueInclusions={details.unique_inclusions}
      />
    </div>
    <div className='col-xs-12 p0 accordian-item'>
      <input type="checkbox" name="accordian-main" id="item3" />
        <label htmlFor="item3" className='accordian-tutolo'>Daywise Itinerary <span className='downSideArrow'><DownArrow className='absolute r15 t15' /></span></label>
      <Itineraries itineraries={details.itineraries} />
    </div>
  </div>
);

AccordionPackage.propTypes = {
  details: PropTypes.object.isRequired
};

export default AccordionPackage;
