import React from 'react';
import PropTypes from 'prop-types';




const IWillBook = ({ input }) => {
  const handleChange = (event) => {
    input.onChange(event.target.value);
  };

  return (
    <div className="row row- p15 sbcw">
      <div className="row row-">
        <p className="fw9">I Will Book</p>
        <div className="row row- pt8">
          <div className="row row-8">
            <div className="at_willBookTag col-xs-6 p8">
              <input
                type="radio"
                className="radio-common"
                name="will-book"
                id="willBook1"
                value="202"
                selected={input.value === '202'}
                onChange={handleChange}
              />
              <label htmlFor="willBook1">
                <p>In Next 2-3 Days</p>
              </label>
            </div>
            <div className="at_willBookTag col-xs-6 p8">
              <input
                type="radio"
                className="radio-common"
                name="will-book"
                id="willBook2"
                value="203"
                selected={input.value === '203'}
                onChange={handleChange}
              />
              <label htmlFor="willBook2">
                <p>In This Week</p>
              </label>
            </div>
            <div className="at_willBookTag col-xs-6 p8">
              <input
                type="radio"
                className="radio-common"
                name="will-book"
                id="willBook3"
                value="204"
                selected={input.value === '204'}
                onChange={handleChange}
              />
              <label htmlFor="willBook3">
                <p>In This Month</p>
              </label>
            </div>
            <div className="at_willBookTag col-xs-6 p8">
              <input
                type="radio"
                className="radio-common"
                name="will-book"
                id="willBook4"
                value="205"
                selected={input.value === '205'}
                onChange={handleChange}
              />
              <label htmlFor="willBook4">
                <p>Later Sometime</p>
              </label>
            </div>
            <div className="at_willBookTag col-xs-6 p8">
              <input
                type="radio"
                className="radio-common"
                name="will-book"
                id="willBook5"
                value="256"
                selected={input.value === '256'}
                onChange={handleChange}
              />
              <label htmlFor="willBook5">
                <p>Just Checking Price</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

IWillBook.propTypes = {
  input: PropTypes.object.isRequired
};

export default IWillBook;
