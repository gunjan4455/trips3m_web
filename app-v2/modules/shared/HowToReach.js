import React from 'react';
import styled from '@emotion/styled';

import Heading from 'modules/shared/Heading';
import { Link } from 'react-router-dom';

import { Flights, Deluzeacbus, HouseBoat,  } from 'helpers/Icon/Icon';

const SrcToDestList = styled.ul({
  margin: '0',
  padding: '4px 0 0 0',
  height: '52px',
  overflow: 'hidden',
  '& li': {
    fontSize: '12px',
    lineHeight: '16px',
    borderRadius: '24px',
    padding: '3px 16px',
    display: 'inline-block',
    listStyle: 'none',
    border: '1px solid #d4d4d4',
    margin: '0 4px 4px 0',
  },
});
const ReachIcon = styled.span({
  width: '20px',
  display: 'block',
  height: '20px',
});
const ReachType = styled.div({
  display: 'block',
  paddingLeft: '28px !important',
  paddingBottom: '15px',
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

const HowToReach = () => (
  <div className="container pl0 pr0 pt15 pb48">

    <div className="row">
      <div className="col-sm-12 mb24">
        <Heading data={{
          title: "How To Reach Kerala",
          heading: "Read about the best & quickest routes to save time & money, as suggested by our travelers"}}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3">
        <ReachType className="col-xs-3 pr8">
          <ReachIcon className="absolute l0 t5"><Flights /></ReachIcon>
          <h3 className="pfc3 f14 fw7 pt8">By Air</h3>
        </ReachType>
        <p>Kerala is the second state in india to have four international airports, namely Trivandrum. Tourist places</p>
      </div>
      <div className="col-sm-3">
        <ReachType className="col-xs-3 pr8">
          <ReachIcon className="absolute l0 t5"><Deluzeacbus /></ReachIcon>
          <h3 className="pfc3 f14 fw7 pt8">By Road</h3>
        </ReachType>
        <p>Kerala is the second state in india to have four international airports, namely Trivandrum. Tourist places</p>
      </div>
      <div className="col-sm-3">
        <ReachType className="col-xs-3 pr8">
          <ReachIcon className="absolute l0 t5"><Deluzeacbus /></ReachIcon>
          <h3 className="pfc3 f14 fw7 pt8">By Train</h3>
        </ReachType>
        <p>Kerala is the second state in india to have four international airports, namely Trivandrum. Tourist places</p>
      </div>
      <div className="col-sm-3">
        <ReachType className="col-xs-3 pr8">
          <ReachIcon className="absolute l0 t5"><HouseBoat /></ReachIcon>
          <h3 className="pfc3 f14 fw7 pt8">By Sea</h3>
        </ReachType>
        <p>Kerala is the second state in india to have four international airports, namely Trivandrum. Tourist places</p>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-10">
        <SrcToDestList>
          <li><a href="#">New Delhi to Kerala</a></li>
          <li><a href="#">Mumbai to Kerala</a></li>
          <li><a href="#">Kolkata to Kerala</a></li>
          <li><a href="#">Chennai to Kerala</a></li>
          <li><a href="#">Bengaluru to Kerala</a></li>
        </SrcToDestList>
      </div>
      <div className="col-sm-2 pr0 pl0 text-right">
        <div className="readmore-btn">
          <Link target="_blank" className="link-sec f14 fw7 at_readmorebtn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HowToReach;
