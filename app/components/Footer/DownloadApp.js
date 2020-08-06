import React from 'react';
import { Link } from 'react-router-dom';

import './DownloadApp.scss';

const DownloadApp = () => (
  <div className='at_downloadAppBanner sbc1 pl8 pr8 pt15 pb15 mb8 text-center'>
    <p className='sfcw m0'>For better deals</p>
    <p className='sfcw m0 fw3 f24'>Download The App</p>
    <div className='row row- pt24 app-store-container'>
      <Link href="https://ad.apsalar.com/api/v1/ad?re=1&a=traveltriangle&i=com.traveltriangle.traveler&ca=App_Install_MS_Homepage_iOS&an=Organic&p=iOS&pl=1&h=6c2098f87dee0f39f950a4796f492432e20f3861" className='mr15 app-store-bt overflowh' rel="nofollow" target="_blank" >
        traveltriangle ios
      </Link>
      <Link href="https://ad.apsalar.com/api/v1/ad?re=1&a=traveltriangle&i=com.traveltriangle.traveller&ca=App_Install_MS_Homepage&an=Organic&p=Android&pl=1&h=e1a717a45305aa3abf6a765df004282d5f4b5f18" className='ml15 google-play-bt overflowh' rel="nofollow" target="_blank">
        traveltriangle google play
      </Link>
    </div>
  </div>
);

export default DownloadApp;
