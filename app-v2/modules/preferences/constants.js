export const HotelCustomizationDetail = {
  required: {
    id: 22,
    label: 'hotel_required',
  },
  category: {
    id: 2,
    label: 'hotel_category',
  },
};

export const FlightCustomizationDetail = {
  id: 23,
  label: 'flight_required',
};

export const CabCustomizationDetail = {
  required: {
    id: 24,
    label: 'cab_required',
  },
  questions: {
    id: 3,
    label: 'cabs',
  },
  domesticDestinationOptionId: 12,
};

export const LocalAttractionCustomizationDetail = {
  id: 25,
  label: 'local_attractions',
};

export const BookTimeCustomizationDetail = {
  id: 43,
  label: 'booking_time',
};

export const ChildCustomizationDetail = {
  id: 7,
  label: 'children_age',
};

export const requestDetailsTitleKeyMap = {
  from_loc: 'Departure City',
  to_loc: 'Destination',
  start_date: 'Departure Date',
  duration: 'Duration',
  travelers: 'Travelers',
};

export const contactDetailsTitleKeyMap = {
  email: 'Email ID',
  phone_no: 'Phone Number',
};

export const preferencesDetailsTitleKeyMap = {
  hotels: 'Hotels',
  flights: 'Flights',
  budget: 'Budget Per Person',
  cabs: 'Cabs',
  AddPrefs: 'Additional Preferences',
};

export const customizationTypes = {
  PICKER: 'single_value',
  MULTI_BUTTONS: 'multi_value',
};

export const HotelRequiredIds = {
  REQUIRED: 95,
  NOT_REQUIRED: 96,
};

export const handledCustomizations = {
  cities: 1,
  boolean_headings: 1,
  attractions: 1,
  other: 1,
  itinerary: 1,
};

export const FixedCustomization = {
  FlightCustomization: FlightCustomizationDetail.id,
  HotelCustomizationReq: HotelCustomizationDetail.required.id,
  HotelCustomizationCategories: HotelCustomizationDetail.category.id,
  CabOptions: CabCustomizationDetail.questions,
};

export const FixedCustomizationIds = [
  HotelCustomizationDetail.required.id, //22
  HotelCustomizationDetail.category.id, //2
  FlightCustomizationDetail.id, //23
  ChildCustomizationDetail.id, // 7
  CabCustomizationDetail.required.id, //24
  CabCustomizationDetail.questions.id //3
];

export const TRIP_STAGES = {
  options: [
    { id: 1, name: 'Still Dreaming… Not sure I am going to take this trip' },
    { id: 2, name: 'I know I’m going somewhere, Just not sure which place' },
    { id: 3, name: 'I’m definitely going. I know which place… Let’s go!' },
    { id: 4, name: 'Flight- Train already booked, Just need remaining package' }
  ]
};
