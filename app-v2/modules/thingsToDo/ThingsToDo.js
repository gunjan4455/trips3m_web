import React from 'react';
import { PropTypes } from 'prop-types';

import { getFlexObject } from 'helpers/utils';
import LoaderCard from 'modules/shared/loaders/LoaderCard';
import SliderWithTitle from 'modules/shared/SliderWithTitle';

class ThingsToDo extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    layout: PropTypes.object,
    config: PropTypes.object,
    loaded: PropTypes.bool,
    errors: PropTypes.array,
    externalCss: PropTypes.string,
    trackSegmentEvent: PropTypes.func,
    fetchThingsToDoData: PropTypes.func
  };

  static defaultProps = {
    data: {},
    layout: {},
    config: {
      variant: 'FULL',
      order: 8
    },
    externalCss: '',
    loaded: false,
    trackSegmentEvent: () => {},
    fetchThingsToDoData: () => {}
  };

  componentDidMount() {
    this.fetchThingsToDoData(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.layout.metaInfo && prevProps.layout.metaInfo
      && this.props.layout.metaInfo.destination !== prevProps.layout.metaInfo.destination) {
      this.fetchThingsToDoData(this.props);
    }
  }

  fetchThingsToDoData = (props) => {
    const { config, layout, fetchThingsToDoData } = props;
    if (config && config.csr) {
      fetchThingsToDoData({
        destination: layout.metaInfo.destination,
        lookupParent: config.lookupParent
      });
    }
  };

  trackSegment = (cta, cardId, miscType1, miscId1) => {
    this.props.trackSegmentEvent({
      cta,
      object: cardId ? `Things to do/${cardId}` : 'Things to do',
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
        <div className={`clearfix container pl0 pr0`}
             style={getFlexObject(config.variant, config.order)}>
          {
            !loaded
              ? <LoaderCard />
              : (
                data.destinationSchemes && data.destinationSchemes.length
                  ? <SliderWithTitle data={data} trackSegment={this.trackSegment} config={config} overflow='scroll' />
                  : null
              )
          }
        </div>
      </div>);
  }
}

export default ThingsToDo;
