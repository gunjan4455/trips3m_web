import { HOME_UPDATE_SEARCH } from '../actionConstants';

const updateSearchTerm = searchTerm => ({
  type: HOME_UPDATE_SEARCH,
  searchTerm
});

export {
  updateSearchTerm,
};
