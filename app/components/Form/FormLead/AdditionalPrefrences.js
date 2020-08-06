import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

const { parse } = new Parser();

const AdditionalPrefrences = ({ question, input }) => {
  const handleChange = (event) => {
    input.onChange(event.target.value);
  };

  return (
    <div className="row row- additional-prefrences pt15">
      <p className="fw9 mb8">{question.title}</p>
      <textarea
        className="textarea border p15 at_additional_pref"
        placeholder={parse(question.description)}
        name={question.identifier}
        onChange={handleChange}
      />
    </div>
  );
};

AdditionalPrefrences.propTypes = {
  question: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired
};

export default AdditionalPrefrences;
