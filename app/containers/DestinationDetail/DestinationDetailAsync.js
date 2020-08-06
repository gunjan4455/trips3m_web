import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import HeaderCommon from 'modules/header/HeaderCommon';
import { default as HeaderTitle } from 'modules/header/HeaderTitle';
import DestinationBanner from '../../components/DestinationDetail/DestinationBanner';
import DestinationPriceDaysCard from '../../components/DestinationDetail/DestinationPriceDaysCard';
import DestinationData from '../../components/DestinationDetail/DestinationData';
import FormOneCTA from '../../components/Form/FormLead/FormOneCTA';
import { getLeadFunnelName, LEAD_FUNNEL, trackSegment } from 'actions/segmentEvents';
import { getRandomString } from 'helpers/FormDataFormatter';

class DestinationDetailAsync extends Component {
  static propTypes = {
    destinationDetail: PropTypes.object.isRequired,
    setActiveDetailsTab: PropTypes.func.isRequired,
    activeTab: PropTypes.string,
  };

  static defaultProps = {
    activeTab: null,
  };

  renderHelmet(pageLinks) {
    return (<Helmet>
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#68c4c1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link
        rel="canonical"
        href={`https://traveltriangle.com/travel-to/${pageLinks.link}`}
      />
      <meta property="al:android:url" content={`tts://traveltriangle.com/travel-to/${pageLinks.link}`} />
      <meta property="al:android:package" content="com.traveltriangle.traveller" />
      <meta property="al:android:app_name" content="TravelTriangle-Holiday Package" />
      <meta property="og:title" content={pageLinks.link} />
      <meta property="og:type" content="website" />
      <meta property="al:ios:url" content={`https://traveltriangle.com/travel-to/${pageLinks.link}`} />
      <meta property="al:ios:app_store_id" content="1152358066" />
      <meta property="al:ios:app_name" content="TravelTriangle" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta property="fb:app_id" content="168534953203541" />
      <meta name="category" content={`Destination:${pageLinks.title}`} />
      <title>{pageLinks.title}</title>
    </Helmet>);
  }

  render() {
    const destinationDetail = this.props.destinationDetail;

    const destinationPriceAndDays = {
      minBudget: destinationDetail.destination.min_budget,
      maxBudget: destinationDetail.destination.max_budget,
      minDays: destinationDetail.destination.min_days,
      maxDays: destinationDetail.destination.max_days,
      personLimit: destinationDetail.destination.person_limit
    };

    const destinationDetails = {
      placeDescription: destinationDetail.destination.description,
      placeName: destinationDetail.destination.name,
      hotelDetails: destinationDetail.destination.hotel_details,
      isVisa: destinationDetail.destination.is_visa_required,
      howToReach: destinationDetail.destination.passage_details || {}
    };

    const destinationBanner = {
      bestTimeToVisit: destinationDetail.destination.best_time_to_visit,
      imageUrl: destinationDetail.destination.image,
      imagekitUrl: destinationDetail.destination.imagekit_url
    };

    const ctaText = 'Build Your Own Packages';
    const section = 'Bottom Bar';
    const object = `Destination/${destinationDetail.destination.id}`;
    const trackClickEvent = () => {
      return trackSegment({
        funnel_step: 1,
        section,
        cta: ctaText,
        category: object,
        object,
        event: LEAD_FUNNEL,
        label: getLeadFunnelName(1),
        destination_id: destinationDetail.destination.id,
        destination_list: destinationDetail.destination.name,
        funnel_uuid:  getRandomString(20)
      });
    };

    const pageLinks = {};
    try {
      pageLinks.title = destinationDetail.destination.name;
      pageLinks.link = `${destinationDetail.destination.id}-${destinationDetail.destination.name}`;
    } catch (e) {
      pageLinks.title = 'Holiday packages';
      pageLinks.link = '173-punjab';
    }

    return (
      <div className="row row- pb64">
        {this.renderHelmet(pageLinks)}
        <HeaderCommon />
        <HeaderTitle title={destinationDetail.destination.name} />
        <DestinationBanner {...destinationBanner} />
        <div className="row row- p8 sbc5">
          <DestinationPriceDaysCard {...destinationPriceAndDays} />
        </div>
        <div className="row row- p8 sbc5">
          <DestinationData
            setActiveDetailsTab={this.props.setActiveDetailsTab}
            activeTab={this.props.activeTab}
            {...destinationDetails}
          />
        </div>
        <div className="row row- p8 sbcw z4 fixed b0 wfull l0 bs4">
          <FormOneCTA
            rtProps={{
              to_loc: destinationDetail.destination.name,
            }}
            clickHandler={trackClickEvent}
          >
            <div className="btn-filled-pri-large wfull pl8 pr8">
              <div className="wave" />
              {ctaText}
            </div>
          </FormOneCTA>
        </div>
      </div>
    );
  }
}

export default DestinationDetailAsync;
