import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ComparePackages.scss';
import { PackageIcon, CompareIcon2, } from 'helpers/Icon/Icon';
import { setCookie } from 'helpers/FormDataFormatter';


class LoaderFirst extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired
  };

  componentDidMount() {
    setCookie('first_loader_opened', true);
  }

  render() {
    return (
      <div className='containerPopupPackage'>
        <div className='popupPackage relative'>
          <h3 className='f16 fw9 pl15 absolute t15'>Add To Compare</h3>
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
              <span className='spanCircleDotted spanCircleDottedSec'>
                <PackageIcon />
              </span>
            </div>
          </div>
          <h2 className='col-xs-12 mt15 f14 fw4 text-center'>Choose <span className='fw9 f14'>one more package </span> to switch to Compare View.</h2>
          <button
            onClick={this.props.onClose}
            className='col-xs-12 f14 fw4 text-center btnGotIt'
          >Got It</button>
        </div>
      </div>
    );
  }
}


export default LoaderFirst;
