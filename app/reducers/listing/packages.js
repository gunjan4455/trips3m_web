import {
  LISTING_PACKAGES_LOAD, LISTING_PACKAGES_LOAD_FAIL, LISTING_PACKAGES_LOAD_SUCCESS,
  LISTING_LOAD_MORE_SUCCESS, TESTIMONIALS_LOAD_SUCCESS, SUBMITTED_FOR_COMPARE
}
from '../../actionConstants';

const initialState = {
  loaded: false,
  list: [],
  total: null,
  defaultPackagesToDisplay: 10,
  packagesToDisplay: 10,
  resources: null,
  currentPage: 1,
  packages: [],
  testimonials: undefined,
  submitted: false
};

const modifyFilterExperience = experiences => experiences.map(experience => ({
  ...experience,
  value: experience.id,
  title: experience.name
}));

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LISTING_PACKAGES_LOAD:
      return {
        ...state,
        loading: true,
      };
    case LISTING_PACKAGES_LOAD_SUCCESS: {
      const data = action.result.data;
      return {
        ...state,
        loading: false,
        loaded: true,
        list: data.packages,
        total: data.total_entries,
        startingPrice: data.package_starting_price,
        metaTags: data.meta_tags,
        currentPage: 1,
        packagesToDisplay: state.defaultPackagesToDisplay,
        destinationName: data.destination_name,
        error: null,
        filterCities: data.filter_cities,
        filterInclusions: data.filter_inclusions,
        filterDestinationActivities: modifyFilterExperience(data.filter_location_experiences),
        isMultiDestination: data.is_multi_destination,
        isCity: data.is_city,
        multiDestinationTexts: data.multi_destination_texts,
        testimonials: data.testimonials,
        footerSection: data.footer_section,
        breadcrumbs: data.breadcrumbs,
        faqs: data.faqs,
        similarLiveCities: data.similar_live_cities,
        allPackageLink: data.all_package_link,
        bannerHeadline: data.banner_headline,
        filterCategory: data.filter_category,
        formToLocation: data.form_to_location,
        dynamicPlpPage: data.dynamic_plp_page,
        banner: data.banner_image,
        schemaAttributes: data.schema_attributes,
        rating: data.rating,
        reviews: data.reviews,
        richText: data.rich_text,
      };
    }
    case LISTING_PACKAGES_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    case LISTING_LOAD_MORE_SUCCESS: {
      let remainingPackages = state.total - state.packagesToDisplay;
      if (remainingPackages < 0) {
        remainingPackages = 0;
      }

      return {
        ...state,
        loading: false,
        loaded: true,
        list: [...state.list, ...action.result.data.packages],
        currentPage: state.currentPage + 1,
        packagesToDisplay: state.packagesToDisplay +
          Math.min(state.defaultPackagesToDisplay, remainingPackages)
      };
    }
    case TESTIMONIALS_LOAD_SUCCESS:
      if (action.page === 'listing') {
        return {
          ...state,
          testimonials: action.result.data && action.result.data.testimonials,
        };
      }
      return state;
    case SUBMITTED_FOR_COMPARE: {
      return { ...state, submitted: action.submitted };
    }
    default:
      return state;
  }
}
