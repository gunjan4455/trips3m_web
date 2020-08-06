import React from 'react';

import './ComparePackages.scss';
import { PackageIcon, CompareIcon2, } from 'helpers/Icon/Icon';


const LoaderSecond = () => (
  <div className='containerPopupPackage'>
    <div className='popupPackage relative'>
      <div className='divCombinContainer text-center pt15'>
        <div className='divSpanPackageBox fleft mr8'>
          <span className='spanCircleDotted'>
            <PackageIcon />
          </span>
        </div>
        <div className='divSpanPackageBox fleft mr8 mt15'>
          <span className='compare-popup-icon'>
            <CompareIcon2 />
          </span>
        </div>
        <div className='divSpanPackageBox fleft'>
          <span className='spanCircleDotted'>
            <PackageIcon />
          </span>
        </div>
      </div>
      <h2 className='col-xs-12 mt15 f14 text-center'>Now we are going to Compare View.</h2>
    </div>
  </div>
);

export default LoaderSecond;
