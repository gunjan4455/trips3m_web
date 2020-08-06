import React from 'react';

import './Header.scss';

const AddToHome = () => (
  <div>
    <input type="checkbox" id="AddToHomeButton" className="add-to-home-button" />
    <label htmlFor="AddToHomeButton">
      <div className="add-to-screen">
        <span className="add-to-home" />
      </div>
      <div className="add-to-home-info" />
    </label>
  </div>
);

export default AddToHome;
