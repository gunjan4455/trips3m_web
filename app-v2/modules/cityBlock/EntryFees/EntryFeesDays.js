import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import EntryFeesDaysData from './EntryFeesDaysData';
import Heading from 'modules/shared/Heading';
import Overview from 'modules/shared/Overview';

const EntryFees = styled.div({
  '& .tabs-data-main': {
    paddingTop: '15px !important',
    paddinghBottom: '15px !important',
  },
  '& .tabbed-label': {
    width: '50%',
    textAlign: 'center',
  },
  '& input:checked': {
    '.tabbed-data .tabbed-label': {
      background: '#fff',
    },
  }
});

const EntryFeesDays = ({ data }) => (
  <div className="row">
    <div className="col-md-12 sbcw p0 m8 mt0">
      {
        data.title ? <div className="p15 pb0"><Heading title={data.title} type="main-heading" isViewAllHidden={true} /></div> : null
      }
      <EntryFees className="clearfix">
        {data.fees && data.fees.length && data.fees.map((fee, i) => (
          <div className="tabbed" key={i}>
            <input name="tabbed-filters" id={`${i}daySet`} type="radio" defaultChecked={i==0 ? true:false} />
            <section className="tabbed-data">
              <label className="tabbed-label" htmlFor={`${i}daySet`}><p
                className="fw9 m0 f14">{fee.startDay} to {fee.endDay}</p>
              </label>
              <div className="tabs-data-main p15">
                <EntryFeesDaysData {...fee} uniqueId={fee.startDay}/>
              </div>
            </section>
          </div>
        ))}
      </EntryFees>
    </div>
    {
      data && data.description ?
      <div className="col-md-12 sbcw p15 m8 mt0">
        <Heading title={data.title} isViewAllHidden={true} />
        <Overview {...data} />
      </div>
      : null
    }
  </div>
);

EntryFeesDays.propTypes = {
  data: PropTypes.object.isRequired
};

export default EntryFeesDays;
