import * as segmentUuid from './FormDataFormatter';

const maxUserIdleTime = 1800000; // 30 minutes
let timeoutID;
const setSessionUuid = () => {
  segmentUuid.getSessionUuid(true);
};

const resetSessionUuid = () => {
  setSessionUuid();
};

const startTimer = () => {
  timeoutID = window.setTimeout(resetSessionUuid, maxUserIdleTime);
};

const goActive = () => {
  startTimer();
};

const resetTimer = () => {
  window.clearTimeout(timeoutID);
  goActive();
};

const setupUserInactivityTracking = () => {
  if (typeof document !== 'undefined') {
    document.addEventListener('mousemove', resetTimer, false);
    document.addEventListener('mousedown', resetTimer, false);
    document.addEventListener('keypress', resetTimer, false);
    document.addEventListener('DOMMouseScroll', resetTimer, false);
    document.addEventListener('mousewheel', resetTimer, false);
    document.addEventListener('touchmove', resetTimer, false);
    document.addEventListener('MSPointerMove', resetTimer, false);
    startTimer();
  }
};

export {
  setupUserInactivityTracking,
};
