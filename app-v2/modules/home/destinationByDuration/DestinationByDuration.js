import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import _isEmpty from 'lodash/isEmpty';

import { LookingIcon } from 'helpers/Icon/Icon';
import SlideItem from './SlideItem';
import Swiper from 'modules/shared/Swiper';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import Img from 'components/Common/Img';
import config from 'appConfig';

import styles from './style.cm.scss';

class DestinationByDuration extends Component {
  static defaultProps = {
    destinations: {},
    destination: '',
    trackSegmentEvent: () => {
    }
  };

  static propTypes = {
    destinations: PropTypes.object,
    destination: PropTypes.string,
    trackSegmentEvent: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = this.computeInitialState();
  }

  computeInitialState() {
    const { destinations, destination } = this.props;
    const initState = {
      durations: [],
      selectedFilter: {
        isDomestic: false,
        isDefault: true
      },
      slider: [],
      selectedDuration: '4-6',
      showLoader: false
    };
    if (!_isEmpty(destinations)) {
      let computedState, filteredDest;
      if (['international', 'domestic'].indexOf(destination) !== -1) {
        //In case destination type filter selected from Container
        const isDomestic = destination === 'domestic';
        computedState = {
          selectedFilter: {
            ...initState.selectedFilter,
            isDomestic,
            isDefault: false
          }
        };
        filteredDest = this.computeDestination(computedState.selectedFilter);
        computedState = { ...initState, ...computedState, ...filteredDest };
      } else {
        //selects default destination filter
        filteredDest = this.computeDestination(initState.selectedFilter);
        computedState = { ...initState, ...filteredDest };
      }
      return computedState;
    } else {
      //returns default state in case there are no destinations present
      return initState;
    }
  }

  computeDestination(selectedFilter) {
    //retuns destinations and duration based on selected trip type
    const { destinations } = this.props;
    const { isDefault, isDomestic } = selectedFilter;
    let duration;
    let defaultDuration;
    if (isDefault) {
      defaultDuration = this.fetchDuration(destinations.default);
      duration = destinations.default.durations;
    } else if (isDomestic) {
      defaultDuration = this.fetchDuration(destinations.domestic);
      duration = destinations.domestic.durations;
    } else {
      defaultDuration = this.fetchDuration(destinations.international);
      duration = destinations.international.durations;
    }

    return {
      durations: duration,
      slider: defaultDuration.destinations,
      selectedDuration: defaultDuration.value
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.destinations !== prevProps.destinations || this.props.destination !== prevProps.destination) {
      const state = this.computeInitialState();
      this.setState({ ...state });
    }
  }

  static renderLoader(showLoader) {
    return showLoader ?
      <div className={`text-center relative ${styles.loader}`}>
        <Img
          src={`${config.assets.images}/public-product/mkt/dot-loader.gif`}
          className="absolute-center" />
      </div> :
      <div className="p48 sbc5">
        <div className={`relative block text-center ${styles.icon}`}>
          <LookingIcon />
        </div>
        <p className="f16p fw9 mt15 mb0 text-center">
          Couldn't find any destination. Try other duration.
        </p>
      </div>;
  }

  changeFilter = (filter) => {
    const filterVal = filter;
    const isDomestic = !filter.title.includes('International');
    this.setState({ showLoader: true });
    setTimeout(() => {
      this.setState({
        selectedFilter: { isDomestic, isDefault: false }, showLoader: false
      }, () => {
        this.selectFilter(filterVal);
      });
    }, 700);
    this.props.trackSegmentEvent({
      event: ORGANISM_CLICKED,
      section: 'Explore Bestselling Packages',
      object: 'Destination Type',
      cta: isDomestic ? 'Domestic' : 'International'
    });

  };

  fetchDuration = (selected) => selected.durations.find((duration) => (duration.value === (this.state || { selectedDuration: '4-6' }).selectedDuration));

