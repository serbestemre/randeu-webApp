import * as actionTypes from "../actions/actionTypes";


const initialState = {
  serviceTypes: [],
  businessTypes: [],
  allBusiness: [],
  cities: [],
  error: false,
};

const setBusinessTypes = (state, action) => {
  return {
    ...state,
    businessTypes: action.businessTypes,
    error: false,
  };
};

const fetchBusinessTypesFailed = (state, action) => {
  return {
    ...state,
    error: true,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BUSINESS_TYPES:
      return setBusinessTypes(state, action);
    case actionTypes.FETCH_BUSINESS_TYPES_FAILED:
      return fetchBusinessTypesFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
