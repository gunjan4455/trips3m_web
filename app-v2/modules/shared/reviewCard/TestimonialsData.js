import React from 'react';
import PropTypes from 'prop-types';
import ReadMoreByHeight from 'modules/shared/ReadMoreByHeight';

const TestimonialsData = ({ content }) => (
  <div className="f14">
    <ReadMoreByHeight
      heading='testimonials'
      maxHeight={70}
      content={content}
      showTitle={false}
    />
  </div>
);

TestimonialsData.propTypes = {
  content: PropTypes.string.isRequired
};

export default TestimonialsData;
