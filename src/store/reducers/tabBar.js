import * as actionTypes from "../actions/actionTypes";


const initialState = {
  servicesList: [],
  businessTypesList: [],
  allBusiness: [],
  cities: [],
  error: false,
};

const setServicesList = (state, action) => {
  return {
    ...state,
    servicesList:action.servicesList,
  }
}

const setBusinessTypesList = (state, action) => {
  return {
    ...state,
    businessTypesList: action.businessTypesList,
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
      return setBusinessTypesList(state, action);
    case actionTypes.FETCH_BUSINESS_TYPES_FAILED:
      return fetchBusinessTypesFailed(state, action);
      case actionTypes.SET_SERVICES:
        return setServicesList(state,action);
    default:
      return state;
  }
};

export default reducer;
