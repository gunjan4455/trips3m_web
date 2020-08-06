import React from 'react';
import PropTypes from 'prop-types';

import AboutText from 'modules/shared/trialist/about/AboutText';
import AccordionExpand from 'modules/shared/trialist/career/AccordionExpand';
import TrialistHeading from 'modules/shared/trialist/TrialistHeading';

const CAREER_LIST = {
  salesAndOperations: 'Sales & Operations',
  development: 'Development',
  technology: 'Development',
  digitalMarketing: 'Digital Marketing'
};

const Career = ({ careers }) => (
  <div>
    <div className="clearfix p24 mb32">
      <div className="mb24 at_heading1">
        <TrialistHeading heading="Solving Holiday Woes" />
      </div>
      <AboutText
        text="Holiday planning is a mix of gathering information from multiple channels,
         talking to several service providers and constantly turning into device to plan
          and pay for small things. Ever thought how relaxed a traveler will be if all
          the answers are provided at one place without any hassle? Welcome to TravelTriangle
        where we are solving real time complex problems and building the biggest holiday
        eco-system."
      />
    </div>

    <div className="clearfix p8 mb32">
      <div className="mb24 at_heading2">
        <TrialistHeading
          heading="Current Openings"
          extraStyle={{ textAlign: 'center' }}
        />
      </div>
      <div className="at_text2">
        {
          careers && Object.keys(careers).map(key => (
            <AccordionExpand
              key={key}
              name={CAREER_LIST[key] || ''}
              list={careers[key]}
            />
          ))
        }
      </div>
    </div>
  </div>
);

Career.propTypes = {
  careers: PropTypes.object.isRequired
};

export default Career;
