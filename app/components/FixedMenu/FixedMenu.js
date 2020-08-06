import React from 'react';
import PropTypes from 'prop-types';

import { ChatIconWhite } from 'helpers/Icon/Icon';
import './FixedMenu.scss';

export const openChatHandler = (e, segment = false) => {
  e.preventDefault();
  if (typeof window !== 'undefined' && window.openMobChat) {
    window.openMobChat(segment);
    const chatIconComp = document.getElementById('FixedMenuCheckBox');
    if (chatIconComp) {
      chatIconComp.checked = false;
    }
  }
};

const FixedMenu = ({ hasBottomFixedBtn }) => {
  return (
    <div className={hasBottomFixedBtn ? 'fixed-menu-container-wbb radius100 fixed r15 z6' : 'fixed-menu-container radius100 fixed r15 z6'}>
      <input type="checkbox" id="FixedMenuCheckBox" className='fixed-menu-button' />
      <label htmlFor="FixedMenuCheckBox">
        <span onClick={(e) => openChatHandler(e, true)} className='fixed-menu-button-icon-container pbc1 radius100 relative'>
          <ChatIconWhite />
        </span>
      </label>
    </div>
  );
};

FixedMenu.defaultProps = {
  hasBottomFixedBtn: false
};

FixedMenu.propTypes = {
  hasBottomFixedBtn: PropTypes.bool
};

export default FixedMenu;
