import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Guide from 'modules/shared/Guide';
import ByRoutes from '../../../modules/cityBlock/ByRoute';
import { capitalizeAndReplaceDash } from 'helpers/parsers';
import { AllTrips } from 'helpers/Icon/Icon';
import Swiper from 'components/Swiper/Swiper';
import { showPopUp } from 'helpers/exitIntent';

const Ul = styled.ul({
  padding: '0',
  margin: '0',
  display: 'flex',
  alignItems: 'flex-start',
  '& li': {
    margin: '0 34px 0 0',
    flexGrow: '1',
    paddingLeft: '0px',
    position: 'relative',
    '&:last-child': {
      marginRight: '0',
    },
  },
});
const Icon = styled.span({
  width: '18px',
  height: '18px',
  '& svg': {
    width: '18px',
    height: '18px',
  }
});

const GHowToReachDiv = styled.div({
  border: '1px solid #d4d4d4',
  margin: '0 auto',
  textAlign: 'left',
});
const SrcToDestList = styled.ul({
  margin: '0',
  padding: '4px 0 0 0',
  overflow: 'hidden',
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

const GHowToIconDiv = styled.div({
  minWidth: '24px',
  maxWidth: '24px',
  height: '24px',
  '& svg': {
    position: 'absolute',
  }
});

const HowToReach = (props) => {
  const { data, location, match,  exitIntent } =  props;
  const { params }  = match;
  return (
    <div className="clearfix">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          How To Reach {capitalizeAndReplaceDash(params)} | How To Reach{" "}
          {params.destination} By Air, Road, Train
        </title>
        <link
          rel="canonical"
          href={`https://traveltriangle.com${location.pathname}`}
        />
      </Helmet>
      <div className="m8 sbcw mt0">
        <Guide
          guide={{
            title: data.title,
            heading: data.heading,
            description: data.description
          }}
        />
        <div id="reactExitIntentImage" className="mkt-mob-exit-intent relative pl8 pr8 mb8" onClick={showPopUp} />
        {data.distance && data.distance.length ? (
          <div className="clearfix p15 pt0">
            <SrcToDestList>
              {data.distance &&
              data.distance.map((place, i) => (
                <li key={i}>
                  <h4>
                    <Link to={place.link}>{place.from}</Link>
                  </h4>
                </li>
              ))}
            </SrcToDestList>
          </div>
        ) : null}
      </div>
      {data &&
      ((data.transportModes && data.transportModes.length) ||
        (data.distance && data.distance.length)) ? (
        <div className="m8 mt0 sbcw p15">
          <div className="mb15">
            <ByRoutes modes={data.transportModes} />
          </div>

          <Swiper
            id="howtoreachSwiper"
            spaceBetween={15}
            slidesPerView="auto"
            ssrAnimation={{ width: 280, height: 105 }}
            rebuildOnUpdate
          >
            {data.distance.map((row, i) => (
              <GHowToReachDiv key={i} className="radius2 p15">
                {row.from ? (
                  <div className="flex mb8 alignCenter">
                    <GHowToIconDiv className="relative mr8 flex alignCenter justifyCenter">
                      <AllTrips />
                    </GHowToIconDiv>
                    {
                      __SERVER__ ?
                        <a href={row.link} className="fw7 f14">
                          {row.from}
                        </a> :
                        <Link to={row.link} className="fw7 f14">
                          {row.from}
                        </Link>
                    }
                  </div>
                ) : null}
                {row.distance ? (
                  <div className="pfc1 fw9 mb8 f24">{row.distance}</div>
                ) : null}
                <div className="flex spaceBetween">
                  <div className="f14">
                    <p className="fw9 mb5">By Air</p>
                    {row.byair || "-"}
                  </div>
                  <div className="f14">
                    <p className="fw9 mb5">By Road</p>
                    {row.byroad || "-"}
                  </div>
                  <div className="f14">
                    <p className="fw9 mb5">By Train</p>
                    {row.bytrain || "-"}
                  </div>
                  {row.bysea ? (
                    <div className="f14">
                      <p className="fw9 mb5">By Sea</p>
                      {row.bysea}
                    </div>
                  ) : null}
                </div>
              </GHowToReachDiv>
            ))}
          </Swiper>
        </div>
      ) : null}
    </div>
  );
};

export default HowToReach;

HowToReach.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  exitIntent: PropTypes.object.isRequired,
};


