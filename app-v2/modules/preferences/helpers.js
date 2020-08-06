import {
  CabCustomizationDetail as CabCustomizations, FixedCustomizationIds,
  FlightCustomizationDetail as FlightCustomization,
  HotelCustomizationDetail as HotelCustomization, HotelRequiredIds
} from "./constants";

export function getFlightAnswerAttr(customizations, selectedAnswers) {
  const flightAttrs = { customizationId: FlightCustomization.id };
  const flightOption = customizations.find(e => e.id === FlightCustomization.id);
  const flightSelectedAns =
    selectedAnswers.find(e => flightOption.options.map(el => (el.id)).indexOf(e.optionId) !== -1);

  if (flightSelectedAns) {
    flightAttrs.optionId = flightSelectedAns.optionId.toString();
    flightAttrs.id = flightSelectedAns.id;
  }

  return flightAttrs;
}

export function getSelectedHotelIds(customizations, selectedAnswers) {
  const selectedHotelIds = {};
  const hotelCategoryOption = customizations.find(e => e.id === HotelCustomization.category.id);
  const hotelOptions = hotelCategoryOption.options;

  hotelOptions.map((hotelOption) => {
    selectedHotelIds[hotelOption.id] = false;
  });

  selectedAnswers.map((hotelOption) => {
    if (selectedHotelIds[hotelOption.optionId] !== undefined) {
      selectedHotelIds[hotelOption.optionId] = true;
    }
  });

  return selectedHotelIds;
}

export function isHotelRequired(customizations, selectedOptions) {
  const hotelRequiredOption = customizations.find(e => e.id === HotelCustomization.required.id);

  const hotelRequiredSelectedOption = hotelRequiredOption.options.find(option => selectedOptions[option.id]);

  return hotelRequiredSelectedOption && hotelRequiredSelectedOption.name === 'Yes';
}

export function getDriverLanguage(customizations, singleValueOptions, selectedAnswers, selectedOptions) {
  let driverSpeaks = undefined;
  const cabQuestionsPreference = getCabQuestionsPreference(customizations);
  if (cabQuestionsPreference) {
    singleValueOptions[cabQuestionsPreference.id] = { optionId: '' };
    const selectedOption1 = cabQuestionsPreference.options.find(e => selectedOptions[e.id]);
    if (selectedOption1) {
      singleValueOptions[cabQuestionsPreference.id].optionId = selectedOption1.id.toString();

      if (singleValueOptions[cabQuestionsPreference.id].optionId === CabCustomizations.domesticDestinationOptionId.toString()) {
        driverSpeaks = selectedAnswers.find(e => selectedOptions[selectedOption1.id] === e.id).userInput;
      }
    }
  }
  return driverSpeaks;
}

export function getOtherPreferencesOptions(preferences) {
  const preferenceData = preferences.preferencesData || {};
  const customizations = preferenceData.customizations || [];
  return customizations.filter(customization =>
    FixedCustomizationIds.indexOf(customization.id) < 0
  ).sort((a, b) => a.sequence - b.sequence);
}

export function getEligibleAnswersObj(eligibleAnswers) {
  const answersObj = {};
  for (const option of eligibleAnswers) {
    answersObj[option.optionId] = option.id;
  }

  return answersObj;
}

