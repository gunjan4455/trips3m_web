import React from 'react';
import PropTypes from 'prop-types';




const TourTypes = ({ input }) => {
  const handleChange = (event) => {
    input.onChange(event.target.value);
  };
  return (
    <div className="row row- p15 sbcw mb8">
      <div className="row row-">
        <p className="fw9">Type Of Tour</p>
        <div className="row row- pt8">
          <div className="row row-8">
            <div className="col-xs-6 p8">
              <input
                type="radio"
                className="radio-common"
                name="tour-type"
                id="tourtype1"
                value="504"
                selected={input.value === '504'}
                onChange={handleChange}
              />
              <label htmlFor="tourtype1">
                <p>Honeymoon</p>
              </label>
            </div>
            <div className="col-xs-6 p8">
              <input
                type="radio"
                className="radio-common"
                name="tour-type"
                id="tourtype2"
                value="505"
                selected={input.value === '505'}
                onChange={handleChange}
              />
              <label htmlFor="tourtype2">
                <p>Family</p>
              </label>
            </div>
            <div className="col-xs-6 p8">
              <input
                type="radio"
                className="radio-common"
                name="tour-type"
                id="tourtype3"
                value="506"
                selected={input.value === '506'}
                onChange={handleChange}
              />
              <label htmlFor="tourtype3">
                <p>Adventure</p>
              </label>
            </div>
            <div className="col-xs-6 p8">
              <input
                type="radio"
                className="radio-common"
                name="tour-type"
                id="tourtype4"
                value="507"
                selected={input.value === '507'}
                onChange={handleChange}
              />
              <label htmlFor="tourtype4">
                <p>Offbeat</p>
              </label>
            </div>
            <div className="col-xs-6 p8">
              <input
                type="radio"
                className="radio-common"
                name="tour-type"
                id="tourtype5"
                value="508"
                selected={input.value === '508'}
                onChange={handleChange}
              />
              <label htmlFor="tourtype5">
                <p>Wildlife</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


TourTypes.propTypes = {
  input: PropTypes.object.isRequired
};

export default TourTypes;
