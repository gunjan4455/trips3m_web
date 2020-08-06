import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import {Parser} from 'html-to-react';
import { Link } from 'react-router-dom';

import Heading from 'modules/shared/Heading';
import ShowMore from 'modules/shared/ShowMore';
import {Flights, TaxiCab, Train, Ship, DownArrow} from 'helpers/Icon/Icon';

const parser = new Parser();

const SrcToDestList = styled.ul({
  margin: '0',
  padding: '4px 0 0 0',
  '& li': {
    fontSize: '12px',
    lineHeight: '16px',
    borderRadius: '24px',
    padding: '3px 15px',
    display: 'inline-block',
    listStyle: 'none',
    border: '1px solid #d4d4d4',
    margin: '0 4px 4px 0',
  },
});
const ReachTypeGrp = styled.div({
  '& .reachTypeItem': {
    flexGrow: '1',
  },
  '& .reachTypeItem:last-child': {
    marginRight: '0',
  },
  '& .reachTypeItemRadio': {
    display: 'none',
    '& + label + .reachTypeItemRadioData': {
      height: '0',
      margin: '0',
    },
    '&:checked + label + .reachTypeItemRadioData': {
      height: 'auto',
      marginTop: '8px',
    },
    '&:checked + label .arrowButton': {
      transform: 'rotate(180deg)',
    },
  },
});
const ReachIcon = styled.span({
  minWidth: '24px',
  maxWidth: '24px',
  display: 'block',
  height: '20px',
});
const ReachType = styled.div({
  display: 'block',
  position: 'relative',
  width: '100%',
  '& .iconBox': {
    width: '20px',
    height: '20px',
    '& svg': {
      display: 'block',
      maxWidth: '100%',
      width: '20px',
    },
  },
  '& .absolute-website>svg': {
    width: '20px !important',
    height: '12px !important',
  }
});
const ReachTypeData = styled.div({});
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
  'By Air': <Flights/>,
  'By Road': <TaxiCab/>,
  'By Train': <Train/>,
  'By Sea': <Ship/>,
};

const HowToReachTemplate = ({data, location}) => {
  return data.transportModes ?
    <div>
      <Heading data={{
        title: data.title,
        heading: 'Read about the best & quickest routes to save time & money, as suggested by our travelers'
      }}
      />
      <ReachTypeGrp>
        {data.transportModes && data.transportModes.map((mode, i) => (
          <div className="reachTypeItem wfull mb15" key={i}>
            <input name="reachTypeItems" defaultChecked={i === 0} id={`reachTypeItemRadio` + i} type="checkbox" className="reachTypeItemRadio"/>
            <label htmlFor={`reachTypeItemRadio` + i}>
              <ReachType className="flex alignCenter spaceBetween">
                <ReachIcon className="mr15">{IconMap[mode.name]}</ReachIcon>
                <h3 className="pfc3 f14 fw9 flexFull">{mode.name}</h3>
                <GArrowDownSpan
                  className="nblock ml8 flex alignCenter justifyCenter z2 arrowButton"><DownArrow/></GArrowDownSpan>
              </ReachType>
            </label>
            <div className="mt8 f14">
              <ShowMore
                wrapText={parser.parse(mode.description.substring(0, 150))}
                moreText={parser.parse(mode.description.substring(150))}
                showMoreText="Read More"
                showLessText="Read Less"
                appendText="..."
              />
            </div>
          </div>
        ))}
      </ReachTypeGrp>
      <div className="clearfix">
        {data && data.distance && data.distance.length ?
          <SrcToDestList>
            {data.distance.map((row, i) => (
              <li key={i}><h4 className="fw4"><Link to={row.link}>{row.from}</Link></h4></li>
            ))}
          </SrcToDestList> : null
        }
        <div className="readmore-btn text-right mt8">
          <Link to={`${location.pathname.slice(0)}/how-to-reach`}
                className="sfc1 f14 fw7 mt3 at_readmorebtn">
            View Details
          </Link>
        </div>
      </div>
    </div>
    : null;
};

export default HowToReachTemplate;

HowToReachTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};


