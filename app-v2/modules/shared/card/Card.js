import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
import { Link } from 'react-router-dom';

import Img from 'components/Common/Img';
import {
  GCardImg,
  GCardDataDiv,
  GUl,
  GCardDataTextDiv,
  GDefaultIconDiv,
  GCardFooterDiv
} from './gCard';
import { MountainIcon } from 'helpers/Icon/Icon';

const parser = new Parser();

const Card = ({ item }) => {
  const linkTarget = item.openInNewTab ? '_self': '_blank';

  const renderChild = () => (
    <div className='clearfix sbcw'>
      <GCardImg className='relative'>
        <Img width={320} height={140} src={item.imageUrl} ikSrc={item.imagekitUrl} alt={item.imageAlt} />
        {item.imageUrl || item.imagekitUrl ? null : (
          <GDefaultIconDiv>
            <MountainIcon />
          </GDefaultIconDiv>
        )}
      </GCardImg>
      <GCardDataDiv>
        <h3 className='ellipsis f14 fw7 m0 mb4'>{item.title}</h3>
        <GCardDataTextDiv className='f12 m0 pfc3 dynamicTextInherit'>
          {parser.parse(item.description)}
        </GCardDataTextDiv>
        <div className="flex justifyEnd">
          <button className='f14 fw7 mt8 sfc1'>Read More</button>
        </div>
        <GCardFooterDiv className='flex mt5'>
          <GUl className='flexFull'>
            {item.labels.map((label, index) => (
              <li className='pfc3' key={index}>
                {label}
              </li>
            ))}
          </GUl>
        </GCardFooterDiv>
      </GCardDataDiv>
    </div>
  );

  return (
    <div>
    {
      __SERVER__ ?
        <a href={item.urlSpotlight} target={linkTarget} className='pfc3 block'>
          { renderChild() }
        </a> :
        <Link to={item.urlSpotlight} href={item.urlSpotlight} target={linkTarget} className='pfc3 block'>
          { renderChild() }
        </Link>
    }
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired
};

Card.defaultProps = {};

export default Card;
