import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopTagLinks = ({ title,  tags }) => (
  <div>
    <p className="m0 pfc3 f16 fw7 mb15">{title}</p>
    {
      tags.map(tag =>
        <Link
          className="btn-rounded-small text-capitalize mr8 mb8 f14"
          target="_blank"
          key={tag.id}
          to={tag.pathUrl}>
          {tag.name}
        </Link>
      )
    }
  </div>
);

TopTagLinks.propTypes = {
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default TopTagLinks;
