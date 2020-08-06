import React, { Component } from 'react';
import styled from '@emotion/styled';

import { LookingIcon } from 'helpers/Icon/Icon';

const GIconDiv = styled.div({
  width: '100px',
  height: '105px'
});

class NoRequest extends Component {
  render() {
    return (
      <div className='text-center'>
        <GIconDiv className='relative mlauto mrauto'><LookingIcon /></GIconDiv>
        <h6 className='m0 mt24 f20 fw7'>No requested trips</h6>
        <p className='m0 f14p mt15'>When you request a trip , You will see it’s details here</p>
        <button className='mt64 btn-filled-pri wfull'>Plan My Holiday</button>
      </div>
    );
  }
}

export default NoRequest;

