import React from 'react';
import PropTypes from 'prop-types';

import LoaderCard from 'modules/shared/loaders/LoaderCard';
import SliderWithTitle from 'modules/shared/SliderWithTitle';

class PlacesToVisit extends React.Component {

  static propTypes = {
    data: PropTypes.object,
    config: PropTypes.object,
    loaded: PropTypes.bool,
    errors: PropTypes.array,
    externalCss: PropTypes.string,
    trackSegmentEvent: PropTypes.func,
    fetchPlacesToVisitData: PropTypes.func
  };

  static defaultProps = {
    data: {},
    config: {
      variant: 'FULL',
      order: 8
    },
    loaded: false,
    externalCss: '',
    trackSegmentEvent: () => {},
    fetchPlacesToVisitData: () => {}
  };

  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.fetchPlacesToVisitData(this.props);
  // }

  // fetchPlacesToVisitData = (props) => {
  //   const { config, fetchPlacesToVisitData } = props;
  //   if (config && config.csr) {
  //     fetchPlacesToVisitData({
  //       destination: layout.metaInfo.destination,
  //       lookupParent: config.lookupParent
  //     });
  //   }
  // };

  trackSegment = (cta, cardId, miscType1, miscId1) => {
    this.props.trackSegmentEvent({
      cta,
      object: cardId ? `Places to visit/${cardId}` : 'Places to visit',
      miscType1,
      miscId1
    });
  };

  render() {
    const { data, config, loaded, externalCss, errors } = this.props;
    if (errors && errors.length) {
      return null;
    }

    if (loaded && (!data.destinationSchemes || !data.destinationSchemes.length)) {
      return null;
    }

    return (
      <div className={externalCss}>
        {
          !loaded
            ? <LoaderCard />
            : (
              data.destinationSchemes && data.destinationSchemes.length
                ? <SliderWithTitle data={data} trackSegment={this.trackSegment} config={config} overflow='unset'/>
                : null
            )
        }
      </div>
    );
  }
}

export default PlacesToVisit;