  selectFilter = (filter) => {
    const { destinations } = this.props;
    if (filter && !_isEmpty(destinations)) {
      const { selectedFilter } = this.state;
      const computedState = this.computeDestination(selectedFilter);
      this.setState({
        ...computedState
      });
    }
  };

  renderInput = (data) => {
    const { selectedFilter: { isDefault, isDomestic } } = this.state;
    const label = data.title.includes('International') ? 'International' : 'Within India ';
    const domInput = data.key == 'domestic';
    const isChecked = !isDefault && (domInput ? isDomestic : !isDomestic);
    return (
      <div>
        <input
          type="radio"
          name='packageByDestination'
          className="input-chips at_indiafilter"
          id={data.title}
          value={label}
          checked={isChecked}
          onChange={(e) => this.changeFilter(data, e)}
        />
        <label htmlFor={data.title}>{label}</label>
      </div>
    );
  };

  changeDuration = (set) => {
    this.setState({ showLoader: true });
    setTimeout(() => {
      this.setState({ selectedDuration: set.value, slider: set.destinations, showLoader: false });
    }, 700);
    const cta = `${set.value.replace('-', '_to_')}_days`;
    this.props.trackSegmentEvent({
      event: ORGANISM_CLICKED,
      section: 'Explore Bestselling Packages',
      object: 'Trip days',
      cta
    });
  };

  renderCards = ({ slider, selectedDuration }) => {
    return slider.reduce((accumulator, slide, index) => {
      if (slide.packageCount > 0) {
        return accumulator.concat(<div key={index}>
          <SlideItem {...slide} link={`/${slide.link}?days[]=${selectedDuration}`} />
        </div>);
      }
      return accumulator;
    }, []);
  };

  renderSliderOrLoader = ({ slider, showLoader, selectedDuration }) => {
    const cards = this.renderCards({ slider, selectedDuration });
    return (
      !showLoader && cards.length ?
        <Swiper
          ssrAnimation={{ width: 120, height: 150 }}
          slideClass="slide"
          spaceBetween={15}
          slidesOffsetBefore={24}
          slidesOffsetAfter={24}
          id='packageByDuration'
          slidesPerView="auto"
          isSmallSwiper={true}
          //key={selectedDuration + domestic + international}
        >
          {cards}
        </Swiper> :
        DestinationByDuration.renderLoader(showLoader)
    );
  };

  render() {
    const { destinations } = this.props;
    const {
      durations, selectedDuration, slider, selectedFilter: { domestic, international },
      showLoader
    } = this.state;
    return (
      <div>
        {
          destinations && !_isEmpty(destinations) ?
            <Element name="section__allpackages" className="clearfix" id="trips_by_duration">
              <div className="pl24 pr24">
                <p className="f20 fw9 mb24">Explore best selling packages</p>
                <div className="flex spaceBetween at_packages_tabGroup">
                  <div className="flexFull pr8 at_packages_tab">
                    {this.renderInput(destinations.international)}
                  </div>
                  <div className="flexFull pl8 at_packages_tab">
                    {this.renderInput(destinations.domestic)}
                  </div>
                </div>
              </div>
              <div className="pt32 pb24">
                <div className="flex overflowXscroll">
                  {
                    durations.map((set, i) => (
                      <div key={i} className={`mr8 ${i < 1 ? 'pl24' : ''} ${durations.length-1 === i ? 'pr24' : ''}`}>
                        <input
                          type="radio"
                          className="input-chips chips_sm"
                          name="destination_duration"//verify
                          id={set.title}
                          checked={set.value === selectedDuration}
                          onChange={() => this.changeDuration(set)}
                        />
                        <label htmlFor={set.title}>{set.title}</label>
                      </div>
                    ))
                  }
                </div>
              </div>
              {
                this.renderSliderOrLoader({ slider, showLoader, selectedDuration, domestic, international })
              }
            </Element> : null
        }
      </div>
    );
  }
}

export default DestinationByDuration;


