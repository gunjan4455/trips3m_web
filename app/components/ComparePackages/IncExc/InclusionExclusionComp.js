import React from 'react';
import PropTypes from 'prop-types';
import '../ComparePackages.scss';


const InclusionExclusionComp = ({ included, uniqueInclusion }) => {
  const bulletType = included ? 'bulletGreen' : 'bulletPink';
  const isStrikeThrough = included ? '' : 'tdl';
  return (
    <div className='col-xs-6'>
      <ul className='list-style-no p0'>
        <li className={`pl8 pr8 ${isStrikeThrough} ptb18`}>
          <span className={`${bulletType}`} /> {uniqueInclusion}
        </li>
      </ul>
    </div>
  );
};

InclusionExclusionComp.propTypes = {
  included: PropTypes.bool.isRequired,
  uniqueInclusion: PropTypes.string.isRequired
};


export default InclusionExclusionComp;
