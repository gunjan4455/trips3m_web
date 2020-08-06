import React from 'react';
import PropTypes from 'prop-types';

import Action from 'amp/helpers/Action';

class QuickLinkNav extends React.Component {
  static propTypes = {
    options: PropTypes.array,
    ScrollLink: PropTypes.func,
    dealsInfo: PropTypes.object,
    location: PropTypes.object,
  };

  static defaultProps = {
    options: [],
    ScrollLink: () => {
    },
    dealsInfo: {},
    location: {}
  };

  render() {
    const { options, dealsInfo, location } = this.props;
    return (
      <div className="customPills">
        <div className="sticky-outer-wrapper">
          <div className="sticky-inner-wrapper">
            <div className="quicklinksContainer flex spaceBetween sbcw ">
              <div className="noBeforeAfter flex alignCenter overflowXscroll">
                <ul className="flex flexFull alignCenter m0 p0 list-reset">
                  {options && options.map((option, i) =>
                    <li key={i}>
                      <Action
                        events={{ tap: [`AMP.scrollTo('id' = ${option.section_name + '-triggerlink'}, position='center')`] }}>
                        {(props) => (
                          <a className="relative f14 fw7 pfc3 p15 block"
                             id={option.section_name} {...props}
                          >
                            {option.title}
                          </a>)
                        }
                      </Action>
                    </li>
                  )}
                </ul>
                {
                  options && options.length && dealsInfo.overview.toLowerCase() !== 'deals' ?
                    <div className="pr15 ml15">
                      <button className="wfull">
                        <div className="relative f14 fw9 btn-pri-large pl15 pr15 pt8 pb8 nowrap">
                          <a href={`/requested_trips/new?mview=true&srcUrl=${location.pathname}`}> Get Quotes </a>
                        </div>
                      </button>
                    </div>
                    : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default QuickLinkNav;
