import { SEO_FOOTER_LOAD_SUCCESS, SEO_FOOTER_RESET, SEO_FOOTER_LOAD_FAIL } from '../../actionConstants';

const initialState = {
  data: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEO_FOOTER_LOAD_SUCCESS:
      return {
        data: action.result.data
      };
    case SEO_FOOTER_RESET:
      return {
        data: {}
      };
    case SEO_FOOTER_LOAD_FAIL:
      return {
        data: {}
      };
    default:
      return state;
  }
}
