import React from 'react';
import PropTypes from 'prop-types';

import { trackSegment } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';
import QuoteList from 'modules/quote/compare/list';
import CompareQuotes from 'modules/quote/compare/quotes';
import Roster from 'modules/roster';
import { useQuery } from 'containers/Listing/parseFilters';

const QcpAsync = ({ location, goBack }) => {
  const query = useQuery(location.search);
  const quoteIds = query.quoteIds;

  const trackSegmentEvent = (data = {}) => {
    rescue(() => {
      trackSegment({
        event: data.event,
        category: data.category || 'QCP',
        section: data.section || '',
        object: data.object,
        cta: data.cta,
        misc_id_1: data.miscId1,
        misc_type_1: data.miscType1,
        misc_id_2: data.miscId2,
        misc_type_2: data.miscType2,
      });
    });
  };

  return (
    <div>
      <Roster timeout={3000} />
      {
        quoteIds && quoteIds.length === 2
          ? <CompareQuotes quoteIds={quoteIds} trackSegment={trackSegmentEvent} />
          : <QuoteList trackSegment={trackSegmentEvent} />
      }
    </div>
  );
};

QcpAsync.propTypes = {
  location: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired
};

export default QcpAsync;
