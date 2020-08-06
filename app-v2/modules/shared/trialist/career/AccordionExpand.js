import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

const GAccordianDiv = styled.div({
  '& .Collapsible__trigger': {
    padding: '15px',
    display: 'block',
    position: 'relative',

    '&:after': {
      position: 'absolute',
      content: ' ',
      margin: 'auto',
      width: '8px',
      height: '8px',
      background: 'rgba(0,0,0,0)',
      border: '1px solid #3e3e3e',
      borderTop: '0',
      top: '7px',
      bottom: '10px',
      borderRight: '0',
      right: '12px',
      transform: 'rotate(-45deg)',


    },
  },
  '& .is-open': {
    color: '#0c9a8d',

    '&:after': {
      transform: 'rotate(135deg)',
      top: '14px',
    }
  }
});

const AccordionHiddenBoxChild = styled.div({
  border: '1px solid #e4e4e4',
});

const OpenRolesCount = styled.p({
  top: '18px',
  right: '50px',
});

const ListShowMain = styled.p({
  lineHeight: '26px',
});

const AccordionExpand = ({ list, name }) => {
  return (
    list && list.length && name ?
      <GAccordianDiv className="clearfix relative border at_accordionExpand">
        <div className="clearfix relative">
          <OpenRolesCount className="m0 sfc1 f12 absolute">{list.length} Open Roles</OpenRolesCount>
          <Collapsible trigger={name} className="drop_down">
            <div className="clearfix relative ">
              {
                list.map(job => (
                  <div
                    key={`${name}_${job.id}`}
                    className="clearfix"
                  >
                    <AccordionHiddenBoxChild className="clearfix p15">
                      <div className="col-xs-12 row">
                        <p className="f16a sfc6 fw9 m0 pb8">{job.subCategory}</p>
                        <ListShowMain className="f14 m0">
                          {
                            job.rolesAndResponsibities
                              .replace(/●/g, ' ')
                              .replace(/•/g, ' ')
                          }
                        </ListShowMain>
                      </div>
                      <div className="col-xs-12 p0 pt15">
                        <Link
                          to={`/career/${job.id}`}
                          className="btn-pri wfull fright radius2 pt8 pb8"
                        >
                          View Details
                        </Link>
                      </div>
                    </AccordionHiddenBoxChild>
                  </div>
                ))
              }
            </div>
          </Collapsible>
        </div>
      </GAccordianDiv> : null
  );
};

AccordionExpand.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default AccordionExpand;