export function getTripPrefInitialFormData(preferences) {  // error
  const multiValueOptions = {};
  const singleValueOptions = {};

  const selectedAnswers = preferences.preferencesData.eligibleAnswers;

  const selectedOptions = getEligibleAnswersObj(selectedAnswers);

  const otherOptions = getOtherPreferencesOptions(preferences);
  for (const preference of otherOptions) {
    if (preference.valueType === 'single_value') {
      singleValueOptions[preference.id] = { optionId: '' };
      const selectedOption = preference.options.find(e => selectedOptions[e.id]);

      if (selectedOption) {
        singleValueOptions[preference.id].optionId = selectedOption.id.toString();
      }
    } else {
      multiValueOptions[preference.id] = { optionId: {} };
      for (const option of preference.options) {
        multiValueOptions[preference.id].optionId[option.id] = selectedOptions[option.id];
      }
    }
  }
  const customizations = preferences.preferencesData.customizations;
  const cabRequiredPreference = getCabRequiredPreference(customizations);

  if (cabRequiredPreference) {
    singleValueOptions[cabRequiredPreference.id] = { optionId: '' };
    const selectedOption = cabRequiredPreference.options.find(e => selectedOptions[e.id]);
    if (selectedOption) {
      singleValueOptions[cabRequiredPreference.id].optionId = selectedOption.id.toString();
    }
  }

  const driverSpeaks = getDriverLanguage(customizations, singleValueOptions, selectedAnswers, selectedOptions);
  const flightAttrs = getFlightAnswerAttr(customizations, selectedAnswers);
  const selectedHotelIds = getSelectedHotelIds(customizations, selectedAnswers);
  selectedHotelIds[HotelRequiredIds.NOT_REQUIRED] = !isHotelRequired(customizations, selectedOptions);

  return {
    info: preferences.info,
    budget: preferences.budget,
    flightAnswerAttributes: flightAttrs,
    driverSpeaks,
    hotelCategories: selectedHotelIds,
    singleValueOptions: singleValueOptions,
    multiValueOptions: multiValueOptions,
    otherPreferences: otherOptions
  };
}

export const getCabRequiredPreference = (customizations) => customizations.find(e => e.id === CabCustomizations.required.id);

export const getCabQuestionsPreference = (customizations) => customizations.find(e => e.id === CabCustomizations.questions.id);

const getLabel = (value) => {
  let label = '';
  if (!value) {
    label = 'Not Required';
  }
  else if (value.toLowerCase() === 'included') {
    label = 'Yes';
  }
  else if (value.toLowerCase() === 'excluded') {
    label = 'No';
  }
  else {
    label = value.toString();
  }
  return label;
};

const getSelectedOptions = (options, eligibleAnswers) => {
  const selectedOptions = [];
  options.forEach(option => {
    const selected = eligibleAnswers[option.id];
    if (selected) {
      selectedOptions.push(option.name);
    }
  });
  return selectedOptions;
};

const getFieldObject = (label, value) => {
  return {
    label,
    value
  };
};

export const getTripPreferences = (preferences) => {
  const { preferencesData: { eligibleAnswers: selectedAnswers } } = preferences;

  const eligibleAnswers = getEligibleAnswersObj(selectedAnswers);

  const otherPreferences = getOtherPreferencesOptions(preferences);
  const otherPrefFields = otherPreferences.map((preference) => {
    const selectedOptions = getSelectedOptions(preference.options, eligibleAnswers);
    return {
      label: preference.title,
      value: selectedOptions.length ? selectedOptions.join(', ') : '-'
    };
  });

  return [
    getFieldObject('Hotel', preferences.exclusivePreferencesValues.hotels || '-'),
    getFieldObject('Flight', preferences.exclusivePreferencesValues.flights || '-'),
    getFieldObject('Budget Per Person', preferences.budget || '-'),
    getFieldObject('Cabs', preferences.exclusivePreferencesValues.cabs || '-'),
    ...otherPrefFields,
    getFieldObject('Additional Preferences', preferences.info || '-'),
  ];
};

export const getRequestPreferences = (preferences) => {
  return {
    destination: preferences.toLoc,
    departureCity: preferences.fromLoc,
    departureDate: preferences.startDate,
    days: preferences.nights + 1,
    nights: preferences.nights,
    adults: preferences.adult,
    children: preferences.child,
    tripDays: preferences.tripDays,
    tripStage: preferences.tripStage
  };
};

export const getContactPreferences = (preferences) => {
  return {
    email: preferences.tripEmail,
    phoneNo: preferences.primaryPhoneNo.phoneNo,
    isdCode: preferences.primaryPhoneNo.isd
  };
};
