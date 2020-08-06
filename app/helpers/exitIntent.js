import { getPageName, getCookie } from "./FormDataFormatter";
import config, { sentryKey } from 'appConfig';
import { trackSegment } from 'actions/segmentEvents';

export const hidePopup = (e) => {
  if (e) {
    e.stopPropagation();
  }
  document.getElementById('bg-mask-ei').classList.remove('show');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].classList.remove('mob-exit-popup');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].addEventListener('click', showPopUp);
};


export const showPopUp = () => {
  document.getElementById('bg-mask-ei').classList.add('show');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].classList.add('mob-exit-popup');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].removeEventListener('click', showPopUp);
};

export const renderExitIntent = () => {
  if (window.ReactExitIntentImage) {
    ReactExitIntentImage.render({isPublicProduct: true});
    window.isLeadPopupOpened = false;
    setTimeout(function(){
      window.isLeadPopupOpened = false;
      const exitPopup = document.getElementsByClassName('mkt-mob-exit-intent')[0];
      if (exitPopup) {
        exitPopup.addEventListener('click', showPopUp);
      }
      const closeBtn = document.getElementsByClassName('close-popup')[0];
      if (closeBtn) {
        const closeMobBtn = closeBtn.cloneNode();
        closeMobBtn.innerHTML = "&#215;";
        closeMobBtn.classList.add('close-mob-btn');
        closeBtn.classList.add('hide');
        closeMobBtn.addEventListener('click', function(e){
          e.preventDefault();
          e.stopPropagation();
          hidePopup(e);
        });
        closeBtn.parentNode.insertBefore(closeMobBtn, closeBtn);
      }
    }, 1000);
  }
};

export const initializeExitIntent = () => {
  const existing = document.getElementById('exit-intent-script-tag');
  if(existing && document.getElementById('reactExitIntentImage')){
    renderExitIntent();
    return;
  }

  const el = document.createElement('script');
  el.id= 'exit-intent-script-tag';
  el.src = `${config.assets.js}/public-product/trips3m-imageintent-amp-bitedata.js`;
  el.defer = true;
  el.onload = () => {
    console.log('script loaded');
    if (typeof window !== 'undefined' && typeof window.Raven !== 'undefined' &&
      sentryKey) {
      //todo: ignore errors for the chat connection
      window.Raven.config(sentryKey, {
        shouldSendCallback(data) {
          return !/MSIE/.test(window.navigator.userAgent);
        },
        ignoreErrors: [
          "Uncaught, unspecified error event."
        ]
      }).install();
    }
    if (document.getElementById('reactExitIntentImage')) {
      renderExitIntent();
    }
  };
  document.body.appendChild(el);
};
