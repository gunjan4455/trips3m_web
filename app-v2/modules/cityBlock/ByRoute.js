import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
const parser = new Parser();
import styled from '@emotion/styled';
import ReadMoreByHeight from 'modules/shared/ReadMoreByHeight';

import { Flights, TaxiCab, Train, Ship, DownArrow } from 'helpers/Icon/Icon';

const Icon = styled.div({
  position: 'relative',
  left: '0',
  top: '0',
  minWidth: '24px',
  maxWidth: '24px',
  height: '24px',
});

const ByRouteBox = styled.div({
  paddingLeft: '35px',
  '&:last-child': {
    paddingBottom: '0',
  },
});

const GReachTypeGrpDiv = styled.div({
  '& .reachTypeItem': {
    flexGrow: '1',
    marginBottom: '15px',
  },
  '& .reachTypeItem:last-child': {
    marginBottom: '0',
  },
  '& .reachTypeItemRadio': {
    display: 'none',
    '& + label + .reachTypeItemRadioData': {
      height: '0',
      margin: '0 !important',
    },
    '&:checked + label + .reachTypeItemRadioData': {
      height: 'auto',
    },
    '&:checked + label .arrowButton': {
      transform: 'rotate(180deg)',
    },
  },
});

const GArrowDownSpan = styled.span({
  width: '30px',
  height: '30px',
  right: '10px',
  top: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
  '& svg': {
    width: '10px !important',
    height: '10px !important',
  },
});

const IconMap = {
  'By Air': <Flights />,
  'By Road': <TaxiCab />,
  'By Train': <Train />,
  'By Sea': <Ship />,
};

const ByRoute = ({ modes }) => (
  <div className="clearfix">
    <GReachTypeGrpDiv>
      { modes && modes.map((mode,i) => (
        <div className="reachTypeItem wfull" key={i}>
          <input name="reachTypeItems" defaultChecked={i === 0} id={`reachTypeItemRadio` + i} type="checkbox" className="reachTypeItemRadio"/>
          <label htmlFor={`reachTypeItemRadio` + i} className="relative flex alignCenter">
            <Icon>{IconMap[mode.name]}</Icon>
            <h3 className="pfc3 f14 flexFull ml8 fw9 pt4">{mode.name}</h3>
            <GArrowDownSpan
                  className="ml8 flex alignCenter justifyCenter z2 arrowButton"><DownArrow/></GArrowDownSpan>
          </label>
          <div className="reachTypeItemRadioData overflowh f14 mb15 dynamicTextInherit">
            <ReadMoreByHeight showTitle={false} content={mode.description} />
          </div>
        </div>
      ))}
    </GReachTypeGrpDiv>
  </div>
);

ByRoute.propTypes = {
  modes : PropTypes.array.isRequired
};

export default ByRoute;
