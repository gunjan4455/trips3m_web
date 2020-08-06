const PDM_CATEGORY_HOTEL = 'Hotel';
const PDM_CATEGORY_ITINERARY = 'Itinerary';
const PDM_CATEGORY_INCLUSION = 'Inclusion';
const PDM_CATEGORY_EXPLAINQUOTE = 'ExplainQuote';

const getSelectedPdms = (pdms, category) => {
  if (pdms) {
    switch (category) {
      case PDM_CATEGORY_ITINERARY:
        return pdms.Itinerary;
      case PDM_CATEGORY_HOTEL:
        return pdms.Hotel;
      case PDM_CATEGORY_INCLUSION:
        return pdms.Inclusion;
      case PDM_CATEGORY_EXPLAINQUOTE:
        return pdms.ExplainQuote;
      default:
        return null;
    }
  }

  return null;
};

const getDestinations = (inputDestinations) => {
  const destination = {};
  const destinationNames = [];
  const destinationIds = [];

  if (inputDestinations === null) {
    destination['ids'] = 0;
    destination['names'] = '';
    return destination; //return empty string
  }

  inputDestinations.map((destination) => {
    destinationNames.push(destination.name);
    destinationIds.push(destination.id);
  });

  return {
    'ids': destinationIds[0],
    'names': destinationNames.join(',')
  };
};

export {
  getSelectedPdms,
  getDestinations,
  PDM_CATEGORY_HOTEL,
  PDM_CATEGORY_INCLUSION,
  PDM_CATEGORY_ITINERARY,
  PDM_CATEGORY_EXPLAINQUOTE
};
